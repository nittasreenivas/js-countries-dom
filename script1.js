let Countries = []
const API = async () => {
    let res = await fetch("https://restcountries.com/v3.1/all")
    let data = await res.json()
    Countries = data
    genCountires(Countries)
}

const genCountires = (data) => {
    let dd = document.getElementById('dd')
    dd.innerHTML = ''
   data.forEach((c,i) => {
    let newLi = document.createElement('li')
    newLi.innerHTML = c.name.common
    let newImg = document.createElement('img')
    newImg.src = c.flags.svg
    newImg.style.width = '100px'
    newLi.appendChild(newImg)
    let population = document.createElement('h4')
    population.innerHTML = c.population
    newLi.appendChild(population)
    let delbtn = document.createElement('button')
    delbtn.innerHTML = 'DEL'
    delbtn.onclick = () => delCountry(i)
    newLi.appendChild(delbtn)

    dd.appendChild(newLi)
   })
   document.getElementById('total').innerText = `the are total ${data.length} counties`
}

function delCountry(i){
   Countries.splice(i,1)
   genCountires(Countries)
}
API()


function SortByPopulationAsc(){
    let res = [...Countries].sort((a,b) => {
        if(a.population > b.population){
            return 1
        }else{
            return -1
        }
    })
    genCountires(res)
}

function SortByPopulationDsc(){
    let res = [...Countries].sort((a,b) => {
        if(a.population > b.population){
            return -1
        }else{
            return 1
        }
    })
    genCountires(res)
}