





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = false
argument3[126] = {"":823,"1.4854857195360068e+308":"LR4","|":"&"}
return a+b*c/d
};
var argument2 = ["LNI","g","{u`","<"];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1.4250811791542279e+308] = null
argument5[655] = true
argument4[705] = ""
return a/b-c-d
};
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[-1] = [100,618,122]
return a*b+c*d
};
var argument6 = {"607":"v","783":"","":"mxb","H":1.4310030547341827e+308,"1.6197351119859567e+308":655,"k":126,"Y":"y","1.3925965250534969e+308":6.527882526183834e+307,"1.3464426214055294e+308":"I3","1.624673684002516e+308":1.7976931348623157e+308};
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[82] = {"0":"","126":"","403":"","655":"k","3.937652346128315e+307":"mP","8s":1.6215612281371204e+308,"D'%&1v+":"","k[=NQ":213,"":8.043737375166273e+307}
argument9['T'] = [705,607,783,627,460,595,618,49]
argument9['{S'] = {"100":893,"705":1.940135868419281e+307,"714":1.0919693700164461e+308,"":627,"1.485613478441282e+308":"","sB":";G","8.218984797551765e+307":""}
return a/b/c*d
};
var base_0 = [122,0,-100,655]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,0,-100,655]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,0,-100,655]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,0,-100,655]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test718.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)