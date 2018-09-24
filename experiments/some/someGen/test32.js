





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[3] = [403,242,126,460,82,25,25,595,893,100]
return a*b+c
};
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = ""
base_1 = null
return a-b*c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = ""
argument6[1.6798476101238045e+308] = 6.359386117756481e+307
return a*b-c
};
var argument6 = {"618":"","969":"iE","1.4574099475190624e+308":59,"9.472446949679674e+307":""};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[618] = true
base_3[7] = {"100":1.0187261457436787e+308,"403":5.714486227571787e+307,"705":"<N0","":122,"+":403,"r":1.6450802397680713e+308,"w":9.749840516947277e+307,"<":"","4.1287088569249626e+307":""}
return a/b/c
};
var argument8 = null;
var argument9 = r_1;
var base_0 = ["tj+?","o4","Q$x","Rp`$","ypQz","Zb","C","1q^","@SGWZ"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["tj+?","o4","Q$x","Rp`$","ypQz","Zb","C","1q^","@SGWZ"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["tj+?","o4","Q$x","Rp`$","ypQz","Zb","C","1q^","@SGWZ"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["tj+?","o4","Q$x","Rp`$","ypQz","Zb","C","1q^","@SGWZ"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someGen/test32.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)