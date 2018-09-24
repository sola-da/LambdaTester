





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = "-"
return a/b/c*d
};
var argument2 = null;
var argument3 = 8.232668324540544e+307;
var argument4 = 1.414920304959818e+308;
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = {"893":"JN","":6.528474566582756e+307}
return a*b/c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = {"783":"","1.7876495787331064e+307":"","i'":"","+hzSj":-100,"|":122,"2.5350593773444405e+307":9.316543297065427e+307,"pM":1.005102947000259e+307,"1.098635400235862e+308":"5","1.1706688857958813e+308":"*"}
argument8[4] = ""
return a+b+c*d
};
var argument8 = ["e","Q","-","h"];
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11 = 7.897401937546955e+306
return a+b+c/d
};
var argument10 = r_2;
var argument11 = null;
var base_0 = ["v+_f1P","3P",";","C!f","gu","Zu9k","2","{","$"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v+_f1P","3P",";","C!f","gu","Zu9k","2","{","$"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v+_f1P","3P",";","C!f","gu","Zu9k","2","{","$"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v+_f1P","3P",";","C!f","gu","Zu9k","2","{","$"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test90.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)