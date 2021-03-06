const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=f11517dcf52faddee1653ef8ed19ecd7&units=metric`);

    return resp.data.main.temp;

}


module.exports = {
    getClima
}