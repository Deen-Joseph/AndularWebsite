export class Product {

    id:number;
    name:string;
    description:string;
    price:number;
    imageUrl:string;

    constructor(id:number,name:string,description='',price=0,imageUrl='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.WYmDzjyHiCBLNWO8-bcLRwHaHa%26pid%3DApi&f=1'){
        this.id=id
        this.name=name
        this.description=description
        this.price=price
        this.imageUrl=imageUrl
        

    }
}