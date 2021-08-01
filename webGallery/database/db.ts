import mysql from 'mysql'
import settings from '../settings'
import queries from './queries';

export default class DataBase {
    host : string;
    user : string;
    password: string;
    con: mysql.Connection;

    constructor () {
         this.host = settings.DB_HOST;
         this.user = settings.DB_USER;
         this.password = settings.DB_PWD;

         this.con = this.makeConnection();

    }
    
    makeConnection () {
        return mysql.createConnection ({
            host: this.host,
            user: this.user,
            password: this.password,
            database: "photos"
        })
    }

    getAllPictures (callback : any) {
        this.con.query(queries.SELECT_ALL_PICTURES, (err, result, fields) => {
            if (err) {
                throw err;  
            }
            callback(result);
        })
    }

    getPictureByID (id : number, callback : any) {
        this.con.query(queries.SELECT_PICTURE_BY_ID, [id], (err, result, fields) => {
            if (err) {
                throw err;  
            }
            callback(result);
        })

    }

    insertPicture (title : string, description : string, path : string, thumbnail_path : string, callback : any){
        this.con.query(queries.INSERT_PICTURE, [title, description, path, thumbnail_path], (err, result, fields) => {
            if (err) {
                throw err;  
            }
            callback(result);
        })
    }


}