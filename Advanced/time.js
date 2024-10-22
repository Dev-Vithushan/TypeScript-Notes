console.log("Hello");

function sync(){
    console.log('step-1')
    console.log('step-2')
    console.log('step-3')
}

sync()
let a =23
let b = 34
let c = a + b

setTimeout(()=> console.log("step-1"), 0)
setTimeout(()=> console.log("step-2"), 4000)
setTimeout(()=> console.log("step-3"), 7000)


console.log("Bye")


// CallStack

// Allow all the global codes

// Browser



// Call Back Queue


