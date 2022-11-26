import * as dotenv from 'dotenv'
dotenv.config()
import * as timestamp from "time-stamp";
import * as fs from "fs";
let green = `\x1b[42m`
let blue = `\x1b[44m`
let red = `\x1b[41m`

const LEVEL = ["DEBUG", "INFO", "ERROR"]
const dir = './clogger_file';
const dir_txt = './clogger_file/clogger.txt'
export class Clogger {
    constructor(timestamp ) {
        this.timestamp = timestamp
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
    }

    info(content){
        let log = ""
        let color = green
        if (process.env.LOG_LEVEL !== "INFO") return
        log += '[' + "INFO" + '] | '
        if (this.timestamp == 1) log += timestamp.default('MM/DD HH:mm:ss | ')
        log += content.toString()
        console.log(color + log.toUpperCase() + `\x1b[0m`)
        fs.appendFile(dir_txt,log + "\n", function (err){
            if(err) throw err;
        })
    }
    error(content){
        let log = ""
        let color = red
        if (process.env.LOG_LEVEL !== "ERROR") return
        log += '[' + "ERROR" + '] | '
        if (this.timestamp == 1) log += timestamp.default('MM/DD HH:mm:ss | ')
        log += content.toString()
        console.log(color + log.toUpperCase() + `\x1b[0m`)
        fs.appendFile(dir_txt,log + "\n", function (err){
            if(err) throw err;
        })
    }
    debug(content){
        let log = ""
        let color = blue
        if (process.env.LOG_LEVEL !== "DEBUG") return
        log += '[' + "DEBUG" + '] | '
        if (this.timestamp == 1) log += timestamp.default('MM/DD HH:mm:ss | ')
        log += content.toString()
        console.log(color + log.toUpperCase() + `\x1b[0m`)
        fs.appendFile(dir_txt,log + "\n", function (err){
            if(err) throw err;
        })
    }
    DisplayLogLevel() {
        return console.log(LEVEL)
    }
}


