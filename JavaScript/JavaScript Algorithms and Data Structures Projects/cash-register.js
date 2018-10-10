function checkCashRegister(price, cash, cid) {
  let changeAmount = cash - price;
  changeAmount = changeAmount.toFixed(2)

  let changeArr = []
  
  
  let caixa = cid.reduce((acc,value) => {
    acc.total += value[1];
    return acc;
  },{total:0});
  
  
  let statusTxt = "OPEN";
  
  
  if( changeAmount > caixa.total) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  }
  
  if( changeAmount == caixa.total) {
    return {status: "CLOSED", change: cid};
  }

  let coins = {"ONE HUNDRED":{index:8,value:100},"TWENTY":{index:7,value:20},
  "TEN":{index:6,value:10},"FIVE":{index:5,value:5},"ONE":{index:4,value:1},
  "QUARTER":{index:3,value:0.25},"DIME":{index:2,value:0.10},
  "NICKEL":{index:1,value:0.05},"PENNY":{index:0,value:0.01}};
  
  Object.keys(coins).forEach(key => {
    
    while(coins[key].value <= changeAmount && cid[coins[key].index][1] >= coins[key].value) {
      
      changeAmount = changeAmount - coins[key].value;
      changeAmount = changeAmount.toFixed(2);
      
      cid[coins[key].index][1] = cid[coins[key].index][1] - coins[key].value
      cid[coins[key].index][1] = cid[coins[key].index][1].toFixed(2)

      
      let encontrado = false;
      
      for (let x = 0; x < changeArr.length; x++) {
        if(changeArr[x][0] == key) {
          changeArr[x][1] += coins[key].value;
          
          encontrado = true;
          break;
        }
      }
      
      if(!encontrado){
        changeArr.push([key,coins[key].value]);
      }
      
    }
  
  });
  
  let change = cash - price;

  let trocoDisponivel = changeArr.reduce((acc,value) => {
    acc.total += value[1];
    return acc;
  },{total:0});
  
  if(change > trocoDisponivel.total){
    statusTxt = "INSUFFICIENT_FUNDS";
    changeArr = [];
  }
  
  return {status: statusTxt, change: changeArr};
}