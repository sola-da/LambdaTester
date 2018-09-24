





var callbackArguments = [];
var argument1 = function (d, i) {
 callbackArguments.push(arguments) 

    return d.color || color(d, i);
};
var argument2 = null;
var argument3 = 7.329927117466958e+307;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    return x * OIMO.INV_SCALE;
};
var argument5 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument6 = r_1;
var argument7 = function (pb) {
 callbackArguments.push(arguments) 

    pb.causesPostBack = true;
    return pb;
};
var base_0 = ["JJ",1.7976931348623157e+308,"-","7",122,"I","{jB","l1F"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["JJ",1.7976931348623157e+308,"-","7",122,"I","{jB","l1F"]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["JJ",1.7976931348623157e+308,"-","7",122,"I","{jB","l1F"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
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
require("fs").writeFileSync("./experiments/map/mapMined/test349.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)