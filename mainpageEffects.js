"use strict";


var futureCountdown = 108;
var currentTab = 'derp';
var currentProject = 'derp';
var animating = false;

$(document).ready(function(){
  fiveMinuteFader();
  randomAbtMe();
  $('.wordsAndThingsDisplayBox').hide();
  $('.wordsAndThingsContainer').hide();


if (document.images) {
  var img1 = new Image();
  var img2 = new Image();
  var img3 = new Image();
  img1.src = "./img/AtlasSS.png";
  img2.src = "./img/DevMeteorHackathon.jpg";
  img3.src = "./img/JavaTDSS.png";
  img1 = new Image();
  img2 = new Image();
  img3 = new Image();
  img1.src = "./img/LaneWinsSS.png";
  img2.src = "./img/testImgProj2.png";
  img3.src = "./img/UberSqrdSS.jpg";
}

  $('.aboutMeTab').click(function() {
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
      currentProject = 'initProjDisplay';
      $('.projectDisplay').html(
        '<p class="projTextBox"><-- Select one of my amazing works, if the animations look messy its because all the images haven\'t had the chance to load yet. It\'s not my page\'s fault, those are set to preload. Ok, ok, I\'ll get right on fixing the slow internet, after all I\'m an <a href="#" onclick="window.open(\'https://www.youtube.com/watch?v=BKorP55Aqvg\',\'_blank\')">expert</a> right?.  <br>(Unfortunately old projects built/hosted on free Meteor servers have been removed due to a <a href="#" onclick="window.open(\'https://forums.meteor.com/t/meteor-com-free-hosting-ends-march-25-2016/19308\',\'_blank\')">change in Meteor policies</a>) <br> <br> Or admire this ancient project from when I was beginning to learn code. A very basic application typically called pixel painter or something along those lines. Not really worth its own tab, but it looks pretty. --></p>'
        );
      $('.projectImage').attr({src:'img/testImg.png'});
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

$('.project1').click(function(){
  if(!animating && currentProject!='proj1'){
    animating = true;
    currentProject = 'proj1';
    swapProjectContent('1');
  }
});
$('.project2').click(function(){
  if(!animating && currentProject!='proj2'){
    animating = true;
    currentProject = 'proj2';
    swapProjectContent('2');
  }
});
$('.project3').click(function(){
  if(!animating && currentProject!='proj3'){
    animating = true;
    currentProject = 'proj3';
    swapProjectContent('3');
  }
});
$('.project4').click(function(){
  if(!animating && currentProject!='proj4'){
    animating = true;
    currentProject = 'proj4';
    swapProjectContent('4');
  }
});
$('.project5').click(function(){
  if(!animating && currentProject!='proj5'){
    animating = true;
    currentProject = 'proj5';
    swapProjectContent('5');
  }
});
$('.project6').click(function(){
  if(!animating && currentProject!='proj6'){
    animating = true;
    currentProject = 'proj6';
    swapProjectContent('6');
  }
});

});

function wakeUpDolores(){
  $('.projectDisplay').html('These violent delights have such violent ends.');
};

function swapProjectContent(projectNum) {
  switch (projectNum) {
    case '1':
      $('.projectDisplay').fadeOut({
        complete:function(){
          $('.projectDisplay').html('<h3 class="projTitle">Java Game Engine</h3> '+
              '<br><h4>Personal Project: Work In Progress</h4><br> <p class="projTextBox"> '+
              'This is the latest personal project I have been working on prior to constructing my website. '+
              'Unfortunately I do not have a suitable picture yet of anything other than a box utilizing the shaders... '+
              'So here\'s another beautiful shot of my pixel painter. '+
              'I\'ll post a picture up once I throw together a little 3D model in Blender and manage to load it into the project. <br> <br> '+
              'The goals of this project are as follows: <br> '+
              '- Continue solidifying knowledge between Java and Javascript. <br> '+
              '- Experimentation with building a three dimensional virtual sandbox world entirely from scratch. <br> '+
              '- Ponder on the chaos created adding another dimension (2D vs 3D) <br>'+
              '- Garner experience with OpenGL and learn how to use associoated tech '+
              '(GLSL - Vertex/Fragment Shaders, Vertex Array Objects (VAOs), Vertex Buffer Objects (VBOs)) <br> '+
              '- To begin learning 3D model creation via Blender.'+
              '</p>').fadeIn();
        }
      });
      $('.projectImage').fadeOut({
            complete:function(){
              $('.projectImage').attr({src:'img/testImgProj2.png'}).fadeIn({
                complete:function(){
                  animating = false;
                }
              });
            }
          });
      break;
    case '2':
      $('.projectDisplay').fadeOut({
        complete:function(){
          $('.projectDisplay').html(
              '<h3 class="projTitle">Atlas Pet Co. Work:</h3> ' +
              '<br> <h4 title="Contact info only provided upon direct request for privacy"> Project Lead: Sam Alter</h4>'+
              '<br><br> <p class="projTextBox"> '+
              'Atlas the Black-Lab was one of the first friends I made here in SF (along with his awesome owner Sam Alter). '+
              'They welcomed me to the city and helped me transition into life here. <br><br> '+
              'When Sam had a "shitty" scenario intrude upon his life, <br> '+
              '(quite literally -long story- could happen to anyone), <br> '+
              'I asked if there was anything I could do to help. '+
              'While I couldn\'t help with the most recent situation, he did ask me if I could look into his company site and make a few changes he had been meaning to get around to. <br><br>'+
              'Majority of his website already worked perfectly fine. The parts that didn\'t were a quick fix consisting mostly of minor HTML and style changes along with a rewiring of the gallery. '+
              'My biggest challenge was adjusting to the personal novelty of the Shopify platform and trying to understand the magic it was working behind the scenes. '+
              'Where this project is rather lacking insofar as coding prowess it speaks volumes about my personality and the type of altruistic person I identify myself as. '+
              'Of course, if you asked Sam, he might just tell you I MacGyver\'d the entire site together from scratch using only silly string, duct tape, and a couple lines of code.' +
              '</p>'
            ).fadeIn();
        }
      });
      $('.projectImage').fadeOut({
            complete:function(){
              $('.projectImage').attr({src:'img/AtlasSS.png'}).fadeIn({
                complete:function(){
                  animating = false;
                }
              });
            }
          });
      break;




    case '3':
      $('.projectDisplay').fadeOut({
        complete:function(){
          $('.projectDisplay').html('<h3 class="projTitle">Java Tower Defense Game</h3> '+
              '<br><h4>Personal Project: Shelved</h4><br> <p class="projTextBox"> '+
              'This was my very first personal project in Java. '+
              'Roughly following a tutorial, this project was a way to have fun experimenting with both Java and the Ecclipse IDE. '+
              'I also wanted to begin programming games to get more of an idea of all the parts and components that might go into making them. '+
              '<br> <br> '+
              'The purpose of this project was: <br> '+
              '- Create a basic tower defense style game. <br> '+
              '- Familiarizing myself with basic Java concepts and differences between Java and Javascript. <br> '+
              '- Deviation from tutorial upon understanding Java concepts and how basic things worked. <br> '+
              '- Learning to create an application that does not run on some sort of Webpage or Javascript REPL. <br>'+
              '- Figuring out what the "Static" was doing without googling it (Mostly to see if I could. I did manage to figure it out)'+
              '</p>').fadeIn();
        }
      });
      $('.projectImage').fadeOut({
            complete:function(){
              $('.projectImage').attr({src:'img/JavaTDSS.png'}).fadeIn({
                complete:function(){
                  animating = false;
                }
              });
            }
          });
      break;
    case '4':
      $('.projectDisplay').fadeOut({
        complete:function(){
          $('.projectDisplay').html('<a  href="#" title="Click to open site in new" onclick="window.open(\'http://www.lanewins.com\',\'_blank\')"> <h3 class="projTitle">League ANalytical Examiner (LANE)</h3> </a> ' +
              '<br> <h4> Project Lead: Me</h4>'+
              '<br> <h4 title="Contact info provided upon direct request"> Team Members: Michael Im & Eleazar Corpuz</h4>'+
              '<br><br> <p class="projTextBox"> '+
              'DevLeague Graduation Exam: Create a webapp that utilizes an outside API and works with a sizeable chunk of "data". '+
              'We had a sizeable chunk of League of Legends converts during our bootcamp so we wanted to design an app to help them learn the game. <br><br>'+
              'My Initial App Idea: Designed for pre-match use this app would pull api data for the ten players (user included). '+
              'With this data it would run a threat analysis based off previous matches played for each player. '+
              'App would then decide the best items (and tips) for the user to counter strong players on enemy team. <br><br>'+
              'Problem: Reading through the "legaluese" I learned Riot (League\'s developer) limits API call rate (10 calls/ 10 seconds), current app idea required 12 API calls per inquiry (1x screenname to API ID, 1x match data, 10x player data) <br><br>'+
              'New App Idea: Using provided match data to create a post-game map replay of how the game played out. Allowing new players to visualize where things might have went wrong. We went with this idea as it only required 3 API calls.'+
              ''+
              ''+
              ''+
              ''+
              '</p>').fadeIn();
        }
      });
      $('.projectImage').fadeOut({
            complete:function(){
              $('.projectImage').attr({src:'img/LaneWinsSS.png'}).fadeIn({
                complete:function(){
                  animating = false;
                }
              });
            }
          });
      break;
    case '5':
      $('.projectDisplay').fadeOut({
        complete:function(){
          $('.projectDisplay').html('<a  href="#" title="Click to open site in new" onclick="window.open(\'https://devpost.com/software/uber-squared\',\'_blank\')"> <h3 class="projTitle">Uber Squared</h3> </a> ' +
              '<br> <h4> Project Lead: Me</h4>'+
              '<br> <h4 title="Contact info provided upon direct request"> Team Members: Michael Im, Robert Galliher, & Bryan Alexander</h4>'+
              '<br><br> <p class="projTextBox"> '+
              'Uber/DevLeague 2015 Hackathon submission and my second hackathon participated in. <br><br>'+
              'My Idea: An app that saves a pre-input user route to a number of destinations. Uses the current user locaiton at the time of requesting next ride as the origin/pickup. <br><br>'+
              'Useful for things such as: <br> '+
              '- Bar-Hopping <br>'+
              '- A self-guided sight-seeing tour with only attractions that appeal to you <br>'+
              '- Or even just setting up a ride to (and back from) wherever <br><br>'+
              ''+
              ''+
              ''+
              ''+
              ''+
              ''+
              ''+
              ''+
              '</p>').fadeIn();
        }
      });
      $('.projectImage').fadeOut({
            complete:function(){
              $('.projectImage').attr({src:'img/UberSqrdSS.jpg'}).fadeIn({
                complete:function(){
                  animating = false;
                }
              });
            }
          });
      break;
    case '6':
      $('.projectDisplay').fadeOut({
        complete:function(){
          $('.projectDisplay').html('<h3 class="projTitle">LaUNCH Target</h3> ' +
              '<br> <h4> Project Lead: Jesse Copeland</h4>'+
              '<br> <h4 title="Contact info provided upon direct request"> Team Members: Alex Anich, Bryan Butteling, & I</h4>'+
              '<br><br> <p class="projTextBox"> '+
              'My first hackathon entry, part of the 2015 Global Distributed Meteor Hackathon event. '+
              'Our team\'s goal was to create an app that would make it easier to plan lunch outings with co-workers. '+
              'The idea behind the app was to streamline the decision and planning processes for such outings. <br><br>'+
              'General App Rundown: <br>'+
              '- App began with planning outing. Initial user would input a general destination on a map and designate time. <br>'+
              '- App generated url to share with other outing participants. <br>'+
              '- Secondary users who followed URL and were taken to vote page (vote page populated by eateries near initial user\'s selected approx. destination)<br>'+
              '- After voting users redirected to page with tallied votes and countdown timer until set lunch time.'+
              ''+
              ''+
              '</p>').fadeIn();
        }
      });
      $('.projectImage').fadeOut({
            complete:function(){
              $('.projectImage').attr({src:'img/DevMeteorHackathon.jpg'}).fadeIn({
                complete:function(){
                  animating = false;
                }
              });
            }
          });
      break;
    default:
      console.log('ERR: Switch fail mainpageEffects.js:130 - I have no idea how you broke it but you did, you must be proud');
      animating = false;
  }
}


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
    'General All Around Nice Guy',
    'Thespian at Heart',
    '"Mr. Nolan" by Adorable 4-year Old Logic',
    'Can\'t Spell Without Double Checking Google',
    'Subtle as a Brick (Honesty is Underrated)',
    'Running Out of Message Ideas',
    'Low Maintenance',
    'if( (near&&farSighted) || (far&&shortSighted)){ Incredibly Good Looking };',
    'Now With 83% More Wit',
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
    'Level 0: This one\'s a freebie. Welcome to Westworld. (How deep into the park will you go?)'+
    '<sc'+'ript>co'+'nsole.log("wa'+'keUpDo'+'lores")</scr'+'ipt>',
    'Scientific Study Proves Theory: People Who Have More Birthdays Live Longer',
    'Magnetic Personality',
    'Warframe:"Hello Kitty Island Adventure" Clan Leader',
    'Recovering Wow-aholic',
    'Killed All His Farmville Crops by Day 2',
    'Terminally Diagnosed With Whiteboy Rhythm (I Can\'t Dance)',
    'Wants to Voice a Game Character',
    'Will Sometimes Vacation in Hyrule or Skyrim (Depending on Airfare)',
    'Raised on the Planet Reach Under Supervision of Dr. Catherine Halsey',
    'Resurrected as a Guardian of the Traveler\'s Light',
    'Known to Occasionally Moonlight as Italian Plumber to Fight Turtles',
    'I RTFM so You Won\'t Need to',
    'Able to Cook Minute Rice in 57 Seconds',
    'Potentially Narcoleptic',
    'Hopes Bo Burnham Finds His Happiness',
    'while(frustrated){face + keyboard = "ijmn cg mrzehrsz "};',
    'if(!caffinated){ Part Demon } else { Complete Angel };',
    'Dude, I\'m not as Think as you Drunk I am',
    'Star Player of the Zanarkand Abes',
    'Probably Slightly Autistic (Just a bit Eccentric in Every Way)',
    'Perfectly Flawed',
    'He\'s Probably Currently Out Making Friends With More Great SF People',
    '"Wubba Lubba Dub Dub"<script>/* Ever feel like a butter passing robot? https://youtu.be/X7HmltUWXgs?t=53s */</script>'



  ];

  aboutMes.push(
    'There are currently ' + (aboutMes.length + 2) + ' of these messages. How many do you remember?'
    );

  aboutMes.push(
    'I lied, there are ' + (aboutMes.length + 2 - Math.floor(Math.random()*(aboutMes.length + 2))) + ' messages. Good job keeping track though'
    );

  var randomInt = Math.floor(Math.random()*aboutMes.length);
  while($("randomAboutMe").html() == aboutMes[randomInt]) {
    randomInt = Math.floor(Math.random()*aboutMes.length);
  }


  $("randomAboutMe").fadeOut({complete: function(){
    $("randomAboutMe").html(aboutMes[randomInt]).fadeIn();
  }});
  setTimeout(randomAbtMe, 8500);
}

