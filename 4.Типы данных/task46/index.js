
let user = {
    name: "Василий Иванович",
    age: 35
};
let json = JSON.stringify(user);
let user1 = JSON.parse(json);

console.log(json);
console.log(user1);