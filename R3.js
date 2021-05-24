// evento del form
const city = document.getElementById("input")

document.querySelector("form").onsubmit = (e)=>{
    e.preventDefault()
    if(city.value == ""){
        alert("Complete The Form")
    }
    else{
        request()
        let table = document.querySelector("table")
        table.className="show"
    }
}
// peticion
const request = async() => {
    try{
        const search = await fetch(`http://api.weatherstack.com/current?access_key=3d964de91a60ec3dc71c30e0f5cb31dc&query=${city.value}`)
        const response = await search.json()
        showResponse(response)
    }catch{
        alert("Error! The City Does Not Exist or is Misspelled")
    }
}

// mostrar en el dom
const responseConteiner = document.getElementById("conteiner")
const showResponse = (response)=>{
    responseConteiner.innerHTML += `
        <tr>
            <td>${response.location.name}</td>
            <td>${response.location.country}</td>
            <td>${response.location.localtime}</td>
            <td>${response.current.temperature}°</td>
            <td>${response.current.humidity}%</td>
            <td>${response.current.visibility}%</td>
        </tr>
        `    
}    
{/* <td>${response.current.weather_descriptions}</td> */}
{/* <td>${response.current.weather_icons[0]}</td> */}