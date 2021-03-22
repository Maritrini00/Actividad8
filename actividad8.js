const mensaje= () =>{
    let nombre = document.getElementById("nombre").value;
    let sexo = document.getElementById("sexo").value;
    let mensajeBinevenida ="";
    if(sexo ==1){
       mensajeBinevenida = `Bienvenida ${nombre}`
    }else {
       mensajeBinevenida = `Bienvenido ${nombre}`
    }
    document.getElementById("resultado").innerHTML =mensajeBinevenida;
   
}