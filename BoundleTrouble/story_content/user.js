function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5XuZ1dTener":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var YourScore= player.GetVar("Score1");
//var YourScore=(YourScore*100)/60;
//var YourScore=Math.round(YourScore);
var lmsAPI = parent;

lmsAPI.SetScore(YourScore,70,0); //second parameter is max, second is min scale

if (YourScore >= 70 )
{ 
SetStatus("completed")
}
else
{ 
SetStatus("Incompleted")
}
}

