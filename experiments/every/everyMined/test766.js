





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var argument2 = "";
var argument3 = {};
var argument4 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument5 = "@";
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument7 = 1.5225427665492287e+307;
var argument8 = function (op) {
 callbackArguments.push(arguments) 

    return InsertOp.isInsert(op);
};
var argument9 = 1.7976931348623157e+308;
var argument10 = "";
var base_0 = ["3&%","8Z","nt(t","pY4wZs","!",")M$v","q8","{Z","*1o","F,D"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3&%","8Z","nt(t","pY4wZs","!",")M$v","q8","{Z","*1o","F,D"]
var r_1= undefined
try {
r_1 = base_1.every(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3&%","8Z","nt(t","pY4wZs","!",")M$v","q8","{Z","*1o","F,D"]
var r_2= undefined
try {
r_2 = base_2.every(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3&%","8Z","nt(t","pY4wZs","!",")M$v","q8","{Z","*1o","F,D"]
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
require("fs").writeFileSync("./experiments/every/everyMined/test766.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)