function Solve(input) {
  let map = new Map();

  for (const data of input) {
    [product, quantity] = data.split(" ");

    if (!map.has(product)) {
      map.set(product, 0);
    }

    map.set(product, map.get(product) + Number(quantity));
  }

  for (const [key, value] of map.entries()) {
    console.log(`${key} -> ${value}`);
  }
}
Solve(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
