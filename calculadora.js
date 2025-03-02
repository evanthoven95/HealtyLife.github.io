let btn= document.querySelector('.btn');

/*Añade un evento al presionar el boton calcular*/
btn.addEventListener('click', ()=>{
    let peso=document.getElementById('weight').value; /*Obtenemos el valor del input peso*/
    let estatura= document.getElementById('height').value; /*Obtenemos el valor del input estatura*/
    imc=peso/(Math.pow(estatura,2)); /*Calculamos el indice de masa corporal*/

     /*Se crea la variable que contiene lo que queremos
     modificar en el label con nombre de clase resultado*/
     let res='<label class="resultado" id="resultado">Tu IMC es: '+Math.round(imc)+'</label>';
     /*obtenemos la clase resultado y la modificamos con la variable anteriormente declarada */
    document.querySelector('.resultado').innerHTML=res;

    /* Se compara el imc y se modifica el div con la clase res-description de acuerdo al resultado del imc usando el DOM */
    if(imc===0 && imc===''){
        let nulo='<div class="res-description col-lg-6"><h2 class="title"><p>Por favor verifique los datos ingresados</p></div>'
        document.querySelector('.res-description').innerHTML=nulo;
    }if(imc<=18.5){
        let lowWeight='<div class="res-description col-lg-6"><h2 class="title">Tu resultado es</h2><p>La informacion que ingresó:</p><p>Estatura: '+estatura+' metros</p></p><p>Peso: '+peso+' kilogramos</p><p>Su IMC es '+Math.round(imc)+', su IMC es <span class="span-danger">BAJO</span>, se recomienda comer alimentos nutritivos y ricos en calorías, es una buena forma de ganar peso. También es importante comprender la razón por la que tienes un bajo peso.</p><p>Lo mejor que puedes hacer es consultar con tu proveedor de atención médica si has perdido peso de forma inesperada. Tu proveedor de atención médica o un dietista pueden ayudarte a ganar peso de forma saludable. Juntos pueden crear un plan según tus necesidades.</p></p></div>'
        document.querySelector('.res-description').innerHTML=lowWeight;
    }if(imc>=18.5 && imc<=24.9){
        let healthyWeight='<div class="res-description col-lg-6"><h2 class="title">Tu resultado es</h2><p>La informacion que ingresó:</p><p>Estatura: '+estatura+' metros</p></p><p>Peso: '+peso+' kilogramos</p><p>Su IMC es '+Math.round(imc)+', se considera dentro del rango <span class="span-saludable">NORMAL O SALUDABLE</span>, recuerde mantener una alimentación balanceada y realizar ejercicio regularmente.</p></div>'
        document.querySelector('.res-description').innerHTML=healthyWeight;
    }if(imc>=25.0 && imc<=29.9){
        let overWeight='<div class="res-description col-lg-8¿6"><h2 class="title">Tu resultado es</h2><p>La informacion que ingresó:</p><p>Estatura: '+estatura+' metros</p></p><p>Peso: '+peso+' kilogramos</p><p>Su IMC es '+Math.round(imc)+', se encuentra dentro del rango de <span class="span-sobrepeso">SOBREPESO</span>, consulte a su médico para establecer una guía de alimentación con los nutrimentos necesarios, además de realizar ejercicio regularmente.</p></div>'
        document.querySelector('.res-description').innerHTML=overWeight;
    }if(imc>=30.0){
        let xxWeight='<div class="res-description col-lg-6"><h2 class="title">Tu resultado es</h2><p>La informacion que ingresó:</p><p>Estatura: '+estatura+' metros</p></p><p>Peso: '+peso+'kilogramos</p><p>Su IMC es '+Math.round(imc)+', se encuentra dentro del rango de <span class="span-danger">OBESIDAD</span>, esta condición lo pone en riesgo de paceder enfermedades como diabetes tipo 2, problemas respiratorios, colesterol alto, entre otras. Consulte a su médico para establecer una guía de alimentación con los nutrimentos necesarios, además de realizar ejercicio regularmente.</p></div>'
        document.querySelector('.res-description').innerHTML=xxWeight;
    }

})
