// Promises

const promise = new Promise((resolve,reject) => {
    setTimeout(()=> {
        resolve(("data back from the server"))
    }, 3000)

    setTimeout(()=> {
        reject(("failed to get data from  server"))
    }, 5000)
})

// we run promise, after 3 secs, 
// if promise resolves successfully with some data back,
// reject code path is when something went wrong 

promise.then(res=> {
    console.log(res)
}).catch(err=>{
    console.log(err)
}).finally(()=>{
    console.log("done")
})