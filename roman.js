//create an array of values
const btn = document.querySelector("button")
const par = document.querySelector("p")
const input =  document.querySelector('input')



const units = ['','i','ii','iii','iv','v','vi','vii','viii','ix']
const tens = ['','x','xx','xxx','xl','l','lx','lxx','lxxx','xc']
const huns = ['','c','cc','ccc','cd','d','dc','dcc','dccc','cm']
const tho =  ['','m','mm','mmm']

function converter(){
    const number = input.value
    let val 

    number.length == 1 ? val = units[number] : number.length ==2? val = tens[number[0]] +  units[number[1]] : number.length ==3? val = huns[number[0]]+ tens[number[1]]+ units[number[2]]:val = tho[number[0]]+huns[number[1]]+ tens[number[2]]+ units[number[3]]

    return par.textContent = val
    
}

btn.addEventListener("click", converter)
