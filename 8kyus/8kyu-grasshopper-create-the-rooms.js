// 8KYU CODEWARS - GRASSHOPPER CREATE THE ROOMS 
// INSTRUCTIONS 
// Escape the room
// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

// FUNDAMENTALS

//SOLUTIONS:
//1)
let rooms = {
  kitchen:{
   name:'kitchen',
 description:'needs to be cleaned',
  completed : false,
   
 },
    parlor:{
      name:'parlor',
 description:'needs to be tidied',
  completed :true,     
    },
   
   bedroom:{
      name:'bedroom',
 description:'needs to be swept',
  completed :true,     
    }
   
 }

 //2)
 class Room  {
  constructor() {
    this.name = '';
    this.description = '';
    this.completed= '';
  }
}
var rooms = {
  bedroom : new Room(),
  kitchen : new Room(),
  bathroom : new Room(),
}