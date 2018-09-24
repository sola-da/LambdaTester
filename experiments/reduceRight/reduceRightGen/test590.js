





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[1] = {"403":""}
return a-b-c+d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = true
argument4['!j'] = ""
return a-b+c/d
};
var argument3 = r_0;
var argument4 = {"460":"3","893":"","9.468995870635517e+307":4.0775625693592124e+307,"":460,"1.1127275548672738e+308":"","1.4038574272581293e+308":"{?","1.6985776436546204e+308":1.7171080990354271e+308,"-1":9.402158114821615e+307,"nc":"8S","@U":"f)"};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][3] = ""
return a+b/c/d
};
var argument6 = r_2;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[0] = null
argument8['K'] = null
base_3[2] = [705,"n^6",122,"wT",100,"$"]
return a-b*c/d
};
var argument8 = r_0;
var argument9 = null;
var base_0 = ["F","z;","gu","=","&",",","uq","^"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["F","z;","gu","=","&",",","uq","^"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["F","z;","gu","=","&",",","uq","^"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["F","z;","gu","=","&",",","uq","^"]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test590.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)