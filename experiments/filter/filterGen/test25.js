





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"627":"","969":1.2497306840197869e+308,"|hML":126,"z":82,"rKA=":82,"1.4571851921988673e+308":25,"1.0432927967811147e+308":6.393164411584145e+307,"5.592556221293803e+307":"","-1":"cG'"}
return a*b+c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = {}
base_1[1][2] = "uN"
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[6] = null
return a*b-c
};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = true
return a-b*c
};
var argument7 = null;
var base_0 = [126,242,655]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,242,655]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test25.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)