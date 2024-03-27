// APIKey: a78410b6396a0a2ce756892ae59d1b0a

// Consigna: Se ingresa ciudad por el input id="ciudadEntrada" 
// y se valida con el boton id"botonBusqueda" la api devuelve el  
// clima de la ciudad elegida.
// 1-probamos api con documentación para validar
// 2- agregamos al button un eventListeneer-> onclick
// 3 


// probamos
let api_key = 'a78410b6396a0a2ce756892ae59d1b0a'
let difKelvin = 273.15
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'

//let ciudad = 'londres'
//let ciudad = document.getElementById('ciudadEntrada').value

    document.getElementById('botonBusqueda').addEventListener('click', () => {
        const ciudad = document.getElementById('ciudadEntrada').value
        if(ciudad){
            fetchDatosClima(ciudad)
        }
    })

    function fetchDatosClima(ciudad){
        fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(data => data.json())
        //.then(response => console.log(response))
        .then(data => mostrarDatosClima(data))   
    }

    function mostrarDatosClima(data){
        // console.log(data)
        //document.getElementById('datosClima').innerHTML=stringify(response)
        const divDatosClima = document.getElementById('datosClima') // capturo div
        divDatosClima.innerHTML='' //lo mantengo vacio
        //Hacemos constantes con la info que seleccionamos mostrar
        const ciudadNombre = data.name
        const temperatura = data.main.temp
        const humedad = data.main.humidity
        const descripcion = data.weather[0].description
        const paisNombre = data.sys.country
        const icono = data.weather[0].icon

        //Ahora creamos elementos HTML con JS
        const ciudadTitulo = document.createElement('h2')
        ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`
    
        const temperaturaInfo = document.createElement('p')
        temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}ºC`

        const humedadInfo = document.createElement('p')
        humedadInfo.textContent = `La humedad es: ${humedad}%`

        const iconoInfo = document.createElement('img')
        iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

        

        const descripcionInfo = document.createElement('p')
        descripcionInfo.textContent =  `La descripción meteorológica es: ${descripcion}`

        //Ahora metemos en el div los elementos creado.... con appendChild
        
        divDatosClima.appendChild(ciudadTitulo)
        divDatosClima.appendChild(temperaturaInfo)
        divDatosClima.appendChild(humedadInfo)
        divDatosClima.appendChild(iconoInfo)
        divDatosClima.appendChild(descripcionInfo)
        

    }