function add (a,b){
    const add = a+b ;
    if (a > b) {
        throw new Error("A is greater than B");
    }
try {
    
    console.log ("Result:",add)
} catch (error) {
    console.log(error)
}
}

add(10,15)