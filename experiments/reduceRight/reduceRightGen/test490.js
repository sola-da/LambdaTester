





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['{S'] = null
base_0[1][2] = [82,627,403,607,618,783]
argument2[82] = null
return a-b*c-d
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[6] = null
argument5[1.4250811791542279e+308] = 893
return a+b-c+d
};
var argument5 = {"25":"]","242":"#","1.208342197365377e+306":25,"":"","1.1181143377846944e+308":""};
var argument6 = false;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8['a'] = {}
argument8[627] = {"126":-100,"460":"","607":"!$#","d":"","":1.5228195706801124e+308,"6.464081853471135e+307":1.0767992226899571e+308}
argument8[4] = 655
return a/b*c+d
};
var argument8 = false;
var argument9 = 5.715658755076172e+307;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[627] = {"122":"","705":"","893":"","":"C@"}
return a*b*c+d
};
var base_0 = [618,460,823,627,618,157,-100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,460,823,627,618,157,-100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,460,823,627,618,157,-100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,460,823,627,618,157,-100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test490.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)