type ProductCategory = "interior"|"exterior"|"bouquey";
export interface Product{
    id:number;
    name:string;
    price:number;
    img:string;
    isAvailable:boolean;
    isVisable:boolean;
    category:ProductCategory;
}
export const PRODUCTS: Product[]=[
    
    {
        id:1,
        name:"Piléa léa",
        price: 5,
        img:"assets/img/products/pilea-lea.png",
        isAvailable:true,
        isVisable:true,
        category:"interior"  
    },
    {
        id:2,
        name:"Bouquet",
        price: 10,
        img:"assets/img/products/bouquet.png",
        isAvailable:true,
        isVisable:true,
        category:"exterior"  
    },
    {
        id:3,
        name:"Streli",
        price: 50,
        img:"assets/img/products/streli.png",
        isAvailable:true,
        isVisable:true,
        category:"interior"  
    },
    {
        id:4,
        name:"Piléa léa4",
        price: 8,
        img:"assets/img/products/pilea-lea.png",
        isAvailable:false,
        isVisable:true,
        category:"interior"  
    },
    {
        id:5,
        name:"Bouquet5",
        price: 20,
        img:"assets/img/products/bouquet.png",
        isAvailable:false,
        isVisable:true,
        category:"exterior"  
    },
    {
        id:6,
        name:"Streli6",
        price: 150,
        img:"assets/img/products/streli.png",
        isAvailable:false,
        isVisable:true,
        category:"interior"  
    },
];
