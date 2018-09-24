





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = 403
base_0[7] = [607,823,714,655,714,-100,783,705]
argument2[1.1207829086460726e+308] = null
return a/b/c-d
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4][1.7976931348623157e+308] = [49,714,823]
base_1[2] = 6.78640054322833e+307
return a+b*c/d
};
var argument5 = true;
var argument6 = r_1;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][1.7976931348623157e+308] = null
argument8[9.624051682326797e+306] = {"122":"vxp]","157":"tY","969":403,"":1.0094985092356157e+308,"-":""}
base_2[0][3] = null
return a+b/c-d
};
var argument8 = {"1.888470460018901e+307":""};
var argument9 = true;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['K'] = [242,122,1.7976931348623157e+308,823,-100,-1,157,25,242]
argument12['8('] = 460
return a*b/c-d
};
var argument11 = null;
var argument12 = null;
var base_0 = [783,59,-100,213,403,595]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,59,-100,213,403,595]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,59,-100,213,403,595]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,59,-100,213,403,595]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test860.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)