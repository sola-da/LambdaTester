





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    item['title'] = item['name'];
    return item;
};
var argument2 = true;
var argument3 = null;
var argument4 = function (li, num) {
 callbackArguments.push(arguments) 

    return num !== index ? num : null;
};
var argument5 = "q";
var argument6 = {"403":1.545499818989827e+308,"627":"N","843":607,"893":122,"1.1263332910886178e+308":1.2975605381860708e+308,"":1.7976931348623157e+308,"6.752001666510189e+307":403,"-1":403,"p] ":6.090480675172689e+306};
var argument7 = function (node) {
 callbackArguments.push(arguments) 

    return node.addr;
};
var argument8 = true;
var argument9 = null;
var argument10 = function (zone) {
 callbackArguments.push(arguments) 

    return _.extend(zone.$, { name: zone._ });
};
var base_0 = [969,823,122,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,823,122,403]
var r_3= undefined
try {
r_3 = base_3.map(argument10)
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
require("fs").writeFileSync("./experiments/map/mapMined/test898.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)