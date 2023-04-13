// ------------ working with DOM ------------
// document - allows to manage html elements

document.write('<p>The End!</p>');

// get element from document
const productList = document.getElementById('product-list');
//document.querySelector('nav ol.super a') // ala css selector

// add new product
// 1 - using HTML
productList.innerHTML += '<li class="new-item">Apple HomePod 2 - 300$</li>';

// 2 - using methods
const item = document.createElement('li');  // create <li> tag
item.classList.add('new-item');             // add class
item.setAttribute('title', 'Test Title:)'); // add attribute
item.innerText = 'Apple HomePod Mini - 99$';// add inner content

productList.append(item);

class User {

    constructor(name, surname, isAdmin = false) {
        this.name = name;
        this.surname = surname;
        this.isAdmin = isAdmin;
    }

    addToList() {
        const list = document.getElementById('user-list');
        //list.innerHTML += `<li>User: ${this.name} ${this.surname}</li>`;
        const item = document.createElement('li');

        if (this.isAdmin)
            item.classList.add('admin-item');

        item.innerText = `User: ${this.name} ${this.surname}`;
        list.append(item);
    }
}

let admin = new User('Yura', 'Bobovich', true);
admin.addToList();

const addUserBtn = document.getElementById('add-user-btn');

addUserBtn.onclick = () => {
    admin.addToList();
}