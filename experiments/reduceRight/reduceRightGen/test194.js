





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = {"":49,"1.6103665787765955e+308":843}
argument3[6] = [823,-1,969,122,49,607]
return a*b-c*d
};
var argument2 = null;
var argument3 = {"3.882909720579613e+306":783,"3.0579297391417944e+307":"3","1.1465490919089324e+308":2.320353221901601e+307,"-1":6.57310064065413e+307,"5.454978898386515e+307":"","&c":3.7981134701791647e+307};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['!j'] = null
return a+b/c-d
};
var argument5 = {"":1.0555583009664232e+307,"1.6122823333188358e+308":"g","K":"","q":"","%":1.6032298315810952e+308,"Y":1.0682030165965163e+308,"1.1073410092684749e+308":1.2871558233328808e+308,"1.6975638337464941e+308":"","wIs":783};
var argument6 = r_0;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = ""
argument8['v'] = ["B;"]
return a-b/c-d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9['^N'] = [157]
return a/b*c-d
};
var argument9 = "";
var base_0 = [705,893,843,618]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,893,843,618]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,893,843,618]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,893,843,618]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test194.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)