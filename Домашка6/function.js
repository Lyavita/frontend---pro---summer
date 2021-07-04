function totalAmout(products) {
    let amount = 0;
    for (let i = 0; i < products.length; i++) {
    amount = amount + products[i].quantity * products[i].price;
    }
    return amount;
}

function totalQuantity(products) {
    let quantityProdacts = 0;
    for (let i = 0; i < products.length; i++) {
    quantityProdacts = quantityProdacts + products[i].quantity;
    }
    return quantityProdacts;
}

function avaragePriceOfOneProduct(products) {
    let avarage;
    avarage = totalAmout(products) / totalQuantity(products);
    return avarage;
} 

function productsSortedAscendingPrice(products) {
    let productsListCopyAscendingPrice = products.slice();
    productsListCopyAscendingPrice.sort (function(a, b){ 
    return a.price - b.price;
    });
    return productsListCopyAscendingPrice;
}
 
function printSorted(productsNew) {
    let productArray = [];
    for (let i = 0; i < productsNew.length; i++) {
        prod = `\n` + productsNew[i].title + ` ` + productsNew[i].price;
        productArray.push(prod);
    }
    alert(productArray);
}

