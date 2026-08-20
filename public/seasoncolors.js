function setNight() {
    var cloud = retrieveCloud();
    var cloud_pass = 'url("/pics/yellowmoon.png"), url("/pics/stars.png"), url("' + cloud + '"), linear-gradient(black, midnightblue, steelblue)';
      /*document.body.style.backgroundImage = 'url("/pics/yellowmoon.png"), url("/pics/stars.png"), url("/pics/weather/clouds 1.png"), linear-gradient(black, midnightblue, steelblue)';*/
      document.body.style.backgroundImage = cloud_pass;
      document.body.style.backgroundRepeat = 'no-repeat,no-repeat,repeat';
      document.body.style.backgroundPosition = '11% 2%, 5% 25%';
      document.body.style.backgroundAttachment = 'scroll';
      document.body.style.backgroundBlendMode = 'normal,normal,overlay,normal';
      document.body.style.minHeight = '100vh';
      document.getElementById("seasonal").style.background = "rgba(61, 88, 227, 0.3)";
}
function setDawn() {
  var cloud = retrieveCloud();
  var cloud_pass = 'url("' + cloud + '"), linear-gradient(coral,white)';
      document.body.style.backgroundImage = cloud_pass;
      document.body.style.backgroundRepeat = 'repeat';
      document.body.style.minHeight = '100vh';
      document.getElementById("seasonal").style.background = "rgba(244, 69, 160, 0.3)";
}
function setDay() {
  var cloud = retrieveCloud();
  var cloud_pass = 'url("' + cloud + '"), linear-gradient(#ffc9a9, plum)';
      document.body.style.background = cloud_pass;
      document.body.style.backgroundRepeat = 'repeat';
      document.body.style.minHeight = '100vh';
      document.getElementById("seasonal").style.background = "linear-gradient(lightyellow,lightblue)";
}

/* weather randomizer -- I think I'll have random clouds be set every time the page loads/button is pressed */
function retrieveCloud() {
  var cloud_patterns = ["/pics/weather/clouds 1.png","/pics/weather/clouds 2.png","/pics/weather/clouds 3.png","/pics/weather/clouds 4.png","/pics/weather/clouds 5.png","/pics/weather/clouds 6.png","/pics/weather/clouds 7.png","/pics/weather/clouds 8.png"];
  var cloud_current = cloud_patterns[Math.floor(Math.random() * cloud_patterns.length)];
  return cloud_current;
}
function testCloud() {
  return "/pics/weather/clouds 1.png";
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
// For header toggles
function listToggle(navID) {
        document.getElementById(navID).classList.toggle("show");
      }
onStart()