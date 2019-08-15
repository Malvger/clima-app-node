const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.75, -74)
//     .then(console.log)
//     .catch(console.log);

// console.log(argv.direccion);

const getInfo = async(dir) => {

    try {
        const coords = await lugar.getLugarLatLng(dir);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}`
    } catch (error) {
        return (`No se pudo determinar el clima de ${coords.direccion}`)
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);