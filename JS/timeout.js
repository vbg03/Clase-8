const evaluar =()=>{
    const edad = prompt("cual es tu edad?")
    if(edad>21){
        alert("mayor de edad!");
    }else{
        alert("menor de edad!");
    }
}

setTimeout(evaluar, 2000);