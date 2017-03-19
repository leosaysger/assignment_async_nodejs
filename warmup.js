var p = new Promise(resolve => setTimeout(() => {
  resolve("Hello Promise!")
}, 1000));

p.then((message) => {
  console.log(message)
});

function delay(milliseconds) {
  return new Promise(resolve => setTimeout(() => {
    if (milliseconds == 0) {
      resolve('Done!')
    } else {
      resolve(milliseconds);
    }
  }, milliseconds));
}

function countDown(result) {
  console.log(result);
  return delay(result - 100);
}

delay(1000).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown).then(countDown);

function square(num) {
  return new Promise((resolve, reject) => {
    if (isNaN(num) == false) {
      resolve(num * num)
    } else {
      reject(num + " is not a number")
    }
  });
}

var arr = Array.from(new Array(9), (val, index) => index + 1)

arr = arr.map(i => square(i));

Promise.all(arr).then(results => {
  console.log(results);
})

function doBadThing(forRealz) {
  return new Promise((resolve, reject) => {
    if (forRealz) {
      reject('boo');
    } else {
      resolve('yay.');
    }
  });
}

doBadThing(true).then(result => console.log(result)).catch(err => console.log(err))
