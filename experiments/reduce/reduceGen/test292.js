





var callbackArguments = [];
var argument1 = false;
var argument2 = false;
var argument3 = [59,823,823,655,460,595,893,5e-324];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[6.35085648319999e+307] = true
argument3[1] = 595
return a/b/c/d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = 714
argument5 = false
argument5['s'] = ""
return a/b+c/d
};
var argument6 = false;
var argument7 = {"242":"I","1.1038139326235288e+306":1.7056826494661902e+308,"D":823,"1.0288957414737876e+306":"","":"","1.6522102455551795e+308":5.723571092952731e+307,"Jv":"","]j":"","1.5011683090468972e+308":"`;F"};
var argument8 = false;
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[59] = null
base_2[2][0] = ""
argument8['18{'] = null
return a+b/c/d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[';N'] = [126,460,1.7976931348623157e+308,783,460,655,403,25]
base_3[0][0] = true
base_3[6] = ""
return a/b-c+d
};
var base_0 = [714,"d"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,"d"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,"d"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,"d"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test292.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)