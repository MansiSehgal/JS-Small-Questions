let listPrice = 799;
let sellingPrice = 199;

let discountPercent = ((listPrice - sellingPrice) / listPrice) * 100;
let rounded = Math.round(discountPercent);
console.log(rounded);
