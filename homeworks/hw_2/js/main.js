class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];//массив товаров с версткой
        this._fetchProducts();
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    sumOfAllProducts() {
        let sumPrice = 0;
        for (let product2 of this.goods){
            sumPrice += product2.price;
        }
        console.log(sumPrice);
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
            const item = new ProductItem(product);
            this.allProducts.push(item);
            block.insertAdjacentHTML("beforeend",item.render());
            //block.innerHTML += item.render();
        }
    }
}

class ProductItem{
    constructor(product,img='https://placehold.it/200x150'){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.img = img;
    }
    render(){
           return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price}</p>
                    <button class="buy-btn">Купить</button>
                 </div>
            </div>`
    }
}

class Cart {
    constructor(container = '.btn-cart') {
        this.container = container;
        this.goodsInCart = [];
        this.Amount = [];
        this.totalPrice = 0;
    }
}

let list = new ProductList();
list.render();
list.sumOfAllProducts();
