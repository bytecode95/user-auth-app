var connection = require('../db/db-connection');
const bcrypt = require('bcrypt');

const userSignUp = async(req, res) =>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        connection.query('insert into userSignup(username, password) values (?,?)',[req.body.username, hashedPassword], (err, result)=>{
            if(err) throw err
            res.json(result)
        });
    } catch (error) {
        res.status(500).send();
    }
}

module.exports = {userSignUp}