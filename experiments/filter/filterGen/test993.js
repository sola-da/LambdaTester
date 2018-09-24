





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['h'] = null
argument2[460] = {"122":"m","126":""," X":783,"":1.4914113850468502e+308,"1.3751832283848962e+308":"J'N"}
return a+b*c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = {"82":"o","126":"D","655":">","":3.714175710722925e+307,"Hp":1.3916889112622687e+308,"d":"","P":"7f","7.987886285822128e+307":"T","7.578519840829266e+307":"Z"}
argument4 = false
argument5['K'] = {"25":"S","157":"","460":627,"%":"p","2.5351437289986335e+307":"V","1.7534615817332633e+308":157,"2.92146134475335e+307":1.6792131705308402e+308,"":"d0","5.914416467121701e+307":"t_","h":5.470629069136546e+307}
return a-b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = true
return a+b-c
};
var argument6 = {"122":3.4132791038281047e+307,"714":100,"969":"","":"","g3":"",",":1.1463589873598402e+308,"1.171692140852735e+308":59,"1.7976931348623157e+308":"t","1.4766995165167034e+308":843,"9]":""};
var argument7 = 1.5862309230055502e+308;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10['T'] = 9.600003386440024e+307
argument9[1] = "mJ*"
return a*b*c
};
var argument9 = [705,655,59];
var argument10 = false;
var base_0 = [-1,100,893,595,705,213,0]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,100,893,595,705,213,0]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.filter(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test993.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)