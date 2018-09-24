





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = [893,403,122,618,157,595]
base_0[7] = 1.615639752797504e+308
base_0[4] = {"0":1.2773299489021653e+308,"242":714,",":"",";":157,"6.215426360305271e+307":"","lm2":655,"":"mG!2$","1.4034744228995816e+308":"","5.262931091360336e+307":1.7976931348623157e+308}
return a+b*c+d
};
var argument2 = 969;
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = {"100":157,"e^":460,"":49,"M":1.7048953189970677e+308,"p":"DTnS","AJXi":213}
argument5[0] = 1.7976931348623157e+308
return a/b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2 = {"0":126,"655":"","[1s":"","2.282823775846141e+307":""}
return a-b/c+d
};
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3 = [213]
base_3 = [157,460,783,1.7976931348623157e+308,607,595,49,126,242]
return a+b*c+d
};
var base_0 = ["|t^",595,0,"0","w@","cnQ",100,"`",59,705]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|t^",595,0,"0","w@","cnQ",100,"`",59,705]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|t^",595,0,"0","w@","cnQ",100,"`",59,705]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|t^",595,0,"0","w@","cnQ",100,"`",59,705]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test47.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)