let dogs = ['Bella', 'Cornflakes', 'Pebbles', 'Adam'];
let bigDogs = [];
let index = 0;

while (index < dogs.length) {
    let newDogs = dogs[index].toUpperCase();
    bigDogs.push(newDogs);
    index += 1
}

console.log(bigDogs);
