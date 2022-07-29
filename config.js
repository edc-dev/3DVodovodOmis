//edcdata
/*const dataSources= {
mjernaZona : "https://edc-data.xyz/gitea/api/v1/repos/vodovod-omis/data-vodovod-omis/raw/mjernaZona.geojson?token=7f06f4afcb571ee224afb12c99cf2cc75df62218",
vodospremnik : "https://edc-data.xyz/gitea/api/v1/repos/vodovod-omis/data-vodovod-omis/raw/vodospremnik.geojson?token=7f06f4afcb571ee224afb12c99cf2cc75df62218",
pumpa : "https://edc-data.xyz/gitea/api/v1/repos/vodovod-omis/data-vodovod-omis/raw/pumpa.geojson?token=7f06f4afcb571ee224afb12c99cf2cc75df62218",
vod : "https://edc-data.xyz/gitea/api/v1/repos/vodovod-omis/data-vodovod-omis/raw/vod.geojson?token=7f06f4afcb571ee224afb12c99cf2cc75df62218",
prikljucak : "https://edc-data.xyz/gitea/api/v1/repos/vodovod-omis/data-vodovod-omis/raw/prikljucak.geojson?token=7f06f4afcb571ee224afb12c99cf2cc75df62218",
mjernoMjesto : "https://edc-data.xyz/gitea/api/v1/repos/vodovod-omis/data-vodovod-omis/raw/mjernoMjesto.geojson?token=7f06f4afcb571ee224afb12c99cf2cc75df62218",
telemetrija : "https://edc-data.xyz/gitea/api/v1/repos/vodovod-omis/data-vodovod-omis/raw/telemetrija.geojson?token=7f06f4afcb571ee224afb12c99cf2cc75df62218"
}*/


const style_vOmis="https://edc-data.xyz/gitea/api/v1/repos/vodovod-omis/data-vodovod-omis/raw/style.json?token=7f06f4afcb571ee224afb12c99cf2cc75df62218";



//github
const dataSources= {
mjernaZona : "https://raw.githubusercontent.com/edc-dev/example-geojson/main/dma.geojson",
vodospremnik : "https://raw.githubusercontent.com/edc-dev/example-geojson/main/tank.geojson",
pumpa : "https://raw.githubusercontent.com/edc-dev/example-geojson/main/pump.geojson",
vod : "https://raw.githubusercontent.com/edc-dev/example-geojson/main/pipe.geojson",
prikljucak : "https://raw.githubusercontent.com/edc-dev/example-geojson/main/meter.geojson",
mjernoMjesto : "https://raw.githubusercontent.com/edc-dev/example-geojson/main/gauge.geojson",
telemetrija : "https://raw.githubusercontent.com/edc-dev/example-geojson/main/telemetry.geojson",
podrucjeZgrada : "https://raw.githubusercontent.com/edc-dev/example-geojson/main/podrucjeZgrada.geojson"
}


//TŠ Token za pristup podacima: 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

/*
const request = require('request');

const URL = 'https://raw.githubusercontent.com/myuser/myrepo/master/myfile.js';
const TOKEN = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

var options = {
  url: URL,
  headers: {
    'Authorization': 'token ' + TOKEN
  }
};

function callback(error, response, body) {
      console.log(response.statusCode);
      console.error(error);
      console.log(body);
}

request(options, callback);

*/

