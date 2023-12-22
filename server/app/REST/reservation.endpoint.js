import pool from "../../db";
const express = require('express');
const app = express();

const reservationEndpoint = (app)  => {
    app.get('/all-reservation', (req, res) => {
        try{
            pool.query('SELECT * FROM conferance_room_reservation.reservation', (err, result) => {
                if(err) throw err;
                res.send(result.rows);
            })
        }catch(error){
            console.error('Błąd z wczytaniem wszystkich rezerwacji', error);
            res.status(401).json({error: 'Błąd z wczytaniem wszystkich rezerwacji'});
        }
    })
}

export default reservationEndpoint;