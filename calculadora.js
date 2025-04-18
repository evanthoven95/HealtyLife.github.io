$(document).ready(function(){

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 100);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});

});


let btn= document.querySelector('.btn');
 
/*Añade un evento al presionar el boton calcular*/
btn.addEventListener('click', ()=>{
        let peso=document.getElementById('weight').value; /*Obtenemos el valor del input peso*/
        let estatura= document.getElementById('height').value; /*Obtenemos el valor del input estatura*/
    
        function alertaPeso(peso){
         if (parseFloat(peso)===0||peso===''){
            Swal.fire({ icon: "error",title: "Oops...",text: "Debe ingresar su peso",});
              return;
         }else {
            return true;
         }
        }
        
        alertaPeso();
    
        function alertaEstatura(estatura){

            if(parseFloat(estatura)===0||estatura===''){
                Swal.fire({icon: "error",title: "Oops...",text: "Debe ingresar su estatura",});
                return;
            }
            else{
                return true;
            }
        }
        
        alertaEstatura(estatura);
     
     /*Se crea la variable que contiene el imc y lo
        imprimimos en el label con nombre de clase resultado*/
        
        peso = parseFloat(peso);
        estatura = parseFloat(estatura);

        
        function validarImc(peso,estatura){

            let imc=peso/(Math.pow(estatura,2)); /*Calculamos el indice de masa corporal*/    
            
            if (!isFinite(imc)||isNaN(imc)){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "No está ingresando datos válidos",
                })
                return;
            }
            if (imc>=0 && imc<=13.5){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Su IMC no puede ser menor a 13.5",
                });
                return;
            }
            if(imc>=13.6 && imc<=18.4){
            let lowWeight='<div class="res-description col-lg-6"><h2 class="title">Tu resultado es</h2> <p>La informacion que ingresó:</p> <p>Estatura: '+estatura+' metros</p> <p>Peso: '+peso+' kilogramos</p> <p>Su IMC es '+Math.round(imc)+', su IMC es <span class="span-danger">BAJO</span>, se recomienda comer alimentos nutritivos y ricos en calorías, es una buena forma de ganar peso. También es importante comprender la razón por la que tienes un bajo peso.</p><p>Lo mejor que puedes hacer es consultar con tu proveedor de atención médica si has perdido peso de forma inesperada. Tu proveedor de atención médica o un dietista pueden ayudarte a ganar peso de forma saludable. Juntos pueden crear un plan según tus necesidades.</p></div>'
            document.querySelector('.res-description').innerHTML=lowWeight;
            return imc;
            }
            if(imc>=18.5 && imc<=24.9){
            let healthyWeight='<div class="res-description col-lg-6"><h2 class="title">Tu resultado es</h2> <p>La informacion que ingresó:</p> <p>Estatura: '+estatura+' metros</p> <p>Peso: '+peso+' kilogramos</p> <p>Su IMC es '+Math.round(imc)+', se considera dentro del rango <span class="span-saludable">NORMAL O SALUDABLE</span>, recuerde mantener una alimentación balanceada y realizar ejercicio regularmente.</p> </div>'
            document.querySelector('.res-description').innerHTML=healthyWeight;
            return imc;
            }
            if(imc>=25.0 && imc<=29.9){
            let overWeight='<div class="res-description col-lg-6"><h2 class="title">Tu resultado es</h2> <p>La informacion que ingresó:</p> <p>Estatura: '+estatura+' metros</p> <p>Peso: '+peso+' kilogramos</p><p>Su IMC es '+Math.round(imc)+', se encuentra dentro del rango de <span class="span-sobrepeso">SOBREPESO</span>, consulte a su médico para establecer una guía de alimentación con los nutrimentos necesarios, además de realizar ejercicio regularmente.</p> </div>'
            document.querySelector('.res-description').innerHTML=overWeight;
            return imc;
            }
            if(imc>=30.0 && imc<=60){
            let xxWeight='<div class="res-description col-lg-6"><h2 class="title">Tu resultado es</h2> <p>La informacion que ingresó:</p> <p>Estatura: '+estatura+' metros</p> <p>Peso: '+peso+' kilogramos</p><p>Su IMC es '+Math.round(imc)+', se encuentra dentro del rango de <span class="span-danger">OBESIDAD</span>, esta condición lo pone en riesgo de paceder enfermedades como diabetes tipo 2, problemas respiratorios, colesterol alto, entre otras. Consulte a su médico para establecer una guía de alimentación con los nutrimentos necesarios, además de realizar ejercicio regularmente.</p> </div>'
            document.querySelector('.res-description').innerHTML=xxWeight;
            return imc;
            }
                  
        }
        
        let imc=validarImc(peso,estatura);
        if(isNaN(imc)){
            let res2='<label class="resultado" id="resultado">Datos erróneos.</label>';
            document.querySelector('.resultado').innerHTML=res2; 
            return res2;
            
        }else{
            let res='<label class="resultado" id="resultado">Tu IMC es: '+Math.round(imc)+'</label>';
            document.querySelector('.resultado').innerHTML=res; 
            return res;
        }
        

});



