var skipped = false;
var mainTriggered = false;

$('#typed').typed({
  strings: ['Whois: Nolan Ryan', 'Whois: Bruce Nolan', 'Whois: Nolan Kalani Yee     $^2000 WARNING:^500 STACK OVERFLOW'],
  typeSpeed: 1,
  callback: function(){
    shift();
    setTimeout(recursiveHelper(0,5), 1000);
    // $('.head-wrap').delay(5000).fadeOut(1000);
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
  $('#typed-fix').hide();
  $('.header').slideUp();
  $('footer').hide();
  $('.main').append("<div>AND NOW MY PAGE APPEARS</div>");
}


function recursiveHelper(int, max) {
  if (skipped) {
    //
  } else if (int != max) {
    recursiveAdd(int);
    setTimeout(function() {
      recursiveHelper(int+1, max);
    }, 1000);
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
  console.log(int);
  switch(int) {
    case 0:
      $('.typed-cursor').before("<br><span>$ ERROR: AWESOME LEVELS EXCEEDED MAXIMUM CAPACITY</span>");
      break;
    case 1:
      $('.typed-cursor').before("<br><span>$ ERROR: DATA AGGREGATION CRITICAL FAILURE</span>");
      break;
    case 2:
      $('.typed-cursor').before("<br><span>$ ERROR: INSERT USELESS ERROR MESSAGE HERE</span>");
      break;
    case 3:
      $('.typed-cursor').before("<br><span>$ ERROR: POWER LEVEL OVER 9000</span>");
      break;
    case 4:
      $('.typed-cursor').append("<br><span>$ SYSTEM FAILURE IMMINENT! RELEASE_SKYNET.EXE? Y or Y?</span>");
      break;
    default:
      break;
  }
}

function shift(){
  $(".head-wrap").toggleClass("shift-text");
  terminalHeight();
}

function terminalHeight(){
  var termHeight = $(".terminal-height");
  var value = termHeight.text();
  value = parseInt(value);
  setTimeout(function(){
    if (value < 50){
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