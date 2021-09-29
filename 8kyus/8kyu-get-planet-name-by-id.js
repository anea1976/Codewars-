// 8KYU CODEWARS - GET PLANET NAME BY ID
// INSTRUCTIONS:
// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"
// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         name = 'Mercury'
//         break
//       case 2:
//         name = 'Venus'
//         break
//       case 3:
//         name = 'Earth'
//         break
//       case 4:
//         name = 'Mars'
//         break
//       case 5:
//         name = 'Jupiter'
//         break
//       case 6:
//         name = 'Saturn'
//         break
//       case 7:
//         name = 'Uranus'
//         break
//       case 8:
//         name = 'Neptune'
//         break
//     }
    
//     return name;
//   }

// SOLUTIONS:
//1)
function getPlanetName(id){
        var name;
        switch(id){
          case 1:
            name = 'Mercury'
            break;
          case 2:
            name = 'Venus'
            break;
          case 3:
            name = 'Earth'
            break;
          case 4:
            name = 'Mars'
            break;
          case 5:
            name = 'Jupiter'
            break;
          case 6:
            name = 'Saturn'
            break;
          case 7:
            name = 'Uranus'
            break;
          case 8:
            name = 'Neptune'
            break;
        }
        
        return name;
      }




//2)
function getPlanetName(id){
    var name = {
      1: 'Mercury',
      2: 'Venus',
      3: 'Earth',
      4: 'Mars',
      5: 'Jupiter',
      6: 'Saturn',
      7: 'Uranus',
      8: 'Neptune',
    };
    
    return name[id];
  }
