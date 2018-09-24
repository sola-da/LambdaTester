





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['T'] = ["F","T","D","Yp","hl3"]
base_0[6][2] = ""
argument3[6] = ["7","(^@","J","U]","i"]
return a+b*c+d
};
var argument2 = "";
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['T'] = 213
return a-b/c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[705] = {"627":"G","783":"x","Bq`E":"1sB","`":"","-100":157,"1.7976931348623157e+308":"VrbV","":1.4838055815690381e+308,"T":""}
base_2[2] = false
return a/b/c-d
};
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][2] = false
argument9['!j'] = {"893":"","g3P":3.352095584702617e+307,"5.031665293636634e+307":"d^","n":"","":""}
return a-b*c/d
};
var argument8 = false;
var base_0 = [157,705,893,969,969,157,705,403]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,705,893,969,969,157,705,403]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,705,893,969,969,157,705,403]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,705,893,969,969,157,705,403]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test777.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)