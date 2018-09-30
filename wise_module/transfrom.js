function to_amout (quantity){
    var a = quantity.substring(0,quantity.indexOf(' ')+1)
    return  parseFloat(a)
}

function to_quantity (amout,syboml){
    return amout.toFixed(4)+' '+syboml
}

module.exports = {
    'to_amout':to_amout,
    'to_quantity':to_quantity
}