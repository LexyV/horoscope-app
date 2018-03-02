const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/app');

const Horoscope = require('../models/horoscope');


const horoscopes = [
    {
      "name": "Capricorn", 
      "description" : "You are capicorn."
    },
    {
      "name": "SECOND ONE"
    },
    {
      "name": "Pisces",
      "description" : "You will encounter frustration this week when you come across a Libra trying to research if Kim Kardashian's butt is fake. Just remember to woosah your way home.",
      "love" : "hi",
      "success": "success",
      "travel": "The equilibrium of Saturn’s seventh moon alignment with Pluto puts the sun in your water axis this week. That could go either way, so try not to do too much speaking or walking or living.",
      "party": "party",
      "comments": []
    },
    {
      "name": "Aries" 
    },
    {
      "name": "Taurus" 
    },
    {
      "name": "Gemini" 
    },
    {
      "name": "Cancer" 
    },
    {
      "name": "Leo" 
    },
    {
      "name": "Virgo" 
    },
    {
      "name": "Libra" 
    },
    {
      "name": "Scorpio" 
    },
    {
      "name": "Sagittarius" 
    }
  ];


  Horoscope.create(horoscopes, (err, savedHoroscopes) => {
    if (err) { throw err; }
  
  
    savedHoroscopes.forEach(theHoroscope => {
      console.log(`${theHoroscope.name} - ${theHoroscope._id}`);
    });
    mongoose.disconnect();
  });


