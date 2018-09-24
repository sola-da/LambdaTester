





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a/b-c/d
};
var argument2 = 618;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[627] = {"49":"F","714":"","8.67486099559871e+307":"g","":"0sdwj","2L+":893}
argument5[0] = 3.9923062444606275e+307
return a+b-c-d
};
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][3] = {"460":"#&^$"}
argument7[3.8120440085202614e+307] = {"157":714,"403":"","714":"R","t":"&a","7.945827834092571e+307":25,"1.0800205013844286e+308":7.895922550167972e+307,"_u":9.671743891004533e+307,"":8.606096452989873e+307,"O":"A","*0y":4.303410590612903e+307}
base_2['length'] = [823,59,403,242,893,969,213]
return a/b/c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['w'] = {"100":705,"126":"a3q","Y":"",":":""}
return a-b+c*d
};
var argument8 = true;
var argument9 = "";
var base_0 = [0,"ECr","s"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,"ECr","s"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,"ECr","s"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,"ECr","s"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test471.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)