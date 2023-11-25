var connection = require('../db/db-connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSignUp = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        connection.query('insert into userSignup(username, password) values (?,?)', [req.body.username, hashedPassword], (err, result) => {
            if (err) throw err
            res.json(result)
        });
    } catch (error) {
        res.status(500).send();
    }
}

const userLogin = async (req, res) => {
    //console.log(req.body);
    const  password  = req.body.password;

    connection.query('select * from userSignup where username=?;', [req.body.username], (err, result) => {
        if (!result.length) {
            res.status(400).json({ error: "User Doesn't Exist please signup first" });
            return;
        }
        console.log(result);
        bcrypt.compare(password, result[0].password).then(async (match) => {
            if (!match) {
                res.status(400).json({ error: "Wrong Username And Password Combination" });
            } else {
                const token = jwt.sign({ username: result[0].username, id: result[0]. user_id }, "jwt")
                //console.log(token)
                res.status(200).json(token);
            }
        });
    })

}


module.exports = { userSignUp, userLogin }