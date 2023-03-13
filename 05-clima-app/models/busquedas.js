const axios = require('axios');

class Busquedas {

    historial = ['Tegucigalpa', 'Madrid', 'San José']

    constructor() {
        // TODO: leer DB si existe
    }

    async ciudad(lugar = '') {

        try {
            //peticion http
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/ottawa.json?proximity=ip&language=es&access_token=pk.eyJ1Ijoic2V0b2JhMTE5MiIsImEiOiJjbGY2Ym1wajQwNm1zM3NwbmwzNWo1ejNlIn0.Su0dkU4dNqBaPjhe9hGIXA')
            console.log(resp.data);

        } catch (error) {
            return [];
        }


    }

}

module.exports = Busquedas;