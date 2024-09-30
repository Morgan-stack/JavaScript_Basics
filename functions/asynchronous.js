// Promises

// Case 1 - Synchronous Demo.

// In this case, the code inside promise will be synchronous
// which means it will block the execution of code @ Line 17

console.log("synchronous 1")


const promise = new Promise((resolve,reject) => {
    let i = 0;
    while(i < 1_000_000_000){i++}
    resolve("data back from server")
})

console.log("synchronous 2")

promise.then(res=> {
    console.log(res)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log("done")
})

// To make it async, case 2 - Asynchronous Demo.

console.log("synchronous 1")

const promise2 = new Promise((resolve,reject) => {
    
    return Promise.resolve().then(()=>{
        let i = 0;
        while(i < 1_000_000_000){i++}
        resolve("data back from server")
    })
})

console.log("synchronous 2")

promise2.then(res=> {
    console.log(res)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log("done")
})