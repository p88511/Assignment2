/*
Assignment2
Name: Hanhsing Pao
*/

/*
Question 1
Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];
//new array which doubles the quantity and price.
const items = itemsObject.map((ele) => {
  return {
    quantity: ele.quantity * 2,
    price: ele.price * 2,
  };
});

console.log("This is Question1", "\n", "Double items:", items);

//new array which contains item quantity > 2 and price > 300.
const items2 = itemsObject.filter((ele) => {
  return ele.quantity > 2 && ele.price > 300;
});
console.log("Which item quantity > 2 and price > 300:", items2);

//calculate the total value.
const items3 = itemsObject.reduce((acc, ele) => {
  return acc + ele.quantity * ele.price;
}, 0);
console.log("Total value:", items3, "\n");

/*
Question 2
Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.
*/
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
let str = string.toLowerCase().trimStart().trimEnd().split(/[ -]+/).join(" ");
console.log("This is Question2", "\n", str, "\n");

/*
Question 3
Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.
*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const first_item = first.map((ele) => {
  return {
    uuid: ele.uuid,
    role: null,
    name: ele.name,
  };
});
const second_item = second.map((ele) => {
  return {
    uuid: ele.uuid,
    role: ele.role,
    name: null,
  };
});

let merged = [...first_item, ...second_item];
let sort_item = merged.sort((x, y) => {
  return x.uuid - y.uuid;
});
console.log("This is Question3", "\n", sort_item);
