

class Animal {
    sound() {
        console.log("some sound");
    }
}

class Dog extends Animal {
    sound() {
        console.log("Bark...");
    }
}

let animal = new Dog() ;