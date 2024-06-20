function gravy() {
    setTimeout (()=> {
     new Promise((resolve, reject) => {

    ((resolve,reject)=>{
        resolve.then {
            console.log ("gravy was ready")
        }
     })
    })
    },5000) 
}

async function dinner() {
    await gravy ();
    try {
        console.log("let's start eating dinner and wait for gravy")
    
    } catch (error) {
    console.log("Error Occured",error)        
    }
    }
dinner();