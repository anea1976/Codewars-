// CODEWARS 8KYU - SMALLEST UNUSED ID 
// INSTRUCTIONS:
// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

// ALGORITHMS FUNDAMENTALS

// SOLUTION:
function nextId(ids){
    let maxNum = Math.max(...ids)
   
    let allIds = Array.from({length: maxNum + 2}, ((e,i)=> i)).filter((e,i) => !ids.includes(e));
     
    return Math.min(...allIds)
    
    }
