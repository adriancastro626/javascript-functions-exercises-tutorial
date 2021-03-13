var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89; // 121.93 euros
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;  // 15137.60 yenes
}
//***** YOUR CODE BELOW ↓ ******///

let euros = dollarToEuro(137);
let yenes = euroToYen(euros);

console.log(yenes);

