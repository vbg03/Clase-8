const sumar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 < 0 || num2 < 0) {
            reject("esto no es válido")
        } else {
            resolve(num1 + num2);
        }
    })
}

const result = sumar(45, -54)
.then((res)=>{
    document.write(res)
})
.catch((error)=>{
    document.write(error);
})