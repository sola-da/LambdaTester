





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return '.' + c;
};
var argument2 = null;
var argument3 = function (dir) {
 callbackArguments.push(arguments) 

    return async.glob(head + dir + '/' + tail.slice(1).join('/'));
};
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
};
var argument5 = true;
var argument6 = null;
var argument7 = function (element) {
 callbackArguments.push(arguments) 

    return fn.apply(session, [element].concat(args));
};
var argument8 = 8.058956745813741e+307;
var base_0 = [122,59]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,59]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,59]
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
require("fs").writeFileSync("./experiments/map/mapMined/test253.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)