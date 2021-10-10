export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    
    constructor(id: any , name: any, description = ' ', price = 0, imgUrl = 'http://placehold.it/200x150/000/fff'){
        this.id = id
        this.name = name
        this.description = description
        this.price = price
        this.imgUrl = imgUrl
    }
}
