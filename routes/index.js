var express     = require('express');
var route       = express.Router();
var axios = require("axios");
var base_url = "http://localhost:3000";
var json = require("../db.json")
console.log("my json: ", json)



route.get('/', (req, res, next) => {
    // console.log("------")
    // console.log("im in!!!")
    // axios.get("base_url/horoscopess")
    // .then(res =>{
    //     console.log("my signs: ", res)
    //     res.render('index', {
    //         signs: res
    //     })
    // })


// console.log("current user:", user)

    res.render('index', {
        horoscopes: json.horoscopess,
        // user
    });

    // JS code to determine which user is signed in
    // and which horoscope to show
})

module.exports  = route;
