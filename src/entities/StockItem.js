export default class StockItem {
    constructor( {name, price, description, quantity, category} ) {
        this.id = Math.floor(Math.random() * 10000000)
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
        this.category = category;
        this.createdAt = new Date()
        this.updateAt = new Date()
    }
}