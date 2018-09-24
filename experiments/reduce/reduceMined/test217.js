





var callbackArguments = [];
var argument1 = function (count, op) {
 callbackArguments.push(arguments) 

    if (op.value != null) {
        count += op.value.length;
    }
    return count;
};
var argument2 = r_0;
var argument3 = function (object, localizedDigit, i) {
 callbackArguments.push(arguments) 

    object[localizedDigit] = String(i);
    return object;
};
var argument4 = function (offset, op) {
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
var argument5 = "";
var argument6 = "F";
var argument7 = function (acc, line) {
 callbackArguments.push(arguments) 

    var ind = '';
    while (ind.length < line.indent * 2) {
        ind += ' ';
    }
    return ind + line.str + '\n' + acc;
};
var argument8 = null;
var base_0 = ["fuw","z","|J","-","[",":olfp","fN","e*1{","8"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["fuw","z","|J","-","[",":olfp","fN","e*1{","8"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["fuw","z","|J","-","[",":olfp","fN","e*1{","8"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["fuw","z","|J","-","[",":olfp","fN","e*1{","8"]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test217.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)