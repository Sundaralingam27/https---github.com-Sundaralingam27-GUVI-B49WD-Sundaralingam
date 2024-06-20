const apiURL  = "https://restcountries.com/v3.1/all";

fetch(apiURL)
.then ((response)=> {
    if (response.status ===200) {
        return response.json();
    }
})
.then ((val) => {
    console.log (val);
    for (var i=0;i<val.length; i++){
        console.log (val [i].flag);
        console.log (val [i].name);
        console.log (val [i].capital)
    }
})
.catch((err)=>{
    console.log("error",err);
});