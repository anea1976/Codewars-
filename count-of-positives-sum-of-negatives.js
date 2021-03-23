Codewars 8kyu
Count of positives / sum of negatives
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

If the input array is empty or null, return an empty array.

    Example
For input[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

    SOLUTION:
1) Using forEach loop
function countPositivesSumNegatives(input) {
    if (!input || !input.length) {
        return [];
    }
    const finalArray = [0, 0]
    input.forEach((x) => (x > 0 ? finalArray[0]++ : (finalArray[1] += x)))
    return finalArray
}
2) Using reduce()
function countPositivesSumNegatives(input) {
    return input && input.length ?
        input.reduce((acc, c) => { c > 0 ? acc[0]++ : (acc[1] += c); return acc }, [0, 0]) : []
}