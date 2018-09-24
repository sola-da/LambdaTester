





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4.224481734419934e+307] = [783,-1,-1,969,59,0,783,59]
argument2 = "W'"
argument2 = [655,82,82,213]
return a/b-c
};
var argument2 = null;
var argument3 = [627,627,607,627,595,122,-100];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['A'] = 893
return a/b-c
};
var argument5 = 1.227671793787852e+308;
var argument6 = 5.605891245670044e+307;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3][0] = {"126":"","1.76455824005186e+308":969,"1.6788049628441531e+308":3.600774611621207e+307,"0 ":"","8.990881002069011e+307":4.551635105147872e+307,"":3.7809484213745324e+306,"E&VU":"5t","M-":843,"1|":"SI"}
argument9[1.4034744228995816e+308] = null
argument8['wIs'] = null
return a+b-c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[3] = null
base_3[3][1.3434821406183095e+308] = ["tQ:","w",">","DU$","9","o","e:","$","X"]
argument9[4] = {"82":1.6676953628332133e+308,"100":1.2204409718012848e+308,"126":"@4X","969":1.6523855654197865e+308,"4.710434379126567e+307":714,"":"A<3","q0":"","6.823935105045055e+307":""}
return a/b-c
};
var argument9 = r_1;
var argument10 = {"49":"","82":843,"157":157,"1.672786168326013e+308":"","6N`Ird":"","":"r","-100":714,"8.330332393470125e+307":4.871543131720263e+307};
var base_0 = [460,607,403,403]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,607,403,403]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,607,403,403]
var r_2= undefined
try {
r_2 = base_2.filter(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,607,403,403]
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
require("fs").writeFileSync("./experiments/filter/filterGen/test316.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)