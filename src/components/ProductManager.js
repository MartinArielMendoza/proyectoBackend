import {promises as fs} from "fs"

class ProductManager {
    constructor(){
        this.patch = "./productos.txt"
        this.products = []
    };

    static id = 0

    addProduct = async (title, description, price, image, code, stock) => {

        ProductManager.id++
        
        let newProduct={
            title,
            description,
            price,
            image,
            code,
            stock,
            id: ProductManager.id
        }

        this.products.push (newProduct)

        await fs.writeFile(this.patch, JSON.stringify(this.products))
    };

    readProducts = async () =>{
    let respuesta = await fs.readFile(this.patch, "utf-8")
    return JSON.parse(respuesta)
    };

    getProducts = async () =>{
    let respuesta2 = await this.readProducts()
    return console.log(respuesta2)
    };

    getProductsById = async (id) => {
    let respuesta3 = await this.readProducts()
    if (!respuesta3.find(product => product.id === id)){
        console.log("No existe");
    } else {
        console.log (respuesta3.find(product => product.id === id));
    }
    };
    
    deleteProductsById = async (id) =>{
        let respuesta3 = await this.readProducts();
        let productFilter = respuesta3.filter(products => products.id != id)
        await fs.writeFile(this.patch, JSON.stringify(productFilter)); 
    };

    updateProducts = async (producto)=>{

    };
}

//productos.addProduct("producto prueba","Este es un producto prueba","200","Sin imagen1","abc123","1")
//productos.addProduct("producto prueba2","Este es un producto prueba2","300","Sin imagen2","abc123","2")
//productos.addProduct("producto prueba3","Este es un producto prueba3","200","Sin imagen3","abc123","3")
//productos.addProduct("producto prueba4","Este es un producto prueba4","200","Sin imagen4","abc123","4")
//productos.addProduct("producto prueba5","Este es un producto prueba5","200","Sin imagen5","abc123","5")
//productos.addProduct("producto prueba6","Este es un producto prueba6","200","Sin imagen6","abc123","6")
//productos.addProduct("producto prueba7","Este es un producto prueba7","200","Sin imagen7","abc123","7")
//productos.addProduct("producto prueba8","Este es un producto prueba8","200","Sin imagen8","abc123","8")
//productos.addProduct("producto prueba9","Este es un producto prueba9","200","Sin imagen9","abc123","9")
//productos.addProduct("producto prueba10","Este es un producto prueba10","200","Sin imagen10","abc123","10")

//productos.deleteProductsById(1)

//productos.updateProducts({
    //title: 'producto prueba2',
    //description:'Este es un producto prueba2',
    //price:'3000',
    //image:'Sin imagen',
    //code:'abc123',
    //stock:'28',
    //id:'2'

//})

export default ProductManager
