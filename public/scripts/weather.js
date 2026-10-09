function setNight() {
    var cloud = retrieveCloud();
    var cloud_pass = 'url("../img/background/yellowmoon.png"), url("../img/background/stars.png"), url("' + cloud + '"), linear-gradient(black, midnightblue, steelblue)';
      /*document.body.style.backgroundImage = 'url("/pics/yellowmoon.png"), url("/pics/stars.png"), url("/pics/weather/clouds 1.png"), linear-gradient(black, midnightblue, steelblue)';*/
      document.body.style.backgroundImage = cloud_pass;
      document.body.style.backgroundRepeat = 'no-repeat,no-repeat,repeat';
      document.body.style.backgroundPosition = '11% 2%, 5% 25%';
      document.body.style.backgroundAttachment = 'scroll';
      document.body.style.backgroundBlendMode = 'normal,normal,overlay,normal';
      document.body.style.minHeight = '100vh';
      document.getElementById("isTimeResponsive").style.background = "rgba(61, 88, 227, 0.3)";
}
function setDawn() {
  var cloud = retrieveCloud();
  var cloud_pass = 'url("' + cloud + '"), linear-gradient(coral,white)';
      document.body.style.backgroundImage = cloud_pass;
      document.body.style.backgroundRepeat = 'repeat';
      document.body.style.minHeight = '100vh';
      document.getElementById("isTimeResponsive").style.background = "rgba(244, 69, 160, 0.3)";
}
function setDay() {
  var cloud = retrieveCloud();
  var cloud_pass = 'url("' + cloud + '"), linear-gradient(#ffc9a9, plum)';
      document.body.style.background = cloud_pass;
      document.body.style.backgroundRepeat = 'repeat';
      document.body.style.minHeight = '100vh';
      document.getElementById("isTimeResponsive").style.background = "linear-gradient(lightyellow,lightblue)";
}

/* weather randomizer -- I think I'll have random clouds be set every time the page loads/button is pressed */
function retrieveCloud() {
  var cloud_patterns = ["../img/background/clouds 1.png","../img/background/clouds 2.png","../img/background/clouds 3.png","../img/background/clouds 4.png","../img/background/clouds 5.png","../img/background/clouds 6.png","../img/background/clouds 7.png","../img/background/clouds 8.png"];
  var cloud_current = cloud_patterns[Math.floor(Math.random() * cloud_patterns.length)];
  return cloud_current;
}
function testCloud() {
  return "../img/background/clouds 1.png";
}

function onStart() {
  var time = new Date();
  var hour = time.getHours();
  if (hour < 5 || hour >= 22) {
    setNight();
  } else if (5 <= hour && hour < 22) {
    setDawn();
  } 
  if (7 <= hour && hour < 18) {
    setDay();
  }
}

onStart()