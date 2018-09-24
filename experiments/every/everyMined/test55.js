





var callbackArguments = [];
var argument1 = function (type) {
 callbackArguments.push(arguments) 

    return tokenTypes.indexOf(type) !== -1;
};
var argument2 = {"403":"T]","2.059382661419474e+307":1.6119240965337835e+308,"1.061257244064362e+308":"$=","":1.0762460216474176e+308};
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    if (j1.hasOwnProperty(key)) {
        if (typeof j2[key] != 'object') {
            return false;
        }
        if (combine(j1[key], j2[key]) == null) {
            return false;
        }
    } else {
        j1[key] = j2[key];
    }
    return true;
};
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x;
};
var argument5 = null;
var argument6 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var argument7 = false;
var argument8 = null;
var base_0 = [126,893,655,403,1.7976931348623157e+308,213,25,969]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,893,655,403,1.7976931348623157e+308,213,25,969]
var r_1= undefined
try {
r_1 = base_1.every(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,893,655,403,1.7976931348623157e+308,213,25,969]
var r_2= undefined
try {
r_2 = base_2.every(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,893,655,403,1.7976931348623157e+308,213,25,969]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyMined/test55.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)