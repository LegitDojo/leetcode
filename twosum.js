// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


//parameters: 2 integers in an array and a target integer
//output: indices of 2 integers

function twoSum (twoNums, target) {
    for( i=0;i<twoNums.length;i++){
        for(j=i+1;j<twoNums.length;j++){
            if(twoNums[i]+twoNums[j]==target){
                return [i,j]
            }
        }
    }
}