





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = true
base_0[1][5] = false
return a+b+c*d
};
var argument2 = [627,627,403,893,-1,893,1.7976931348623157e+308];
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = [";d{r9c[","CVe`","a",">","_K"]
return a*b/c+d
};
var argument5 = "";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[3] = ""
argument7[5] = 4.267593207996611e+305
argument8['8('] = [1.7976931348623157e+308,1.7976931348623157e+308,607,714,59,705,1.7976931348623157e+308,843,1.7976931348623157e+308,705]
return a*b+c-d
};
var argument7 = false;
var argument8 = null;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[0] = true
base_3[3] = "z"
argument10['{S'] = [627,"i",595,1.7976931348623157e+308,"t",-1,-100]
return a+b-c*d
};
var argument10 = false;
var base_0 = [618,"Z[","!",1.7976931348623157e+308,607,157,"p",627,0,"C"]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,"Z[","!",1.7976931348623157e+308,607,157,"p",627,0,"C"]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,"Z[","!",1.7976931348623157e+308,607,157,"p",627,0,"C"]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,"Z[","!",1.7976931348623157e+308,607,157,"p",627,0,"C"]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test793.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)