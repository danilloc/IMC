
let calcular = document.getElementById('calcular');


function imc(){
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let res = document.getElementById('res');


if(nome !== '' && altura !== '' && peso !== ''){
    
    const imc = (peso / ( altura * altura)).toFixed(2);

    res.textContent = imc

  
    if(imc < 18.5){
        res.textContent = `${nome} você está abaixo do peso normal`
    }else if ( imc >= 18.5 && imc < 24.9){
        res.textContent = `${nome} você está no peso normal` 
    }else if ( imc >= 25.0 && imc < 29.9){
        res.textContent = `${nome} você esta com excesso de peso`
    }else if( imc >= 30.0 && imc < 34.9){
        res.textContent = `${nome} você está com obesidade classe I`
    }else if (imc >= 35.0 && imc <39.9){
        res.textContent = `${nome} você está com obesidade classe II`
    }else if (imc >40.0) {    
    res.textContent = `${nome} você está com obesidade classe III`}



}else{
    res.textContent = 'Preencha todos os campos'
    
}




}

calcular.addEventListener('click', imc);


