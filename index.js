
let homeScore = 0;
let guestScore = 0;
let borderColour = "#ffffff";
let leaderBorderColour = "#ebde34";
let borderStyle = "3px solid ";

document.getElementById("home-score1").addEventListener("click", function() {addToHomeScore(1)});
document.getElementById("home-score2").addEventListener("click", function() {addToHomeScore(2)});
document.getElementById("home-score3").addEventListener("click", function() {addToHomeScore(3)});
document.getElementById("guest-score1").addEventListener("click", function() {addToGuestScore(1)});
document.getElementById("guest-score2").addEventListener("click", function() {addToGuestScore(2)});
document.getElementById("guest-score3").addEventListener("click", function() {addToGuestScore(3)});
document.getElementById("newgame-btn").addEventListener("click", resetScores);

function addToHomeScore(score) {
  homeScore += score;
  displayHomeScore();
}

function addToGuestScore(score) {
  guestScore += score;
  displayGuestScore();
}

function resetScores() {
  homeScore = 0;
  guestScore = 0;

  displayHomeScore();
  displayGuestScore();
}

function displayHomeScore() {
  document.getElementById("homescore").textContent = homeScore;
  highlightLeader();
}

function displayGuestScore() {
  document.getElementById("guestscore").textContent = guestScore;
  highlightLeader();
}

function highlightLeader() {
  if (homeScore > guestScore) {
    setScoreBorder(leaderBorderColour, borderColour);
  }
  else if (homeScore < guestScore) {
    setScoreBorder(borderColour, leaderBorderColour);
  }
  else {
    setScoreBorder(borderColour, borderColour);
  }
}

function setScoreBorder(homeBorderColour, guestBorderColour) {
  document.getElementById("homescore").style.border = borderStyle + homeBorderColour;
  document.getElementById("guestscore").style.border = borderStyle + guestBorderColour;
}
