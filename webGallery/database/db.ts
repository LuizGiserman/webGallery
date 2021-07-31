import mysql from 'mysql'
import settings from '../settings'

export default class DataBase {
    host : string;
    user : string;
    password: string;
    con: any;

    constructor () {
         this.host = settings.DB_HOST;
         this.user = settings.DB_USER;
         this.password = settings.DB_PWD;

         this.con = this.makeConnection();
         this.con.connect(function(err: any){
            if (err) throw err;
            console.log("Connected to db");
         })
    }
    
    makeConnection () {
        return mysql.createConnection ({
            host: this.host,
            user: this.user,
            password: this.password,
            database: "photos"
        })
    }


}