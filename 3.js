let emptyObj = () =>{
    return Object.create(null)
}
let obj = emptyObj()
console.log(obj);
console.log(Object.getPrototypeOf(obj));