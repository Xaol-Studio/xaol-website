const menuData = Array.from({ length: 1000 }, (_, i) => ({ id: i, name: `Item ${i}`, price: 10 }));
const cart = Array.from({ length: 1000 }, (_, i) => ({ id: Math.floor(Math.random() * 1000), qty: 1 }));

// Baseline
console.time("baseline");
for (let i=0; i<1000; i++) {
    cart.forEach((cItem) => {
        const item = menuData.find(m => m.id === cItem.id);
    });
}
console.timeEnd("baseline");

// Optimized
console.time("optimized_setup");
const menuMap = menuData.reduce((acc, item) => { acc[item.id] = item; return acc; }, {});
console.timeEnd("optimized_setup");

console.time("optimized_loop");
for (let i=0; i<1000; i++) {
    cart.forEach((cItem) => {
        const item = menuMap[cItem.id];
    });
}
console.timeEnd("optimized_loop");
