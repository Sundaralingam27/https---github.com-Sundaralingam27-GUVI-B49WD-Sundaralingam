function gravy() {
    setTimeout (()=> { 
console.log ("gravy was ready")
    },3000)
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