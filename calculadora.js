let btn= document.querySelector('.btn');

/*Añade un evento al presionar el boton calcular*/
btn.addEventListener('click', ()=>{
    let peso=document.getElementById('weight').value; /*Obtenemos el valor del input peso*/
    let estatura= document.getElementById('height').value; /*Obtenemos el valor del input estatura*/
    imc=peso/(Math.pow(estatura,2)); /*Calculamos el indice de masa corporal*/

     /*Se crea la variable que contiene lo que queremos
     modificar en el label con nombre de clase resultado*/
     let res='<label for="result" class="resultado" id="resultado">Tu IMC es: '+imc+'</label>';
     /*obtenemos la clase resultado y la modificamos con la variable anteriormente declarada */
    document.querySelector('.resultado').innerHTML=res;
    if(imc<=18.5){
        let lowWeight='<div class="res-description col-lg-8"><h2 class="title">Tu resultado es</h2><p>La informacion que ingresó:</p><p>Estatura: '+estatura+'metros</p></p><p>Peso: '+peso+' kilogramos</p><p>Su IMC es '+imc+'</p></div>'
        document.querySelector('.res-description').innerHTML=lowWeight;
    }if(imc>=18.5 && imc<=24.9){
        let healthyWeight='<div class="res-description col-lg-8"><h2 class="title">Tu resultado es</h2><p>La informacion que ingresó:</p><p>Estatura: '+estatura+'metros</p></p><p>Peso: '+peso+' kilogramos</p><p>Su IMC es '+imc+'</p></div>'
        document.querySelector('.res-description').innerHTML=healthyWeight;
    }if(imc>=25.0 && imc<=29.9){
        let overWeight='<div class="res-description col-lg-8"><h2 class="title">Tu resultado es</h2><p>La informacion que ingresó:</p><p>Estatura: '+estatura+'metros</p></p><p>Peso: '+peso+' kilogramos</p><p>Su IMC es '+imc+'</p></div>'
        document.querySelector('.res-description').innerHTML=overWeight;
    }if(imc>=30.0){
        let xxWeight='<div class="res-description col-lg-8"><h2 class="title">Tu resultado es</h2><p>La informacion que ingresó:</p><p>Estatura: '+estatura+'metros</p></p><p>Peso: '+peso+'kilogramos</p><p>Su IMC es '+imc+'</p></div>'
        document.querySelector('.res-description').innerHTML=xxWeight;
    }if(imc==0 || imc==''){
        let nulo='<div class="res-description col-lg-8"><h2 class="title">Tu resultado es</h2><p>La informacion que ingresó:</p><p>Estatura: '+estatura+'metros</p></p><p>Peso: '+peso+' kilogramos</p><p>Su IMC es '+imc+'</p><p>Por favor verifique los datos ingresados</p></div>'
        document.querySelector('.res-description').innerHTML=nulo;
    }

})