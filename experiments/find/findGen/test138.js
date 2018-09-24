





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[0] = 3.4828893544820834e+307
argument3[1] = 126
argument2[0] = 49
return a-b/c
};
var argument2 = "";
var argument3 = 1.0118076649279184e+308;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][2] = null
argument5[1.0500354979187844e+308] = [714,-100,100,213]
base_1['length'] = null
return a/b+c
};
var argument5 = "+";
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][0] = {"7":")PP","25":"","627":"c4","655":"C99","1.5639956393864708e+308":1.0476168945602526e+308,"3.832738438981968e+306":"=L","":"","2.614337055599925e+307":""}
base_2[1][0] = ""
base_2[0][0] = false
return a*b-c
};
var argument7 = r_1;
var argument8 = 1.5392211672624552e+308;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[100] = "9="
return a*b-c
};
var argument10 = r_1;
var argument11 = null;
var base_0 = ["X","k]","B",">>9n","bt"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X","k]","B",">>9n","bt"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X","k]","B",">>9n","bt"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X","k]","B",">>9n","bt"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test138.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)