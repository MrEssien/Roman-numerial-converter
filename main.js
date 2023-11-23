const button = document.getElementById('btn')


const convertToRoman = () => {
    let num = parseInt(document.getElementById('Aranum').value) // this is important step as is taking as a string, we need to change this into an interger and we can use parseInt to do this
    const romanNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; // An array with the roman strings inside
    const arabicNum = [1000, 900, 500, 400, 100,  90,   50,  40,   10,   9,   5,   4,    1];  // An array with the corresponding abraic numbers
  
    let index = 0;  //this will track the position in the array then to append it's corresponindg romanNum
    let resultString = "";  //represnts the string that will be resulted in


while (num> 0) {
      if (num >= arabicNum[index]) {
        num-= arabicNum[index];
        resultString += romanNum[index];
      } else index++;
    }
  //The while loop continues as long as num is greater than 0.
    //Inside the loop, it checks if the current num is greater than or equal to the value at the current arabicNum[index].
    //If true, it subtracts that value from num and appends the corresponding Roman numeral (romanNum[index]) to resultString.
    //If false, it increments index to move to the next position in the arrays.
    
    document.getElementById('Romnum').value = resultString; // then using document.get to capture the id of the input in the html so we can dispaly the correct roman numerial
  }

  button.addEventListener('click', convertToRoman) // important to note that event handle must come after function in the code