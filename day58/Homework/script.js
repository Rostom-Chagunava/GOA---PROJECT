//1.davaleba: You're re-designing a blog, and the blog's posts have the Weekday Month Day, time format for showing the date and time when a post was made, e.g., Friday May 2, 7pm.

// You're running out of screen real estate, and on some pages you want to display a shorter format, Weekday Month Day that omits the time.

// Write a function that takes the website date/time in its original string format and returns the shortened format.

// Input

function shortenToDate(x) {
  
    return x.slice(0,x.indexOf(","))
  }

// -------

function shortenToDate(x) {
    
    let myList = ""
    
    for (let i =0;i < x.length;i++){
      if (x[i] !=","){
        myList += x[i]
      }else{
        break 
      }
      
    }
    return myList
    
}

// ========

function shortenToDate(longDate) {
    let result = ""
    
    for (let i of longDate){
      if (i != ","){
        result += i
        
      }else{
        break
      }
    }
    return result
  }



//  2 davaleba:  Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

// For an example list of 1, 3, 5, 7

// 1. Add all of the numbers

// 1+3+5+7 = 16
// 2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

// 16/4 = 4
// 3. The mean (or average) of this list is 4


var findAverage = function (nums) {
  
    let result = 0
    for(let i = 0; i < nums.length;i++){
      result += nums[i]
    }
    return result / nums.length
    // Code here
  }


// 3 davaleba:=== 
// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null. 

var replaceDots = function(str) {
    return str.replaceAll(".","-");
  }


// 4 davaleba:: == Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

function findNeedle(haystack) {
    let result = haystack.indexOf("needle")
    
    return "found the needle at position" + " "+String(result)
  } 

// /=====
function findNeedle(haystack) {
  
    for (let i of haystack){
      if(i == "needle"){
        return "found the needle at position" + " " + haystack.indexOf(i)
      }
    }
    // your code here
  }
  
//   

function findNeedle(haystack) {
    for(let i in haystack){
      if (haystack[i] == "needle"){
        return "found the needle at position"+" "+i
      }
    }
    // your code here
  }
  