// 8KYU CODEWARS - HOLIDAY VI SHARK PONTOON 
// INSTRUCTIONS: 
// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

// FUNDAMENTALS NUMBERS STRINGS MATHEMATICS ALGORITHMS

//SOLUTION

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    //distance = speed * time
    //if dolphin=true, shark speed = shark speed/2
      //output= determine if will shark get to me before I get to the pontoon
      //Example
      //pontoonDistance=12 (my distance from pontoon)=meSpeed(4) * time
      //my time = pontoonDistance/meSpeed=12/4 =3seconds
      //sharkDistance=50=sharkSpeed(8)*time
      //shark time= 50/8=6.25seconds
      
      if(dolphin===true){
        sharkSpeed/=2
      }
      let myTime = pontoonDistance/youSpeed
      let sharkTime= sharkDistance/sharkSpeed
      
      return sharkTime > myTime ? "Alive!" :"Shark Bait!"
    }