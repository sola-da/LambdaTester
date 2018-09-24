





var callbackArguments = [];
var argument1 = 5.89378315334066e+307;
var argument2 = true;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[8] = false
argument2[7.463432409233234e+307] = null
return a/b-c*d
};
var argument5 = null;
var argument6 = "";
var argument7 = r_1;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6 = [0,460,823,-1,893,969,893,969]
argument7[595] = 126
return a*b+c+d
};
var argument9 = r_2;
var argument10 = r_2;
var argument11 = null;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[403] = {"893":"","h":"o6B","6.962025041057582e+307":""}
argument11['*c'] = ""
base_2[9] = false
return a/b*c*d
};
var argument13 = {"157":8.073730668695544e+307,"c":9.025763467511772e+307,"1.7486982539076328e+308":"cV","1.2890291316506592e+308":1.7976931348623157e+308};
var argument14 = r_3;
var argument15 = {"100":4.349531742290095e+307,"655":705,"1.5128679152201422e+308":5.613568022382557e+307,"":""};
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[8] = 1.6400838152230544e+308
return a-b/c+d
};
var base_0 = ["8","#",0,627,157]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8","#",0,627,157]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8","#",0,627,157]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8","#",0,627,157]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test767.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)