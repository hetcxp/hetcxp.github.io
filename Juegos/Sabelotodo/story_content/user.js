function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6qwqg4h1biu":
        Script1();
        break;
  }
}

function Script1()
{
  function zeros(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

var fin="Done";
var player = GetPlayer();
var count = player.GetVar("Countdown_Duration");
var minutes, seconds, timer, totalTime;
var counter = setInterval(timer, 1000);

function timer() {
    count = count - 1;
    minutes = zeros(Math.floor(count / 60));
    seconds = zeros(count % 60);
    if (count == 0){
        player.SetVar("Countdown_Finished",fin);
}
    if (count < 0) {
        clearInterval(counter);
        return;
    }
    totalTime = minutes + ':' + seconds;
    player.SetVar("Countdown_Display",totalTime);
}
}

