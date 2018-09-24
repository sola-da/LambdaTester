





var callbackArguments = [];
var argument1 = [213,1.7976931348623157e+308,157,627,403];
var argument2 = null;
var argument3 = [655,25,705,714,705,25];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = ["=","Z-","y(","5JI","?"]
return a-b-c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1] = ""
return a*b*c/d
};
var argument6 = r_0;
var argument7 = 1.6496668719632023e+308;
var argument8 = r_0;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[7.463432409233234e+307] = false
argument7[1] = {"618":"ua","-1":8.521378572890829e+307,"8.060128759689925e+307":""}
base_2[1][0] = false
return a+b+c+d
};
var argument10 = null;
var argument11 = r_0;
var argument12 = r_1;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[4] = "*"
argument11[1] = [607,-1,607]
return a-b-c+d
};
var base_0 = ["LV","32","R","n)M"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["LV","32","R","n)M"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["LV","32","R","n)M"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["LV","32","R","n)M"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test94.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)