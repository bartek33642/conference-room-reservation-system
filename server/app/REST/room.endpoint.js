import pool from "../../db";
const express = require('express');
const app = express();

const roomEndpoint = (app)  => {
    app.get('/all-rooms', (req, res) => {
        try{
            pool.query('SELECT * FROM conferance_room_reservation.room', (err, result) => {
                if(err) throw err;
                res.send(result.rows);
            })
        }catch(error){
            console.error('Błąd z wczytaniem wszystkich sal konferencyjnych', error);
            res.status(401).json({error: 'Błąd z wczytaniem wszystkich sal'});
        }
    })
}

export default roomEndpoint;