





var callbackArguments = [];
var argument1 = function (ret, set) {
 callbackArguments.push(arguments) 

    var name = downcaseFirst(set.name);
    ret[name] = collectify(jsifyHeaders(set.headers), set.rowSet);
    return ret;
};
var argument2 = r_0;
var argument3 = function (styles, str) {
 callbackArguments.push(arguments) 

    var name, value, _ref;
    _ref = str.split(':'), name = _ref[0], value = _ref[1];
    if (name && value) {
        name = name.trim();
        value = value.trim();
        styles[name.toLowerCase()] = value;
    }
    return styles;
};
var argument4 = null;
var argument5 = function (object, localizedDigit, i) {
 callbackArguments.push(arguments) 

    object[localizedDigit] = String(i);
    return object;
};
var argument6 = function (offset, op) {
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
var argument7 = "(*";
var base_0 = [1.7976931348623157e+308,460,969,714]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,460,969,714]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,460,969,714]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,460,969,714]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test965.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)