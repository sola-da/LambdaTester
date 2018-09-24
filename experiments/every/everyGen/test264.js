





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[403] = false
argument2[0] = null
base_0[0][6] = ["{","+Iz+",242,"e","k^=",627,"2","]{1&[:Z",783]
return a-b-c
};
var argument2 = null;
var argument3 = 823;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = {}
argument5[3.3156198695370476e+307] = {"122":1.146659274293536e+308,"242":"4","843":"@","1.1017614908693999e+308":"","2.5137468713571327e+307":"","8.536084603868081e+307":627,"":1.0119979867472689e+308,"1.6317828096012598e+308":"","B^`":969}
argument5[403] = 618
return a/b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = ["L$|","g","#","0nyD<!","-V","8","Q%","U","r9<"]
base_2[1][2] = -100
base_2[1][4] = 8.530878988023918e+307
return a+b*c
};
var argument6 = false;
var argument7 = [157,1.7976931348623157e+308,157,0,783,122,-100,157];
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
return a+b/c
};
var base_0 = ["q","t"]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["q","t"]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["q","t"]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["q","t"]
var r_3= undefined
try {
r_3 = base_3.every(argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test264.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)