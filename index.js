let temp = document.querySelector("#input-celsius");
const valorKelvin=273;
const valorFarenheit = 160;
let paragrafo = document.createElement('h2');
paragrafo.textContent="Pressione 'Enter' para calcular a temperatura.";
let body = document.querySelector(".corpo");
body.appendChild(paragrafo);

function CalculaKelvin(){
    let valortemp = parseInt(temp.value);
    let kelvin = (valortemp + valorKelvin);
    return kelvin;
    console.log(!isNaN(valortemp));
}
function CalculaFahrenheit(){
  let valortemp = parseInt(temp.value);
  let farenheit = (9*valortemp+valorFarenheit)/5;
  return farenheit;

}


const tempKelvin = document.querySelector('#temp-kelvin');
const tempFahrenheit = document.querySelector('#temp-fahrenheit')
const resultado=0;


temp.addEventListener('keydown', (event)=>{

  if(event.which==13){
    tempKelvin.innerHTML=  CalculaKelvin();
    tempFahrenheit.innerHTML= CalculaFahrenheit();
  }


})