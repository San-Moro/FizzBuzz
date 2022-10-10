// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

const row = document.querySelector(".row");
let i ="";

for (let i = 1; i <= 100; i++) {

    // Se numero multiplo sia di 3 che di 5 stampi “FizzBuzz”

    let myNumbers = "";

    if (i % 3 === 0 && i % 5 === 0) {
        myNumbers = "FizzBuzz";
        // Se numero multiplo di 3 stampi “Fizz”
    } else if (i % 3 ===0) {
        myNumbers = "Fizz";
        // Se numero multiplo di 5 stampi “Buzz”
    } else if (i % 5 ===0) {
        myNumbers = "Buzz";
    }
    else {
        myNumbers = i;
    }

    // Output
    const box = document.createElement("div");
    box.classList.add("box");
    box.classList.add("myNumbers");
    box.innerHTML = myNumbers;
    console.log(box);
    row.append(box);
}

