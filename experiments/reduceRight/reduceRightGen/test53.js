





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6] = ["h","1","%","ugtc",59,893]
argument3[4] = true
base_0[4][3] = null
return a*b+c/d
};
var argument2 = true;
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = ""
argument5['w'] = {"1.7976931348623157e+308":""}
base_1[6] = null
return a+b/c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = ""
argument7['!j'] = {"5e-324":403,":":655,"1.3294025336148796e+307":1.2871998637161e+308,"":82,"9.663381272685532e+306":893,"W":""}
return a/b-c/d
};
var argument6 = null;
var argument7 = 705;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6][2] = true
argument9 = true
return a*b/c-d
};
var base_0 = [403,"]IK",126,893,655,-1,157,0,25,"WeYA%"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,"]IK",126,893,655,-1,157,0,25,"WeYA%"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,"]IK",126,893,655,-1,157,0,25,"WeYA%"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,"]IK",126,893,655,-1,157,0,25,"WeYA%"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test53.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)