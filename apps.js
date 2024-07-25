// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
// https://v6.exchangerate-api.com/v6/7abc76156c07157d6f35c4c8/latest/USD
const key = "7abc76156c07157d6f35c4c8";
const BASE_URL = "https://v6.exchangerate-api.com/v6";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");


for(let select of dropdowns) {
    for(currCode in countryList){
       let newOption = document.createElement("option");
       newOption.innerText = currCode;
       newOption.value = currCode;
       if(select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
       }
       else  if(select.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
       }

       select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });

}

  const updateFlag = (element) => {
    let currCode = element.value;
   // console.log(currCode);
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`; 
    let img =  element.parentElement.querySelector("img");
    img.src = newSrc;

  }

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount Input");
    let amtVal = amount.value;
   // console.log(amtVal);
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amount.value = "1";
     }
 
  console.log(fromCurr.value, toCurr.value);
  
  // https://api.currencyapi.com/v3/latest?apikey=cur_live_OiFKTuCwzuRuZyHhwB5pcN3AbszPntri6vtywRsV&currencies=EUR%2CUSD%2CCAD
  //  const URL = ${BASE_URL}${fromCurr.value.toLowerCase}%2C${toCurr.value.toLowerCase}%2CCAD;
   const URL =`${BASE_URL}/${key}/${fromCurr.value.toLowerCase} /$ {toCurr.value.toLowerCase}`;
    console.log(URL);
    let response = await fetch(URL);
    console.log(response);

     
    });
