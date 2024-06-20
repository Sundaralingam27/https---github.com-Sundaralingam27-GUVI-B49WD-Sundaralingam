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
    
    Promise.all([asynchTask1(),asynchTask2(),asynchTask3()])
    .then ((val)=> {
    console.log(val)
    console.log("All tasks are completed")
    })
    .catch ((err) => {
        console.log (err) 
    });
    