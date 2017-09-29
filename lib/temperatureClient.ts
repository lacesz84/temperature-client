const http = require('http');

class TemperatureClient {

    async getTemperature() {
        return new Promise<string>((resolve, reject) => {
            const url = this.getUrl();
            http.get(url, (res) => {
                let rawData = '';
                res.on('data', (chunk) => rawData += chunk);
                res.on('end', () => {
                    if (rawData) {
                        resolve(rawData);
                    }
                });
            }).on('error', (e) => {
                reject('HTTP request error: ' + e.message);
            });
        });
        
    }

    private getUrl() {
        return process.env.URL || 'http://pi.dreamscape.hu:3100';
    }
}

export { TemperatureClient }

