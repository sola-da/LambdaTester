





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    return [];
};
var argument2 = null;
var argument3 = function (v) {
 callbackArguments.push(arguments) 

    if (!v.sentence) {
        v.sentence = v.name + ' is related to ' + result.name;
    }
    return v;
};
var argument4 = function (error, results) {
 callbackArguments.push(arguments) 

    if (error)
        return callback(error);
    callback(null, invoices);
};
var argument5 = r_1;
var argument6 = null;
var argument7 = function (prefix) {
 callbackArguments.push(arguments) 

    return prefix + 'Title';
};
var argument8 = {"969":"","":843,"4.022811125544743e+307":"","1.6397810958139083e+308":"]","f":1.3727712169451555e+308};
var base_0 = [655,893,122]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,893,122]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test957.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)