const partsDatabase = Array.from({ length: 10000 }, (_, i) => ({
  id: i + 1,
  sku: `SKU-${i}`,
  name: `Part ${i}`,
  pricePublic: 100,
  priceMechanic: 80
}));

const quoteCart = Array.from({ length: 5000 }, () => ({
  partId: Math.floor(Math.random() * 10000) + 1,
  quantity: 1
}));

console.time('find');
let sum1 = 0;
quoteCart.forEach(item => {
  const part = partsDatabase.find(p => p.id === item.partId);
  if (part) sum1 += part.pricePublic;
});
console.timeEnd('find');

const partsMap = new Map(partsDatabase.map(p => [p.id, p]));

console.time('map');
let sum2 = 0;
quoteCart.forEach(item => {
  const part = partsMap.get(item.partId);
  if (part) sum2 += part.pricePublic;
});
console.timeEnd('map');
