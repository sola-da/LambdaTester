





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = true
return a*b/c-d
};
var argument2 = {"":"","<+":"Pn","7.332281769266508e+307":82};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[4] = null
return a+b*c*d
};
var argument4 = [25,122,403,893,49];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = [126,25,122,59]
base_2[4][3] = 242
return a/b/c+d
};
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[3.8120440085202614e+307] = "h"
base_3[1][2] = {"460":49,"705":1.4023345894785923e+308,"8.829052205508576e+307":"","1.6118919912636611e+308":1.3001893428552316e+308,"3.5782968535084766e+307":"","":"","}":"","6!_":1.0993135770001866e+307}
argument8[3.286160553564105e+307] = -100
return a+b+c/d
};
var argument8 = null;
var argument9 = false;
var base_0 = [122,"Nm;","[V",157,969,"-[J_W",893,157,607]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"Nm;","[V",157,969,"-[J_W",893,157,607]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"Nm;","[V",157,969,"-[J_W",893,157,607]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"Nm;","[V",157,969,"-[J_W",893,157,607]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test444.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)