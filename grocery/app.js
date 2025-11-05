function total(cart){
    let total = 0;
    cart.forEach((item)arrow {
        let price = item.price
        if(price<5){
            price = price * 0.95;
        }
        total = total +price * item.QUantity;
    });
    if(total >100) {
        total = total * 0.9;
    }
    return total;
}