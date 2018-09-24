





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    return (isFunc ? method : value[method]).apply(value, args);
};
var argument2 = function (el, i) {
 callbackArguments.push(arguments) 

    return el.nTable;
};
var argument3 = null;
var argument4 = "J";
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    return t = (t || 0).toString(16), 1 === t.length ? '0' + t : t;
};
var argument6 = "";
var argument7 = function (c) {
 callbackArguments.push(arguments) 

    return c.name;
};
var base_0 = [242,705,1.7976931348623157e+308,1.7976931348623157e+308,618,122,49,403,618]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,705,1.7976931348623157e+308,1.7976931348623157e+308,618,122,49,403,618]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,705,1.7976931348623157e+308,1.7976931348623157e+308,618,122,49,403,618]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test735.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)