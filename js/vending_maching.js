const snacks = [
    {
        id: 1,
        name: "Reese's Peanutbutter Cups",
        price: 150
    },
    {
        id: 2,
        name: "BBQ Chips",
        price: 150
    },
    {
        id: 3,
        name: "M&Ms",
        price: 500
    },
    {
        id: 4,
        name: "Twinkie",
        price: 1000
    },
    {
        id: 5,
        name: "Pretzels",
        price: 100
    }
];



const vendingMachine = (products, payment, productId) => {
    const coins = [500, 200, 100, 50, 20, 10]
    if (productId > products.length && productId > 0) {
        return "Enter a valid product number";
    }
    let product = {};
    for (let p of products) {
        if (p.id === productId) {
            product = p;
            break;
        }
    }
    if (product.price > payment) {
        return "Not enough money for this product";
    }
    let changeDue = payment - product.price;
    total = 0;
    let change = [];
    while (total < changeDue) {
        for (let coin of coins) {
            if (coin + total <= changeDue) {
                total += coin;
                change.push(coin);
                break;
            }
        }
    }
    return {
        product: product.name,
        change
    };
}


// console.log(vendingMachine(snacks, 500, 1));

let principle = 10000;

for (let i = 0; i < 261; i++) {
    principle += principle * .01
}

console.log(principle)