var sec = 0;
var min = 3;
setTimeout(countUp,1000);

function typeWorkOut(min, sec){
   if(min == 0) return ["Seated Ab Circles Left x 60 seconds", "Seated Ab Circles Right x 60 seconds", "1"];
   if(min == 1) return ["Seated Ab Circles Right x 60 seconds", "Drunken Mountain Climbers x 60 seconds", "1"];
   if(min == 2) return ["Drunken Mountain Climbers x 60 seconds", "REST", "1"];
   if((min == 3 && sec <= 30)) return ["REST", "Marching Planks x 60 seconds", "30"];
   if((min == 3 && sec >= 30) || (min == 4 && sec <= 30)) return ["Marching Planks x 60 seconds", "Scissors x 60 seconds", "31"];
   if((min == 4 && sec >= 30 ) || (min == 5 && sec <= 30)) return ["Scissors x 60 seconds", "Starfish Crunch x 30 seconds", "31"];
   if(min == 5 && sec >= 30)  return ["Starfish Crunch x 30 seconds", "REST", "30"];
   if( min == 6) return ["REST", "Russian V Tuck Twists x 30 seconds", "30"];
   if(min == 6 && sec >= 30) return ["Russian V Tuck Twists x 30 seconds", "30"];
   if(min >= 7) return ["Done", ""];
}

function countUp(){
   var resting = typeWorkOut(min, sec);
   if(sec == 59) {
      sec = 0;
      min++;
   }
   if(resting[2] == "1"&& sec == 29){
      console.log("30");
      play("thirty");

   }
   if(resting[2] == "1"&& sec == 49){
      console.log("10");
      play("ten");
   }
   // starting at the 30 seconds for 1 min workout
   if(resting[2] == "31"&& sec == 19){
      console.log("10");
      play("ten");

   }
   if(resting[2] == "31"&& sec == 59){
      console.log("30");
      play("thirty");
   }
   if(resting[2] == "30" && sec == 15){
      console.log("fithteen");
      play("fithteen");
   } 

   sec++;
   document.getElementById("h2").innerHTML = resting[0] + " <br>next is "+ resting[1];
   document.getElementById("p1").innerHTML = min+" : "+sec;
   if(sec > 0){
      //console.log(resting[0] == "REST");
      if((min > 0 && (sec >= 0 && sec <= 1)) && resting[0] != "REST"){
         document.getElementById("h2").innerHTML = resting[0] + " <br>next is "+ resting[1];
         setTimeout(countUp,5000);
         //go
      } 
      else
      setTimeout(countUp,1000);

   }
}

function play(mus) {
   var song = "WOR/"+mus+".mp3";
   var audio = new Audio(song);
   audio.play();
}

/*
http://127.0.0.1:5500/index.html

30 and 10 seconds notications then 5 seconds countdonw to the next workout

Seated Ab Circles Left x 60 seconds
Seated Ab Circles Right x 60 seconds
Drunken Mountain Climbers x 60 seconds
Rest 30 seconds 3:30
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