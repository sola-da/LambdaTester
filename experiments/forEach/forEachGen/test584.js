





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = {"25":5.468232662721007e+307,"403":"","607":157,"823":59,"843":607,"1.322331568831129e+307":893,"e":"","":"0","8.837886994219072e+307":"eEq0"}
return a*b/c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[8.748669805137695e+307] = null
base_1[3][1.3434821406183095e+308] = 1.424334335876338e+307
return a-b/c
};
var argument3 = r_0;
var argument4 = r_0;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = null
argument5[7.92397107964922e+307] = true
return a+b+c
};
var argument6 = true;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[4][6] = ",F"
base_3[2] = null
return a-b/c
};
var base_0 = ["-","S","#","Ob","t","*8Xg","1","6"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["-","S","#","Ob","t","*8Xg","1","6"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["-","S","#","Ob","t","*8Xg","1","6"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["-","S","#","Ob","t","*8Xg","1","6"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test584.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)