function palindrome(str) {
  let cleanStr = str.toLowerCase().replace(/[^0-9a-z]/g,"");
  return cleanStr.split("").reverse().join("") == cleanStr;
}



palindrome("A man, a plan, a canal. Panama");