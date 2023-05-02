// ------------ working with AJAX ------------
// fetch(URL, HTTP_mehtod, parameters);

const usersApi = 'https://jsonplaceholder.typicode.com/users';

async function getServerData(url) {
    // make HTTP GET request
    let response = await fetch(usersApi);
    console.log(`Response status: ${response.status}`);

    const data = await response.json();
    console.log(`Data:`, data);

    renderUsers(data);
}

getServerData(usersApi);

function renderUsers(users) {
    const list = document.getElementById('user-list');

    for (const u of users) {
        list.innerHTML += `<li>${u.name} ${u.phone}</li>`
    }
}