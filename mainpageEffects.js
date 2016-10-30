"use strict";


var futureCountdown = 108;
var currentTab = 'derp';
var animating=false;

$(document).ready(function() {
  fiveMinuteFader();
  randomAbtMe();
  $('.wordsAndThingsDisplayBox').hide();
  $('.wordsAndThingsContainer').hide();

  $('.aboutMeTab').click(function(){

    if(currentTab!='aboutMeContainer' && !animating){
      currentTab = 'aboutMeContainer';
      animating = true;
      $('.projectsContainer').hide({
        complete: function(){
          $('.aboutMeContainer').fadeIn();
        }
      });
      $('.contactContainer').hide({
        complete: function(){
          $('.aboutMeContainer').fadeIn();
        }
      });
      setTimeout(function(){
        animating=false;
      },500);
    }

  });

  $('.projectsTab').click(function(){
    $('.wordsAndThingsDisplayBox').fadeIn();
    if(currentTab!='projectsContainer' && !animating){
      currentTab = 'projectsContainer';
      animating = true;
      $('.aboutMeContainer').hide({
        complete: function(){
          $('.projectsContainer').fadeIn();
        }
      });
      $('.contactContainer').hide({
        complete: function(){
          $('.projectsContainer').fadeIn();
        }
      });
      setTimeout(function(){
        animating=false;
      },500);
    }
  });

  $('.contactTab').click(function(){
    $('.wordsAndThingsDisplayBox').fadeIn();
    if(currentTab!='contactContainer' && !animating){
      currentTab = 'contactContainer';
      animating = true;
      $('.aboutMeContainer').hide({
        complete: function(){
          $('.contactContainer').fadeIn();
        }
      });
      $('.projectsContainer').hide({
        complete: function(){
          $('.contactContainer').fadeIn();
        }
      });
      setTimeout(function(){
        animating=false;
      },500);
    }
  });



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
    $(".futureTW").attr("title", "isNow")
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
    'Running Out of Message Ideas',
    'Low Maintenance',
    'If( (near&&farSighted) || (far&&shortSighted)){ Incredibly Good Looking };',
    'Now With 75% More Wit',
    'Brandon Sanderson Junkie',
    'SF Beer Olympics Champion',
    'Occasional Derp',
    'Chronically Has Lethologica',
    'My Favorite Word? Hippopotomonstrosesquippedaliophobia',
    'Knows the 6 Words Every Woman Wants to Hear',
    'Eagle Scout',
    'Darwin Deez Fan (Artists Should be Artistic)',
    'Loved by Dogs: Man\'s Best Friend',
    'MMmmmmmmMMmmmmmMMMmmmmmmmm Gluten',
    'Hotsauce Addict',
    'Eternal Sunbro; PRAISE THE SUN!',
    'I Promise Not to Deploy Skynet',
    'Triple A Person: About Averagely Awesome',
    'In Shape; Round is a Shape',
    'Has the Body of a God (If You Count Buddah)',
    'Powered by Energy Drinks and Instant Noodles',
    'Hopefully Never Actually Humanity\'s Last Hope',
    'Rarely Uses Social Media',
    'Imagine A Nice Trait Here',
    'Ninja by Night',
    'The Hero Gotham Deserves (But Doesn\'t Need, Thanks Batman)',
    'Not Sure if Anyone Will Read All of These',
    'Knows More than Jon Snow (Not by Much)',
    'One Part Philosoraptor',
    'Scientific Study Proves Theory: People Who Have More Birthdays Live Longer',
    'Magnetic Personality',
    'SC^3 Member: Spaghetti Code Cleanup Crew',
    'Warframe:"Hello Kitty Island Adventure" Clan Leader',
    'Recovering Wow-aholic',
    'Killed All His Farmville Crops by Day 2',
    'Terminally Diagnosed With Whiteboy Rhythm (I Can\'t Dance)',
    'Majestic as _________',
    'Wants to Voice a Game Character',
    'Will Sometimes Vacation in Hyrule',
    'Raised on the Planet Reach Under Supervision of Dr. Catherine Halsey',
    'Resurrected as a Guardian of the Traveler\'s Light',
    'Known to Occasionally Moonlight as Italian Plumber to Fight Turtles',
    'I RTFM so You Won\'t Need to',
    'Able to Cook Minute Rice in 57 Seconds',
    'Potentially Narcoleptic',
    'Hopes Bo Burnham Finds His Happiness',
    'while(frustrated){face + keyboard = "ijmn cg mrzehrsz "};',
    'if(!caffinated){ part demon } else { complete angel };',
    'Dude, I\'m not as Think as you Drunk I am',
    'Star Player of the Zanarkand Abes'

  ];

  aboutMes.push(
    'There are currently ' + (aboutMes.length + 2) + ' of these messages. How many do you remember?'
    );

  aboutMes.push(
    'I lied, there are ' + (aboutMes.length + 2 - Math.floor(Math.random()*(aboutMes.length + 2))) + ' messages. Good job keeping track though'
    );

  var randomInt = Math.floor(Math.random()*aboutMes.length);
  while($("randomAboutMe").html() == aboutMes[randomInt]) {
    console.log('Identical aboutMe tried to pop up, don\'t worry, I stopped it');
    randomInt = Math.floor(Math.random()*aboutMes.length);
  }


  $("randomAboutMe").fadeOut({complete: function(){
    $("randomAboutMe").html(aboutMes[randomInt]).fadeIn();
  }});
  setTimeout(randomAbtMe, 8500);
}