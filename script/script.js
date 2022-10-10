// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

let i ="";

for (let i = 0; i <= 100; i++) {

    // Se numero multiplo sia di 3 che di 5 stampi “FizzBuzz”

    let fizzBuzz = "";

    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzz = "FizzBuzz";
      console.log(fizzBuzz);
        // Se numero multiplo di 3 stampi “Fizz”
    } else if (i % 3 ===0) {
        fizzBuzz = "Fizz";
        console.log(fizzBuzz);
        // Se numero multiplo di 5 stampi “Buzz”
    } else if (i % 5 ===0) {
        fizzBuzz = "Buzz";
        console.log(fizzBuzz);
    }
    else {
        fizzBuzz = i;
        console.log(fizzBuzz);
    }
}

