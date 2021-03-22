Codewars 6kyu - Multiplication table
Instructions:
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
SOLUTION:
const multiplicationTable = function (size) {
    //create empty array that will receive the final table
    let multTable = [];
    //use first loop to create each sub-array
    for (let i = 1; i <= size; i++) {
        let subArr = [i]
        //use second loop to populate sub-array created by first loop
        for (let j = 2; j <= size; j++) {
            subArr.push(i * j)
        }
        multTable.push(subArr)
    }
    return multTable
}



