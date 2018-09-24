





var callbackArguments = [];
var argument1 = function (codec) {
 callbackArguments.push(arguments) 

    return 'video/mp4; codecs="' + codec + ', mp4a.40.2"';
};
var argument2 = false;
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return d.value;
};
var argument4 = r_1;
var argument5 = {"1.205367971338158e+307":"^","3.2189715807195713e+307":"","x":"4","":100,"1.5718259859830486e+308":"","K":"Vc1","P":1.1091887941940969e+308};
var argument6 = function (x) {
 callbackArguments.push(arguments) 

    return require(x);
};
var argument7 = function (child) {
 callbackArguments.push(arguments) 

    return child.gWin;
};
var base_0 = ["-,","@}"]
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
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-,","@}"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test396.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)