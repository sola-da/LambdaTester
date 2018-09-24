





var callbackArguments = [];
var argument1 = 242;
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6.35085648319999e+307] = "D`Jkh"
argument2[4] = [1.7976931348623157e+308,59,618,25]
base_0 = {"25":5.891135961115323e+307,"607":157,"843":"o","3.683429631611976e+307":"","":7.554917445061047e+307,"1.7976931348623157e+308":1.6246402117946748e+307,"F4M=":627,"<=":"_"}
return a*b*c+d
};
var argument5 = r_1;
var argument6 = "";
var argument7 = [714,1.7976931348623157e+308,25,0,705,213,893,25,213,403];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = null
argument5[3] = ["&","#9","6","!"]
argument5['s'] = ""
return a+b+c*d
};
var argument9 = null;
var argument10 = null;
var argument11 = "";
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[4] = 595
return a*b/c*d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15 = true
argument13[2] = 1.2952787910875187e+308
argument13[126] = 4.227618951203378e+307
return a+b-c+d
};
var base_0 = ["F","nL",")#","C","3","+U","f"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["F","nL",")#","C","3","+U","f"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["F","nL",")#","C","3","+U","f"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["F","nL",")#","C","3","+U","f"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test545.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)