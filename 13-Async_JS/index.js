/********************************
  1️⃣ setTimeout (Async Example)
*********************************/

console.log("a");

setTimeout(() => {
  console.log("b (after 3 seconds)");
}, 3000);

console.log("c");

/********************************
  2️⃣ Basic Promise Example
*********************************/

let kaam = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Kaam ho gaya ✅");
  } else {
    reject("Error aa gayi ❌");
  }
});

kaam
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

/********************************
  3️⃣ Promise with setTimeout
*********************************/

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data mil gaya after 2 sec ⏳");
  }, 2000);
});

promise2.then((data) => {
  console.log(data);
});

/********************************
  4️⃣ Async / Await Example
*********************************/

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Async/Await se data aaya 🚀");
    }, 2000);
  });
}

async function fetchData() {
  let result = await getData();
  console.log(result);
}

fetchData();