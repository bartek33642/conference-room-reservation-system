import pool from "../../db";
const express = require('express');
const app = express();

const userEndpoint = (app)  => {
    app.get('/all-users', (req, res) => {
        try{
            pool.query('SELECT * FROM conferance_room_reservation.user', (err, result) => {
                if(err) throw err;
                res.send(result.rows);
            })
        }catch(error){
            console.error('Błąd z wczytaniem wszystkich użytkowników', error);
            res.status(401).json({error: 'Błąd z wczytaniem wszystkich użytkowników'});
        }
    })
}

export default userEndpoint;