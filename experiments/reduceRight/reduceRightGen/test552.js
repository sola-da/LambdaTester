





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[5] = "NG"
base_0[4][1.7976931348623157e+308] = [783,122,783,100,49,157,-100,893,627]
return a+b*c*d
};
var argument2 = 1.4889242651920992e+308;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['8('] = [-100,59,618,655,595,-100,460,122,607]
argument4[1.1207829086460726e+308] = null
return a/b+c*d
};
var argument4 = r_1;
var argument5 = true;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['a'] = {"0":"","59":9.386617715334668e+307,"122":5.364347083515231e+307,"403":"w","607":893,"1.2522049905868947e+308":",","2.355849119081227e+307":3.0243373772504373e+307,"9<XEj2":"","p":6.073982398704126e+307}
argument8[6] = null
base_2[1][2] = ""
return a+b+c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[4] = null
base_3[2][2.819898637310108e+307] = "m"
return a-b/c+d
};
var argument8 = null;
var argument9 = r_1;
var base_0 = [100,705,157,-100,82,126]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,705,157,-100,82,126]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,705,157,-100,82,126]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,705,157,-100,82,126]
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test552.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)