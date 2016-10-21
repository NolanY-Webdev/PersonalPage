"use strict";


var futureCountdown = 108;

$(document).ready(function() {
  fiveMinuteFader();
  randomAbtMe();
});

function fiveMinuteFader() {
  if(futureCountdown> 0) {
    if(futureCountdown < 50) {
      $(".futureTW").attr("title", "gettingCloser")
    }
    futureCountdown -= 1;
    $(".futureTW").css({"opacity" : futureCountdown/100});
    setTimeout(fiveMinuteFader, ((1000 * 60 * 5 ) / 100));
  } else {
    $(".futureTW").attr("title", "isNow?")
  }
}

function randomAbtMe() {
  var aboutMes = [
    'Lifetime Video Gamer',
    'General Nice Guy',
    'Thespian at Heart',
    '"Mr. Nolan" by Adorable 4-year Old Logic',
    'Can\'t Spell Without Double Checking Google',
    'Subtle as a Brick',
    'Running Out of Ideas',
    'Low Maintenance',
    'Incredibly Good Looking',
    'Now With 75% More Wit',
    'Brandon Sanderson Junkie',
    'SF Beer Olympics Champion',
    'Occasional Derp',
    'Chronically Has Lethologica',
    'My Favorite Word? Hippopotomonstrosesquippedaliophobia',
    'Knows the 6 Words Every Woman Wants to Hear',
    'Eagle Scout',
    'Darwin Deez Fan',
    'Dog Lover: Man\'s Best Friend',
    'MMmmmmmmMMmmmmmMMMmmmmmmmm Gluten',
    'Hotsauce Addict',
    'Eternal Sunbro; PRAISE THE SUN!',
    'I Promise Not to Deploy Skynet',
    'Triple A Person: About Averagely Awesome',
    'In Shape; Round is a Shape',
    'Has The Body of a God (if you count Buddah)',
    'Powered by Energy Drinks and Instant Noodles',
    'Hopefully Never Actually Humanity\'s Last Hope',
    'Rarely Uses Facebook',
    'Imagine A Nice Trait Here',
    'Ninja by Night',
    'The Hero Gotham Deserves (but Doesn\'t Need, Thanks Batman)',
    'Not Sure if Anyone Will Read All of These',
    'Knows More than John Snow (not by much)'
  ];

  aboutMes.push(
    'There are currently ' + (aboutMes.length + 2) + ' of these messages. How many do you remember?'
    );

  aboutMes.push(
    'I lied, there are ' + (aboutMes.length + 2 + Math.floor(Math.random()*(aboutMes.length + 2))) + ' good job keeping track though'
    );

  $("randomAboutMe").fadeOut({complete: function(){
    $("randomAboutMe").html(aboutMes[Math.floor(Math.random()*aboutMes.length)]).fadeIn();
  }});
  setTimeout(randomAbtMe, 15000);
}