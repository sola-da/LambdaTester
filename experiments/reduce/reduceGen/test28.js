





var callbackArguments = [];
var argument1 = "v_";
var argument2 = [25,0,1.7976931348623157e+308,157,843,607,-1,843];
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = true
return a/b/c*d
};
var argument5 = "";
var argument6 = "";
var argument7 = 627;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[6] = [460,893,122,893,969]
argument5[4] = 607
base_1[1] = ["?","o4","Q$x","Rp`$"]
return a*b-c/d
};
var argument9 = r_1;
var argument10 = r_2;
var argument11 = "";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = null
argument10[1.1277822633002616e+308] = [100,403,969,25,157,969,627,714]
argument10 = null
return a*b/c/d
};
var argument13 = r_1;
var argument14 = r_2;
var argument15 = {"893":1.084733238720132e+308,"1.2741711974579375e+308":-1,"1.7488080830457287e+308":242,"=5KF=)'lK":4.08232194559938e+307,"1.2586831571396713e+308":242};
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[4] = null
return a-b*c/d
};
var base_0 = ["5C","USe%z4`j","!","Ec","|$ite","R"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5C","USe%z4`j","!","Ec","|$ite","R"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5C","USe%z4`j","!","Ec","|$ite","R"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5C","USe%z4`j","!","Ec","|$ite","R"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test28.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)