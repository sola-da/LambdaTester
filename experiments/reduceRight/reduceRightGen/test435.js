





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0 = null
argument3['!j'] = null
argument2[4] = 5.197783869452671e+307
return a*b+c*d
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3.8120440085202614e+307] = ["JHW","b","Kr","|=","7","a","-"]
return a-b/c/d
};
var argument5 = true;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6] = {"3":242,"627":1.430210723825207e+307,"":"","1.7005920468361932e+308":"LK","j":"","4.741612959078663e+307":1.1827490542793048e+306,"-1":2.5592831561482645e+307,";":1.6088310332528071e+308}
argument9['UU'] = 1.4078978196353931e+308
return a*b-c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = ""
base_3[4][1.7976931348623157e+308] = [460,0]
return a/b+c+d
};
var argument9 = true;
var base_0 = [607,213,969,607,-100,618,714,100]
var r_0= undefined
try {
r_0 = base_0.reduceRight(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,213,969,607,-100,618,714,100]
var r_1= undefined
try {
r_1 = base_1.reduceRight(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,213,969,607,-100,618,714,100]
var r_2= undefined
try {
r_2 = base_2.reduceRight(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,213,969,607,-100,618,714,100]
var r_3= undefined
try {
r_3 = base_3.reduceRight(argument8,argument9)
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
require("fs").writeFileSync("./experiments/reduceRight/reduceRightGen/test435.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)