//callbacks & foreach

const myFunc = (callback) => {
    let value = 50;
    callback(value)
}

myFunc(function(value){
    console.log(value)
})