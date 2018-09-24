





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][2] = null
argument2['^N'] = ["X","{","+Iz+",242,"e","k^="]
return a*b/c*d
};
var argument2 = true;
var argument3 = "o";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['K'] = ":"
argument6['T'] = 1.639172213426366e+308
return a+b+c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = {"627":"","1.2833663678968694e+308":1.848729785302769e+306,"7.13724715691107e+307":893,"":122,"1.146659274293536e+308":8.536084603868081e+307}
return a+b-c+d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4] = 1.5970260174397424e+308
argument8['!j'] = {"0":"^`","4":460,"783":"","969":"","1.0119979867472689e+308":242}
return a+b*c-d
};
var base_0 = ["[","{",783,"j",100,618,"q"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["[","{",783,"j",100,618,"q"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["[","{",783,"j",100,618,"q"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["[","{",783,"j",100,618,"q"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument6)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test258.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)