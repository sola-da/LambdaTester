





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1] = 1.0693385784017164e+308
argument3['!j'] = {"126":"lJa"}
argument1[0] = 1.0182549110745019e+308
return a-b*c-d
};
var argument2 = [49,595,1.7976931348623157e+308,82,1.7976931348623157e+308,122,157,213,823];
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = 49
argument5['!j'] = {}
base_1[7] = null
return a+b-c/d
};
var argument4 = 5e-324;
var argument5 = {"100":"!","126":1.7976931348623157e+308,"":"r"};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][3] = {"T":100,"6.39088922184633e+307":"","L{>9S>":"Q","":""}
argument7[1] = 1.0837381674404868e+308
return a*b-c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = ""
base_3[6] = 1.0030078734962657e+308
return a+b-c/d
};
var argument8 = r_3;
var argument9 = r_0;
var base_0 = ["(",1.7976931348623157e+308,213,"Z|","Xz[-","EQ)O",-100,100,"JL"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(",1.7976931348623157e+308,213,"Z|","Xz[-","EQ)O",-100,100,"JL"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(",1.7976931348623157e+308,213,"Z|","Xz[-","EQ)O",-100,100,"JL"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(",1.7976931348623157e+308,213,"Z|","Xz[-","EQ)O",-100,100,"JL"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test153.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)