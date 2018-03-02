const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/app');

const Horoscope = require('../models/horoscope');


const horoscopes = [
    {
      "name": "Capricorn", 
      "description" : "The world isn’t out to get you. However, karma might be. Remember: What goes around comes around.",
      "love" : "",
      "success": "",
      "travel": "",
      "party": ""    
    },
    {
      "name": "Aquarius",
      "love" : "Your soul is like a field of wildflowers: beautiful, free and often full of bees.",

      "description" : "Stop looking for your “purpose” in everything. The only real meaning of life is to make the prettiest patterns in the whirlpool of life as it spirals down the great entropic toilet of the universe.",

      "love" : "You’ve kissed frog after frog, but all you’ve got is warts. The stars say it’s time to rethink your dating game. (Hint: Deleting your Tinder account would be a really good place to start.)",

      "success": "Your love life is like a movie right now, minus the romantic music playing in the background. All good things do come to an end, so enjoy the love while you can.",

      "travel": "This week, it’d probably be good to keep away from any bodies of water — oceans, rivers, lakes, pools, your bathtub. I just wouldn’t risk it.",

      "party": "Remember that money you blew last week buying tacos for all your friends at Fuzzy’s? Well, now you’re in a bit of a pickle since rent is due. Luckily for you, the stars are aligned and an unexpected sum of money will find its way into your pocket."
    },
    {
      "name": "Pisces",
      "description" : "You will encounter frustration this week when you come across a Libra trying to research if Kim Kardashian's butt is fake. Just remember to woosah your way home.",

      "love" : "Your love is like the night sky: boundless, ineffable and totally unattainable to anyone who did not spend at least a decade studying it professionally.",

      "success": "The stars say you’ll get to experience the life of Taylor Swift this week. You know — the adoring fans, the glamour, all your lies exposed…",

      "travel": "The equilibrium of Saturn’s seventh moon alignment with Pluto puts the sun in your water axis this week. That could go either way, so try not to do too much speaking or walking or living.",

      "party": "Stop buying stuff you really don’t need. The stars have seen the current balance of your bank account and they’re not impressed.",

      "comments": [] 
    },
    {
      "name": "Aries",
      "description" : "Your love life is like a movie right now, minus the romantic music playing in the background. All good things do come to an end, so enjoy the love while you can.",
      "love" : "",
      "success": "",
      "travel": "",
      "party": ""
    },
    {
      "name": "Taurus",
      "description" : "That to-do list you’ve been meaning to do is getting longer and longer. Quit procrastinating and get to work! Laziness isn’t an attractive quality.",
      "love" : "",
      "success": "",
      "travel": "",
      "party": ""  
    },
    {
      "name": "Gemini",
      "description" : "Due to a technical error beyond the Stars’ control, all Geminis can now communicate telepathically with pigeons if they just concentrate really, really hard.",
      "love" : "",
      "success": "",
      "travel": "",
      "party": "",    
    },
    {
      "name": "Cancer",
      "description" : "You’re not Gossip Girl, so chill it with the hearsay. Tables can turn all too easily and who knows what skeletons might come out of your closet.",
      "love" : "",
      "success": "",
      "travel": "",
      "party": ""
    },
    {
      "name": "Leo",
      "description" : "This week is just going to be…a lot. And it will happen all at once, as bad weeks are prone to do. Sorry, Leo.",
      "love" : "",
      "success": "",
      "travel": "",
      "party": ""
    },
    {
      "name": "Virgo",
      "description" : "People are starting to catch on to the fact that you’re actually completely basic — your fabricated cool just isn’t enough anymore. Hope you have a solid backup plan.",
      "love" : "",
      "success": "",
      "travel": "",
      "party": ""
    },
    {
      "name": "Libra",
      "description" : "Mosquitos are not your friends, and neither are people who keep asking you to hang out outside with mosquitos. It’s best not to venture out of the house this week.",
      "love" : "",
      "success": "",
      "travel": "",
      "party": ""
    },
    {
      "name": "Scorpio",
      "description" : "Better watch your back; some friends have been jealous of you lately and it’s causing them to act bitter toward you. Not sure what’s got them so green? Me either. You’re a hot mess.",
      "love" : "",
      "success": "",
      "travel": "",
      "party": ""
    },
    {
      "name": "Sagittarius",
      "description" : "The stars say your life will be hell this week. And the stars aren’t even sorry.",
      "love" : "",
      "success": "",
      "travel": "",
      "party": ""
    }
  ];


  Horoscope.create(horoscopes, (err, savedHoroscopes) => {
    if (err) { throw err; }
  
  
    savedHoroscopes.forEach(theHoroscope => {
      console.log(`${theHoroscope.name} - ${theHoroscope._id}`);
    });
    mongoose.disconnect();
  });


