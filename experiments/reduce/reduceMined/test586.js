





var callbackArguments = [];
var argument1 = function (obj, pair) {
 callbackArguments.push(arguments) 

    var i = pair.indexOf('='), key = pair.slice(0, i), val = pair.slice(++i);
    obj[key] = decodeURIComponent(val);
    return obj;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return { sighting: 0 };
};
var argument3 = 82;
var argument4 = null;
var argument5 = function (o, model) {
 callbackArguments.push(arguments) 

    if (!o[model])
        o[model] = 0;
    o[model]++;
    return o;
};
var argument6 = function (prev, current, i, arr) {
 callbackArguments.push(arguments) 

    return doMerge(prev, current, true).tree;
};
var argument7 = "";
var argument8 = r_1;
var base_0 = ["Q-","#)H`"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Q-","#)H`"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Q-","#)H`"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Q-","#)H`"]
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test586.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)