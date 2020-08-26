// new Promise((resolve) => {
//     resolve();
//     Promise.resolve().then(() => console.log(2));
// }).then(() => console.log(4));

new Promise((resolve) => {
    resolve();
    Promise.resolve({
      then: function(resolve, reject) {
        console.log(1);
        resolve();
      },
    }).then(() => console.log(2));
    console.log(0);
  }).then(() => console.log(3));