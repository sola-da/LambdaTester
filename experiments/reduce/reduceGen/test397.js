





var callbackArguments = [];
var argument1 = true;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['18{'] = {"618":"*","4.1046113847093396e+307":"m","4.062241594629762e+307":"B","1.196115668164247e+308":"Z","o2":8.227400638359417e+307,"":"","`":""}
argument2 = 242
argument3[627] = null
return a-b/c*d
};
var argument5 = null;
var argument6 = null;
var argument7 = 403;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.1869172855352885e+307] = 9.89800831063553e+307
return a/b-c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['*c'] = null
base_2[1] = "-@6"
argument11[4] = 1.1710722095505548e+308
return a*b+c*d
};
var argument10 = 2.7644478900020736e+307;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = "?4a"
argument11[126] = null
argument13[1] = false
return a-b+c*d
};
var argument12 = {"Om1z":-1,"":3.588987433047648e+307,"9.51835511016181e+307":714,"2.847727880811693e+306":"","1.3996798563522756e+308":"","1.1689812330471425e+308":"","!5w":5e-324};
var base_0 = ["?","*","y","l5","T","M"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["?","*","y","l5","T","M"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["?","*","y","l5","T","M"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["?","*","y","l5","T","M"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test397.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)