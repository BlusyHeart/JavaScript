function PhoneBook(input) {
  let phoneBook = {};

  for (const line of input) {
    [userName, phoneNumber] = line.split(" ");
     phoneBook[userName] = phoneNumber;
  }

  for (let key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}
PhoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
