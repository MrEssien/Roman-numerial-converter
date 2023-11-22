const convertToRoman = (num) => {
    const romanNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]; // An array with the roman strings inside
    const arabicNum = [1000, 900, 500, 400, 100,  90,   50,  40,   10,   9,   5,   4,    1];  // An array with the corresponding abraic numbers
  
    let index = 0;  //this will track the position in the array then to append it's corresponindg romanNum
    let resultString = "";  //represnts the string that will be resulted in
  
    while (num > 0) {
      if (num >= arabicNum[index]) {
        num -= arabicNum[index];
        resultString += romanNum[index];
      } else index++;
    }
  
    return resultString;
  }