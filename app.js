const real= document.getElementById('real');
const dolar= document.getElementById('dolar');
const renminbi= document.getElementById('renminbi');
const bitcoin= document.getElementById('bitcoin');


real.addEventListener('input', realparaoutros); 
function realparaoutros (){
    const BRL= parseFloat(real.value);
    const USD= 0.19*BRL;
    const CNY= 1.22*BRL;
    const BTC= 0.0000044*BRL;
    dolar.value= USD;
    renminbi.value= CNY;
    bitcoin.value= BTC;
}

dolar.addEventListener('input', dolarparaoutros); 
function dolarparaoutros (){
    const USD= parseFloat(dolar.value);
    const CNY= 6.44*USD;
    const BTC= 0.000024*USD;
    const BRL= 5.26*USD;
    renminbi.value= CNY;
    bitcoin.value= BTC;
    real.value= BRL;
}

renminbi.addEventListener('input', renminbiparaoutros); 
function renminbiparaoutros (){
    const CNY= parseFloat(renminbi.value);
    const BTC= 0.0000036*CNY;
    const BRL= 0.82*CNY;
    const USD= 0.16*CNY;
    bitcoin.value= BTC;
    real.value= BRL; 
    dolar.value= USD;    
}

bitcoin.addEventListener('input', bitcoinparaoutros); 
function bitcoinparaoutros (){
    const BTC= parseFloat(bitcoin.value);
    const BRL= 225580.10*BTC;    
    const USD= 42837.90*BTC;
    const CNY= 274253.90*BTC;
    real.value= BRL;
    dolar.value= USD;
    renminbi.value= CNY;
}

function main(){
    realparaoutros();
    dolarparaoutros();
    renminbiparaoutros();
    bitcoinparaoutros();
}

main();