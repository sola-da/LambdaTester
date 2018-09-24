





var callbackArguments = [];
var argument1 = function (i, el) {
 callbackArguments.push(arguments) 

    return filter.call(children(el.parentNode), function (child) {
        return child !== el;
    });
};
var argument2 = 1.4844461108507589e+308;
var argument3 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument4 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument5 = null;
var argument6 = null;
var argument7 = function (p) {
 callbackArguments.push(arguments) 

    return p.trim();
};
var base_0 = ["D:dH)",59,"05","n7zM41l6",122]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["D:dH)",59,"05","n7zM41l6",122]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["D:dH)",59,"05","n7zM41l6",122]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["D:dH)",59,"05","n7zM41l6",122]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test163.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)