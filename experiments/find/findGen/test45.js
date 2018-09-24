





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627] = {"4":"","126":"@","893":618,"":"q6","5.27992102485277e+307":49,")":""}
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = ["Z","STc","i","u",":",403,")","H","e-"]
argument3[627] = {"":714,"T8x":"^0"}
return a*b-c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = null
argument5[460] = ""
argument4[0] = {"403":":","n]IK":"N","":"?A","5}":"","2qk":"Pk","1.0698000328301044e+308":607,"1.052407396634865e+307":1.7976931348623157e+308,"zo":893,"1.0748804363611205e+308":5e-324}
return a/b*c
};
var argument4 = 1.6786594825588226e+308;
var argument5 = 9.074649257512437e+307;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = ["b<","n!","<","+0","[","M","O"]
return a*b*c
};
var base_0 = ["V","t","W","J$"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V","t","W","J$"]
var r_1= undefined
try {
r_1 = base_1.find(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V","t","W","J$"]
var r_2= undefined
try {
r_2 = base_2.find(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V","t","W","J$"]
var r_3= undefined
try {
r_3 = base_3.find(argument6)
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
require("fs").writeFileSync("./experiments/find/findGen/test45.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)