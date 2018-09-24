





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = null
return a/b-c/d
};
var argument2 = {"655":"","823":"^","969":"l","3.331583795734248e+307":"'m","":122,"^p":""};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[7] = false
base_1[6][2] = "H"
return a-b*c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][2] = {"49":"","82":1.092176010664621e+308,"1.120383699087188e+308":1.1354877926060834e+308,"":""}
argument6['T'] = {"595":627,"":"{2","jn":-1,"9.430406622897218e+307":"","1.7976931348623157e+308":"","-100":"$"}
argument7['UU'] = {"t":1.0430709888553534e+308,"d":"4$","":"C","%":627}
return a*b-c+d
};
var argument6 = true;
var argument7 = 627;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = false
return a/b*c+d
};
var argument9 = r_1;
var argument10 = [607,893,595,893,607,-100,49];
var base_0 = [82,122,714,5e-324,157,714]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,122,714,5e-324,157,714]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,122,714,5e-324,157,714]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,122,714,5e-324,157,714]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test917.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)