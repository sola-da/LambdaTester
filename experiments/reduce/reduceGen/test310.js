





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[8] = [618,49,403]
argument1['s'] = 1.4345531836749926e+306
argument2 = {}
return a-b/c-d
};
var argument2 = false;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[9] = ["d","f:+",49,"-+",705,"z","J6","*T",100,627]
return a/b-c*d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = {"49":1.3199518492658684e+308,"":6.416284580353275e+307,"V":403,"1.5822670313326497e+308":"","5.27190265530521e+307":1.1300201946896594e+308,"Xc":"qL","q":1.6896214026396087e+308,"1.1263332910886178e+308":1.2975605381860708e+308}
return a*b+c*d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[627] = true
argument6[4] = "c`"
base_3[0] = "c"
return a/b*c-d
};
var argument7 = null;
var argument8 = "";
var base_0 = ["VZ","w","iRt","A"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["VZ","w","iRt","A"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["VZ","w","iRt","A"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["VZ","w","iRt","A"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test310.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)