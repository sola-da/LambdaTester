





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = [655,213,783,59,100,460,627,460,783,59]
argument3[5] = 4.201120108090463e+306
return a-b*c+d
};
var argument2 = {"403":"8","618":8.916998022705502e+307,"f*s-g":"YwE","":""};
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['HMm'] = "w"
return a+b/c+d
};
var argument5 = {"627":"","U&":823,"Smy;":""};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = ["<",";"]
argument7[-1] = 9.48477766390043e+307
return a+b+c+d
};
var argument7 = 25;
var argument8 = 59;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][0] = null
return a/b+c+d
};
var base_0 = [100,893,783,1.7976931348623157e+308,242,893,893,595,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,893,783,1.7976931348623157e+308,242,893,893,595,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,893,783,1.7976931348623157e+308,242,893,893,595,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,893,783,1.7976931348623157e+308,242,893,893,595,0]
var r_3= undefined
try {
r_3 = base_3.reduce(argument9)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test625.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)