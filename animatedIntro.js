var skipped = false;
var mainTriggered = false;
var shifted = false;

$('.main').hide();
$('#typed').typed({
  strings: ['Whois: Nolan Ryan', 'Whois: Bruce Nolan', 'Whois: Nolan Kalani Yee     $^2000 WARNING:^500 STACK OVERFLOW'],
  typeSpeed: 1,
  callback: function(){
    shift();
    setTimeout(recursiveHelper(0,5), 1000);
  }
});

$(document).ready(function() {
  $('#skipButton').click(function(){
    skipped = true;
    mainPage();
  });
});

function mainPage() {
  mainTriggered = true;
  $('.main').css({
    'height': '100vh'
  });
  $('#typed-fix').hide();
  $('.er5').fadeOut();
  $('.er4').delay(100).fadeOut();
  $('.er3').delay(200).fadeOut();
  $('.er2').delay(300).fadeOut();
  $('.er1').delay(400).fadeOut();
  setTimeout(function(){
    if (shifted) {
      $(".head-wrap").toggleClass("shift-text");
    }
  }, 450);

  setTimeout(function(){
    $(".animatedIntro").attr("id", "floatOffTop");
  }, 1000);

  $('.text-body').delay(1000).fadeOut();
  $('.title-bar').delay(1000).fadeOut();
  $('.text-editor-wrap').delay(1000).fadeOut();
  $('.animatedIntro').delay(1000).fadeOut();
  $('footer').hide();
  $('.main').delay(2000).fadeIn({
    complete: function(){
      $('.wordsAndThingsDisplayBox').fadeIn({
        complete: function(){
          $('.aboutMeContainer').fadeIn();
        }
      });

    }
  });
}


function recursiveHelper(int, max) {
  if (skipped) {
    //
  } else if (int != max) {
    recursiveAdd(int);
    setTimeout(function() {
      recursiveHelper(int+1, max);
    }, 700);
  } else {
    $('#typed-fix').typed({
      strings: ['Yep, I see the problem. ^400I\'ll fix it.^200 Just a moment.'],
      typeSpeed: 30,
      callback: function() {

      }
    }).delay(6000).fadeOut(500)
    setTimeout(function(){
      if(!mainTriggered){
        mainPage();
      }
    }, 6500);
  }
}

function recursiveAdd(int) {
  switch(int) {
    case 0:
      $('.typed-cursor').before("<br><span class='er1'>$ ERROR: AWESOME LEVELS EXCEEDED MAXIMUM CAPACITY</span>");
      break;
    case 1:
      $('.typed-cursor').before("<br><span class='er2'>$ ERROR: DATA AGGREGATION CRITICAL FAILURE</span>");
      break;
    case 2:
      $('.typed-cursor').before("<br><span class='er3'>$ ERROR: INSERT USELESS ERROR MESSAGE HERE</span>");
      break;
    case 3:
      $('.typed-cursor').before("<br><span class='er4'>$ ERROR: POWER LEVEL OVER 9000</span>");
      break;
    case 4:
      $('.typed-cursor').append("<br><span class='er5'>$ SYSTEM FAILURE IMMINENT! RELEASE_SKYNET.EXE? Y or Y?</span>");
      break;
    default:
      break;
  }
}

function shift(){
  $(".head-wrap").toggleClass("shift-text");
  shifted = true;
  terminalHeight();
}

function terminalHeight(){
  var termHeight = $(".terminal-height");
  var value = termHeight.text();
  value = parseInt(value);
  setTimeout(function(){
    if (value < 100){
      value = value+1;
      this.txtValue = value.toString();
      termHeight.text(this.txtValue);
      self.terminalHeight();
    }
    else{
      clearTimeout();
    }
  }, 10);
}