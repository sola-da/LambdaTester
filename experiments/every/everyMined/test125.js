





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return Math.floor(epsilon + v.dotProduct(n, v.substract(item, a))) >= 0;
};
var argument2 = null;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var argument4 = "5t";
var argument5 = function (op) {
 callbackArguments.push(arguments) 

    return Op.isInsert(op);
};
var argument6 = r_2;
var argument7 = true;
var argument8 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument9 = {"4":"","126":"@","893":618,"":3.868257684955221e+307,")":"","9.391349161713958e+307":"","4.650300814198938e+307":1.3455520459422293e+308,"1.3623362696108136e+308":823,"7.392991634291948e+307":714,"1.0355528289714827e+308":""};
var argument10 = {"242":1.4776172671192576e+308,"b>":"p","3.0481490052276395e+306":100,"1.6454226339697587e+308":"u","":"T8x","^0":1.8116107014377474e+307};
var base_0 = [618]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618]
var r_1= undefined
try {
r_1 = base_1.every(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
}
catch(e) {
r_3= "Error"
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/every/everyMined/test125.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)