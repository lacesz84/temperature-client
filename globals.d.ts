declare module 'ssh-exec' {
    export = exec;
    function exec(cmd:string, opts?:string|IsshExecOptions, cb?:any):any;
}

interface IsshExecOptions {
    host: string,
    user: string,
    port: number,
}