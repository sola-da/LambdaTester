





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
return a-b/c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[7] = null
return a/b+c*d
};
var argument3 = {"4":595,"49":"","403":"","969":403,"9.462938712512878e+307":"?","1.0854094166227686e+308":1.0505582537417128e+308,"9.6843039694463e+307":5.323855876415418e+307,"5.991310601202259e+307":460,"":"'","7.039903213304848e+307":460};
var argument4 = r_0;
var argument5 = "";
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[3] = 460
return a/b/c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6.35085648319999e+307] = [595,595,59,49,242,627]
return a/b-c*d
};
var argument8 = r_0;
var base_0 = ["8*",714,"Vb","uK","c","TA"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["8*",714,"Vb","uK","c","TA"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8*",714,"Vb","uK","c","TA"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["8*",714,"Vb","uK","c","TA"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test761.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)