import express from 'express';
import DataBase from './database/db';

var db = new DataBase();
var router = express.Router();

router.get('/getAllPictures', (req, res) => {

    db.getAllPictures( (results : any ) => {
        res.send(results);
    });
})

router.get('/getPicture/:picID', (req, res) => {
    let id = Number(req.params.picID);

    if (isNaN(id)){
        res.send('404 - Picture not found');
        return 404;
    }

    db.getPictureByID(id, (results : any) => {
        res.send(results);
    })
    
})

router.post('/insertPicture', (req, res) => {
    console.log(req.body);
    const { title, description, path, thumbnail_path } = req.body;
    db.insertPicture(title, description, path, thumbnail_path, (results : any) =>{
        res.send(results);
    })    


})

export default router;