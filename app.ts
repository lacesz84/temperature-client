import { TemperatureClient } from './lib/temperatureClient';

require('dotenv').config();

const client = new TemperatureClient();

client.getTemperature().then((temperature) => {
    process.stdout.write(temperature);
}).catch((e) => {
    console.log(e);
});