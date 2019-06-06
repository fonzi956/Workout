var sec = 0;
var min = 0;
setTimeout(countDown,1000);
function typeWorkOut(min, sec){
   switch(min) {
      case 0:
         return "Seated Ab Circles Left x 60 seconds"
      case 1:
        return "Seated Ab Circles Right x 60 seconds";
        break;
      case 2:
      return "Drunken Mountain Climbers x 60 seconds";
        break;
      default:
      return "Workout done";
    }
}

function countDown(){
   document.getElementById("h2").innerHTML = typeWorkOut(min, sec);
   document.getElementById("p1").innerHTML = min+" : "+sec;
   if(sec == 59) {
      sec = 0;
      min++;
   }
   sec++;
   if(sec > 0){
      setTimeout(countDown,1000);
   }
   

   
   
}

/*
30 and 10 seconds notications then 5 seconds countdonw to the next workout

Seated Ab Circles Left x 60 seconds
Seated Ab Circles Right x 60 seconds
Drunken Mountain Climbers x 60 seconds
Rest 30 seconds
Marching Planks x 60 seconds
Scissors x 60 seconds
Starfish Crunch x 30 seconds
Rest 30 seconds
Russian V Tuck Twists x 30 seconds

1) 5x20-25 reps push ups 
2) 4x25 reps air squats 

3) 5x30sec holds 
4) 4x8/12 leg raises
*/