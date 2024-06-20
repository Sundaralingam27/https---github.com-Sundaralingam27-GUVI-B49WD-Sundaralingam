const promiseObj = new Promise ( (resolve, reject) => {

    console.log ("Promise was called")
    //resolve ("resolve is called")
    reject ("reject is called")
});

console.log(promiseObj);

// method 1
promiseObj.then( 
    (val)=>{
        console.log("fullifilled",val)
    },
    (err)=> {
        console.log("rejected",err)
    }
); 

//method 2

/*promiseObj
.then( 
    (val)=>{
        console.log("fullifilled",val)
    })
.catch ((err)=> {
        console.log("rejected",err)
    }
) */