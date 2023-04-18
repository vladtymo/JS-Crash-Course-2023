const products = [];

const tableBody = document.querySelector('#product-table tbody');
// add product to the table
function addProductToTable(product) {

    tableBody.innerHTML += `<tr>
                                <th scope="row">${product.id}</th>
                                <td>${product.name}</td>
                                <td>${product.price}$</td>
                            </tr>`;
}

// get product from form
function readProduct() {
    const nameInput = document.getElementById('nameInput');
    const priceInput = document.getElementById('priceInput');

    return {
        id: products.length + 1,
        name: nameInput.value,
        price: priceInput.value
    };
}

// ----------- events -----------
const addBtn = document.getElementById('add-product-btn');
const clearBtn = document.getElementById('clear-all-btn');

// add event handler
addBtn.onclick = () => {
    // ... code ...
    console.log('Clicked!');

    const newProduct = readProduct();

    // TODO: add validation

    products.push(newProduct);
    addProductToTable(newProduct);
}

clearBtn.onclick = () => {
    tableBody.innerHTML = '';
    products.splice(0);
}