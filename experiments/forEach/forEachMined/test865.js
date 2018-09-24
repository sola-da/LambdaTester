





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    maxValue = Math.max(parseFloat(value) || 0, maxValue);
};
var argument2 = function (obj) {
 callbackArguments.push(arguments) 

    if (obj) {
        for (var key in obj) {
            result[key] = obj[key];
        }
    }
};
var argument3 = ["]","dh"];
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    newAttr.push(attr[d]);
};
var argument5 = false;
var argument6 = r_2;
var argument7 = function (id) {
 callbackArguments.push(arguments) 

    __data_xs[id] = xs[id];
};
var base_0 = ["od","WH0,^Yj",122,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["od","WH0,^Yj",122,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["od","WH0,^Yj",122,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["od","WH0,^Yj",122,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test865.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)