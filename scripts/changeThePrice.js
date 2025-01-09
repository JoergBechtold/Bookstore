function changeThePrice(i) {
  let toFixedPrice = books[i].price.toFixed(2);
  let newPrice = toFixedPrice.replace('.', ',');
  return newPrice;
}
