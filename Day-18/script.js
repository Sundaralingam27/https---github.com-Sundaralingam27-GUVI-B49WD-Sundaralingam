function asynchTask1 () {
return new Promise (( resolve,reject) =>{
resolve("ashync 1 is completed")
    })
}

function asynchTask2 () {
    return new Promise (( resolve,reject) =>{
    resolve("ashync 2 is completed")
        })
    }

function asynchTask3 () {
return new Promise (( resolve,reject) =>{
resolve("ashync 3 is completed")
    })
}

asynchTask1().then ((val) => {
setTimeout (()=> {
    console.log (val)
},1000), 
asynchTask2().then ((val) => {
setTimeout ( ()=> {
    console.log (val)
},2000),
asynchTask3().then ((val)=> {
setTimeout (()=> {
    console.log (val)
},3000)
})
})
}).catch ((err) => {
    console.log (err)
});
