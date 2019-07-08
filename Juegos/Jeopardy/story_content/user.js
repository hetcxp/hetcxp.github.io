function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6hf6IPRvAxT":
        Script1();
        break;
  }
}

function Script1()
{
  var player=GetPlayer();
var cScore=(player.GetVar("Score1")/1800)*100;
lmsAPI.SetScore(cScore, 100, 0);
lmsAPI.CommitData();
if(cScore>65){ 
lmsAPI.SCORM_SetCompleted();
} 
else {
lmsAPI.SCORM_ResetStatus();
}
}

