





var callbackArguments = [];
var argument1 = function (token) {
 callbackArguments.push(arguments) 

    return token.color;
};
var argument2 = [607,460,"mF",0,82,5e-324,655,607,"El$a"];
var argument3 = null;
var argument4 = function (nick) {
 callbackArguments.push(arguments) 

    return server.normalizeName(nick) === userNick;
};
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    return typeof t === 'object';
};
var argument6 = function (route) {
 callbackArguments.push(arguments) 

    return route.props.name === routeName;
};
var argument7 = 1.6035141405577716e+307;
var argument8 = ["LNd8g>l","G","v","y][","U","q","q","g?"];
var base_0 = ["r:S","9","Y","8","=","q"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["r:S","9","Y","8","=","q"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["r:S","9","Y","8","=","q"]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["r:S","9","Y","8","=","q"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test795.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)