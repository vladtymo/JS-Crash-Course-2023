// -------- objects --------
// create empty object
var obj = new Object();
var obj = {};

let product = {};

// add properties using keys
product["model"] = "BX60";
product["price"] = 140.5;
product["inStock"] = true;

console.log(`Product info: ${product["model"]}: ${product["price"]}$`);

// ... using .field_name
product.category = "Electronics";
product.discount = 15;

console.log(`Product info: ${product.model}: ${product.price}$ - ${product.discount}%`);

// delete properties
delete product.category;
console.log(`Category: ${product.category}`); // undefined

// check if property exists
if ("price" in product)
    console.log("Category exists!");
else
    console.log("Category does not exist!");

// interate all properties
for (const key in product) {
    console.log(`[${key}]: ${product[key]}`);
}

// initilaize object with proeprties
let user = {
    // fields
    username: "super_admin",
    password: "Qwerty",
    id: 3449,
    // inner object
    address: {
        city: "Rivne",
        country: "Ukraine",
        street: "Soborna, 5a"
    },
    // inner array
    roles: ["common", "moderator", "teacher"],

    // methods
    show() {
        console.log(`I am ${this.username}, password: ${'*'.repeat(this.password.length)}`);
    },
    showAddress() {
        console.log(`Address: ${this.address.street}, ${this.address.city} ${this.address.country}`);
    },
    changePassword(newPassword) {
        if (newPassword.length < 6)
            console.warn("The password too short!");
        else
            this.password = newPassword;
    }
};

console.log(user.email); // undefined
user.email = "example@ukr.net";

// invoke functions/methods with syntax: name()
user.changePassword("Hgutu77-34#"); // done
user.changePassword("213");         // ignore
user.show();
user.showAddress();

let admin = {
    username: "test",
    //... duplicate all fields and methods
}