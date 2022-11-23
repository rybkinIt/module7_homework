let obj={
    a:1,
    b:2,
    c:3
}
let func = (arg, name) => {
    return(name in arg)
}
console.log(func(obj, 'a'))
console.log(func(obj, 'b'))
console.log(func(obj, 'e'))