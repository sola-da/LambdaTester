





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = false
return a+b-c+d
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][1.7976931348623157e+308] = false
argument5[122] = null
argument6['UU'] = [618,122]
return a*b/c*d
};
var argument5 = false;
var argument6 = {"122":714,"126":"","3.659766970473781e+307":1.5653993514610316e+308,"":"","1.122612002727768e+308":607,"1.7976931348623157e+308":"Mf","Fi{":783};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1][5] = true
return a/b-c-d
};
var argument8 = r_2;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = "!"
argument10[4] = ""
base_3 = -1
return a+b*c*d
};
var base_0 = ["n","AIj","9","RQ","A3s","gZ","P,Oq","_","n"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["n","AIj","9","RQ","A3s","gZ","P,Oq","_","n"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["n","AIj","9","RQ","A3s","gZ","P,Oq","_","n"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["n","AIj","9","RQ","A3s","gZ","P,Oq","_","n"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test943.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)