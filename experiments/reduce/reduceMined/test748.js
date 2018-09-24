





var callbackArguments = [];
var argument1 = function (offset, op) {
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
var argument2 = null;
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
var argument5 = function (count, p) {
 callbackArguments.push(arguments) 

    if (p.name && !p.value) {
        return count + 1;
    } else {
        return count;
    }
};
var argument6 = {"82":1.6676953628332133e+308,"100":1.2204409718012848e+308,"126":"@4X","157":157,"607":"","969":1.6523855654197865e+308,"":1.3491157320744734e+308,"q0":"","6.823935105045055e+307":"","1.672786168326013e+308":""};
var argument7 = function (obj, style) {
 callbackArguments.push(arguments) 

    style = style.split(':').map(function (a) {
        return a.trim();
    });
    obj[style[0]] = style[1];
    return obj;
};
var base_0 = ["hN","M","Q:","w",">","DU$","9"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["hN","M","Q:","w",">","DU$","9"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["hN","M","Q:","w",">","DU$","9"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test748.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)