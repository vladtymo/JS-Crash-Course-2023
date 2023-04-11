// ------------- classes -------------
// OOP - Object-Oriented Programming
// class = object prototype

class User {
    // defines such members: fileds, methods, constructor, getters/setters

    username;
    #password; // private field

    // ! class can has only one constructor
    constructor(username, password) {
        this.username = username;
        this.#password = password;
        this.role = "primary"; // create field
    }

    show() {
        console.log(`User: ${this.username}, password: ${this.password}, role: ${this.role}`);
    }
    render() {
        // write() - insert HTML code to the end of the <body>
        document.write(`<h4>User Info:</h4>
                    <p>Username: ${this.username}</p>
                    <p>Password: ${this.password}</p>`);
    }

    // setter / getter
    set password(value) {
        if (value.length < 6)
            console.warn("The password too short!");
        else
            this.#password = value;
    }
    get password() {
        const first = this.#password[0];
        const last = this.#password[this.#password.length - 1];
        const middle = '*'.repeat(this.#password.length - 2);
        return `${first}${middle}${last}`; // 1****9
    }
}

let vlad = new User("vladtymo", "Qwer34"); // invoke constructor
let admin = new User("admin1", "111111");
let olga = new User("olga_super", "Test5454");

admin.show();

//admin.#password = "new"; // error
admin.password = "12345679999999"; // setter
console.log("Admin password: " + admin.password); // getter

admin.show();
admin.render();

// ----------- exdends -----------
class SuperUser extends User {

    // additional fields
    bonus;

    // super - reference to the parent class
    constructor(username, password, bonus) {
        super(username, password); // invoke parent constructor
        this.bonus = bonus;
    }

    render() {
        super.render();
        document.write(`<p>Bonus: ${this.bonus}</p>`);
    }
};

let superUser = new SuperUser('super_admin', 'Rererenjiw', 129);

superUser.show();
superUser.render();