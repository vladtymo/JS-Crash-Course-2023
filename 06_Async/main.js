console.log("Start operation...");

// do work
console.log("Getting data from server!");
setTimeout(() => {
    console.log("Finish operation!");
}, 2000);

// ------------- Promises -------------
// resolve() - logic when operation complete successfully
// reject()  - logic when smth went wrong
const job = new Promise((resolve, reject) => {
    // async job
    console.log('Preparing for hard work...');
    if (Math.random() > 0.5) {
        resolve('200 OK: Complete Successfull!');            // fullfiled
    }
    else {
        reject("401 Unauthorized: User must be authorized"); // reject
    }
});

// then()  - handle success work
// catch() - handle error
job.then((msg) => {
    console.log(msg);
}).catch((msg) => {
    console.warn(msg);
});

function connectToDb(connectionString) {
    return new Promise((resolve, reject) => {
        if (connectionString == '')
            reject(null); // error
        else {
            console.log("Connecting to the database: " + connectionString);
            setTimeout(() => {
                resolve({ id: 1004 }); // success
            }, 2300);
        }
    });
}

connectToDb('server-name: js-crash-course')
    .then((user) => document.body.innerHTML += (`<p>User ID:${user.id}<p/>`))
    .catch(() => console.warn("Error with connection!"));

// ----------- async / await keyword (introduced in ES8)
// we can use await only in async functions/methods
async function getUser() {
    const user = await connectToDb('server-name: js-crash-course');
    document.body.innerHTML += `<p>Next User ID:${user.id}<p/>`;
}
getUser();

//alert("Freeze");
console.log("Continue...");
//...