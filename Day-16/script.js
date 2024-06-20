function playCricket (callback) {
console.log("let's play cricket")
setTimeout(() => {
    console.log("innings break")
    callback();
}, 3000);
};

function playBegins () {
    setTimeout ( ()=> {
    console.log("innings break over play begins")
    },3000);

};

playCricket(playBegins);