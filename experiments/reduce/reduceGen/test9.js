





var callbackArguments = [];
var argument1 = r_0;
var argument2 = 627;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = "o[JtK"
argument3 = ["L","O_"]
return a+b+c/d
};
var argument5 = null;
var argument6 = r_0;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = {"126":1.5767673710574408e+307,"242":"","403":"e_","618":"A","714":"","":823,"1.5535970379771984e+307":"","n":"o%","1.0745167948887026e+308":"F,"}
base_1['length'] = ""
return a*b-c*d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = true
base_2[5] = [-1,714]
return a*b*c/d
};
var argument10 = null;
var argument11 = r_0;
var argument12 = [460,893,100,460,-100,460,705,0,627,242];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[8] = 82
base_3[6] = ["$t","T@",655,"Jgr",618,"1","G2i[%"]
base_3[3] = ""
return a*b-c+d
};
var base_0 = [0,893,100,403,893]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,893,100,403,893]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,893,100,403,893]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,893,100,403,893]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test9.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)