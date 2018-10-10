function convertToRoman(num) {
  let objDigits = {1000:"M",900:"CM",500:"D",400:"CD",
  100:"C",90:"XC",50:"L",40:"XL",
  10:"X",9:"IX",5:"V",4:"IV",1:"I"}
  
  let keys = Object.keys(objDigits).reverse();
  let romanD = "";
  
  
  for(let x = 0; x < keys.length; x++){
    
    while(keys[x] <= num){
      romanD += objDigits[keys[x]];
      num -= keys[x];
    }
    
  }
  
  return romanD;
}