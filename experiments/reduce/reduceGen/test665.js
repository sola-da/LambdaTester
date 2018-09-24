





var callbackArguments = [];
var argument1 = "KW=X;";
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[-1] = ""
argument2[627] = true
return a/b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = false
argument5[0] = 1.678496104596967e+308
return a/b+c/d
};
var argument6 = false;
var argument7 = false;
var argument8 = 2.6980968915444128e+306;
var argument9 = r_2;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9] = 783
argument8[2] = false
return a+b+c+d
};
var argument11 = {"1.5958086112999784e+308":213,"xlf":"1","":"","-1":"","8.400328172921932e+307":843,"8.016128266644119e+307":59};
var argument12 = false;
var argument13 = {"82":1.451622997721012e+308,"460":1.7908257181041627e+308,"893":"","+M":"BbAZ","8.944573481019553e+307":"","":7.324514196685832e+306,"5.423409683565338e+307":9.642138197832212e+307,"4.063733509469816e+307":5.965740636985201e+307,"d>":893,"-['":705};
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13['18{'] = false
argument13[6.35085648319999e+307] = 2.0413766775485058e+307
return a+b/c/d
};
var base_0 = [242,627,59,714,783,59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,627,59,714,783,59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,627,59,714,783,59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,627,59,714,783,59]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test665.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)