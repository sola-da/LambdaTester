





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = {"242":"","595":1.6468190290280654e+308,">":"","1.7076871223838988e+308":"","":"Z","1.432103192225979e+308":893,"mk!,3*^<<":8.632384338759214e+307,"Z":"P"}
argument3[126] = false
argument2[1.4250811791542279e+308] = null
return a-b/c*d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8] = "n+"
base_1 = 59
argument3[1] = [460,157,242,82,-1,460,242,-100,714,0]
return a+b+c*d
};
var argument3 = false;
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['a'] = ["p","#","$","K","3d","E","Q"]
base_2[6][2] = null
argument7[6] = null
return a*b+c/d
};
var argument6 = true;
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['!j'] = [126,403,-100,607]
argument10 = ["1","9","P","oQXI?,<","E",",e","X"]
return a*b-c+d
};
var argument9 = r_2;
var argument10 = 1.6356225206526892e+308;
var base_0 = [-1,403,618]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,403,618]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test592.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)