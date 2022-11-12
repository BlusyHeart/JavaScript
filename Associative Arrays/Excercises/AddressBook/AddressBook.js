function Solve(input) {
  let addressBook = {};
  for (const data of input) {
    [userName, address] = data.split(":");

    addressBook[userName] = address;
  }

  let entries = Object.entries(addressBook);
  let sortEntries = entries.sort(([keyA], [keyB]) => {
    return keyA.localeCompare(keyB);
  });

  for (const [name, address] of sortEntries) {
    console.log(`${name} -> ${address}`);
  }
}
Solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
