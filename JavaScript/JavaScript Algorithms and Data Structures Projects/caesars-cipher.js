function rot13(str) { 
  let reg = /[A-Z]/;
  let arrStr = str.split("");
  let code = 0;

  for(let indice in arrStr){
    code = arrStr[indice].charCodeAt() + 13;
    
    if(code > 90){
      code = 65 + ((code - 90) -1);
    }
    
    if(reg.test(arrStr[indice])) {
      arrStr[indice] = String.fromCharCode(code);
    }
  }

  return arrStr.join("");
}