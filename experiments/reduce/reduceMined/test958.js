





var callbackArguments = [];
var argument1 = function (previousValue, currentValue) {
 callbackArguments.push(arguments) 

    return previousValue + currentValue;
};
var argument2 = true;
var argument3 = {"460":655,"618":1.3941262271352285e+308,"":823,"1.1045337170220023e+308":627,"5.602305854037741e+307":242,"X`":"Y"};
var argument4 = function (prv, cur) {
 callbackArguments.push(arguments) 

    return prv + HLP.packMPI(cur);
};
var argument5 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument6 = null;
var argument7 = function (offset, op) {
 callbackArguments.push(arguments) 

    var left, right, _ref;
    if (offset + op.getLength() <= index) {
        leftOps.push(op);
    } else if (offset >= index) {
        rightOps.push(op);
    } else {
        _ref = op.split(index - offset), left = _ref[0], right = _ref[1];
        leftOps.push(left);
        rightOps.push(right);
    }
    return offset + op.getLength();
};
var argument8 = r_0;
var base_0 = ["?","25a","{",";OZx#Y","3","8","<qV4c`","(","9"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?","25a","{",";OZx#Y","3","8","<qV4c`","(","9"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?","25a","{",";OZx#Y","3","8","<qV4c`","(","9"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?","25a","{",";OZx#Y","3","8","<qV4c`","(","9"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test958.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)