





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[2] = [969]
base_0[2][2] = ["?Z","q","Hs","q","6n","mKy","V","f9k","A"]
return a/b-c+d
};
var argument2 = {"82":"FsX","100":4.1567169018634616e+307,"st":"","1.6005150876841966e+308":"","":2.3254772693344246e+307};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = ""
argument5['T'] = null
argument4[4] = {"":"","{":82}
return a*b/c-d
};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['L'] = ["(1","v","s]","K>u<","{=","810k","Nb ","}","en^k"]
return a+b-c*d
};
var argument5 = false;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = null
base_3[3] = ["Z","#Q","R","OB","dk"]
argument7['y'] = ""
return a/b*c-d
};
var argument7 = 9.946313218235002e+306;
var argument8 = true;
var base_0 = ["m","Tt","C","]","@"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["m","Tt","C","]","@"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["m","Tt","C","]","@"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m","Tt","C","]","@"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test513.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)