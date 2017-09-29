import sshExec = require('ssh-exec');

const options: IsshExecOptions = {
    host: 'pi.dreamscape.hu',
    user: 'pi',
    port: 2298
};
const fileName = '/sys/bus/w1/devices/28-0115a83cebff/w1_slave';

const callBack = (n, data:string) => { 
    const match = data.match(/t=(.*)/);
    const temperature = parseInt(match[1]) / Math.pow(10, 3);
    process.stdout.write(temperature.toString());
};

sshExec('cat ' + fileName, options, callBack);