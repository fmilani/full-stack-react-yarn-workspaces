const { router, get } = require('microrouter');
const fetch = require('node-fetch');
const ROOT_URL = 'https://maps.googleapis.com/maps/api/directions';
const ORIGIN_LAT = '-20.894761';
const ORIGIN_LON = '-51.378568';
const GEOCODING_API_KEY = 'AIzaSyCmAb3E0qukUI3a8Qck2zc9mVqngEGP2b8';
const API_KEY = 'AIzaSyDtutCSudfZVSqScw7Sc6Q6zMLVR8kQRnI';

const FARE = 1.8;
const price = async (req, res) => {
  const destination = req.query.destination.replace(' ', '+');
  // const geocodeResponse = await fetch(
  //   `https://maps.googleapis.com/maps/api/geocode/json?address=${destination},+Brazil&key=${GEOCODING_API_KEY}`,
  // );
  // const geocodeJson = await geocodeResponse.json();

  // const lat = geocodeJson.results[0].geometry.location.lat;
  // const lon = geocodeJson.results[0].geometry.location.lng;

  // const directionsResponse = await fetch(
  //   `${ROOT_URL}/json?origin=${ORIGIN_LAT},${ORIGIN_LON}&destination=${lat},${lon}&key=${API_KEY}&language=pt-BR`,
  // );
  const origin = 'andradina+SP';
  const baseUrl = 'http://api.qualp.com.br';
  const accessToken = '6QBDcgtH_gt6WQR7reD8tWQoCyHCBsxq';
  const requestURL = `${baseUrl}/rotas?access-token=${accessToken}&origem=${origin}&destino=${destination}&categoria=caminhao&eixos=2&calcular-volta=sim&format=json`;

  // const directionsResponse = await fetch(requestURL);
  // const json = await directionsResponse.json();
  // console.log(json);

  // const { distancia, duracao } = json;
  // const kmPrice = distancia.valor * FARE / 1000;
  // const tollPrice = json.pedagios
  //   .map(pedagio => pedagio.tarifa)
  //   .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  // const response = {
  //   price: 'R$ ' + (90 + kmPrice + tollPrice).toFixed(2).replace('.', ','),
  //   details: {
  //     distance: distancia.texto.replace(',', '.'),
  //     duration: duracao.texto,
  //     kmPrice: 'R$ ' + kmPrice.toFixed(2).replace('.', ','),
  //     tollPrice: 'R$ ' + tollPrice.toFixed(2).replace('.', ','),
  //   },
  // };

  const response = {
    price: 1123.19,
    details: {
      distance: 1432,
      duration: '12 horas 58 minutos',
      kmPrice: 1000.12,
      tollPrice: 123.07,
    },
  };
  res.end(JSON.stringify(response));
};

module.exports = router(get('/price', price));
