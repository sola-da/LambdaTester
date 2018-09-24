





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = ["$z%",157,"l"]
argument1[126] = null
return a+b+c*d
};
var argument2 = r_0;
var argument3 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[2][0] = null
argument4[7] = true
argument4[4] = "q"
return a-b-c/d
};
var argument4 = r_0;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.1277822633002616e+308] = false
argument6[0] = {"783":"","969":"wIs","9.982390875822036e+307":1.0761710453918136e+308,"1.2908849489421809e+308":"(q]:","":1.5058260358523284e+308,"A":"_","d":1.637706200518792e+307,"wO^t&":"","$":"-"}
return a/b+c+d
};
var argument6 = r_0;
var argument7 = 59;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1][3] = true
argument8[1] = true
return a+b/c+d
};
var base_0 = ["rg",82,"pm","L3","Y"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["rg",82,"pm","L3","Y"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["rg",82,"pm","L3","Y"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["rg",82,"pm","L3","Y"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test168.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)