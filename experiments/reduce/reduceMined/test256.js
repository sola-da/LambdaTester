





var callbackArguments = [];
var argument1 = function (count, op) {
 callbackArguments.push(arguments) 

    if (op.value != null) {
        count += op.value.length;
    }
    return count;
};
var argument2 = null;
var argument3 = function (p, v) {
 callbackArguments.push(arguments) 

    return { sighting: p.sighting - 1 };
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
var argument5 = null;
var argument6 = function (err, results) {
 callbackArguments.push(arguments) 

    callback.apply(that, [err].concat(results));
};
var argument7 = false;
var argument8 = {"":126,"H":1.4414222184291631e+308,"9.234748031560332e+307":""};
var base_0 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&oZ","p","2HrK","#","_[",",fX`#+^","*"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test256.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)