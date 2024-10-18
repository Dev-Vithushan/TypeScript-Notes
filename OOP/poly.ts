class Animal {
    sound(): void {
      console.log("This animal makes a sound.");
    }
  }
  
  class Dog extends Animal {
    sound(): void {
      console.log("The dog barks.");
    }
  }
  
  class Cat extends Animal {
    sound(): void {
      console.log("The cat meows.");
    }
  }
  
  function makeAnimalSound(animal: Animal) {
    animal.sound(); // Polymorphic behavior
  }
  
  const myDog = new Dog();
  const myCat = new Cat();
  
  makeAnimalSound(myDog); // "The dog barks."
  makeAnimalSound(myCat); // "The cat meows."
  