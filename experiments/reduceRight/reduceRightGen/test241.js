





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[-1] = 5e-324
argument3[3] = true
argument3[0] = "L"
return a/b/c-d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = ""
argument4[0] = ["Y1U",59,"{G","0YX)_eh",1.7976931348623157e+308,1.7976931348623157e+308,714,100]
base_1[4] = {"460":"","893":"d","O":1.8230784370745612e+307,"1.7976931348623157e+308":783,"-100":6.371255006035152e+307,"S":"?%4","6.194240178604896e+307":"@","!":"m","1.3513805712067677e+308":"k","":""}
return a/b/c-d
};
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[1] = {"618":627,"5.89108144032328e+307":9.944401257500538e+307,"1.6547594471678378e+307":1.5827368504132364e+308,"l":1.5183041294501341e+308}
return a+b/c/d
};
var argument4 = true;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7 = {"49":82,"122":82,"126":"j","":1.2915545784547353e+307,"1.7976931348623157e+308":1.2525162599442603e+308,"1.9953529280141832e+307":5.130528488439476e+307,"?b":242,"1.0386384458810992e+308":4.483540731018432e+307,"1.0898618878148208e+308":""}
return a-b/c+d
};
var argument6 = null;
var base_0 = [100,"<","T^","_bko",100,"0=1 ",893,783,"vb",82]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"<","T^","_bko",100,"0=1 ",893,783,"vb",82]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"<","T^","_bko",100,"0=1 ",893,783,"vb",82]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,"<","T^","_bko",100,"0=1 ",893,783,"vb",82]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument5,argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test241.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)