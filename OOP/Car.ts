class Car {
    model: string;
    company: string;
    color: string;
    maxSpeed: number;
    height: number;
    safetyRating: string;
    price: number;
    


    start(){
        console.log("Your Car is starting")
    }

    stop(){
        console.log("Your Car is stopping")
    }

    makeSound(): void {
        console.log("Car is Making some sounds");
        
    }
}



const add = (a: number, b: number): number => {
    return a + b;
}

console.log(add(10,20))
console


