





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = {"714":"e","":"","}O":1.7224624370648897e+308,"=":"$"}
return a-b*c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = 1.332868279117913e+308
base_1[5] = ""
base_1[6] = [893,242,705,-1,714,59,823,5e-324,25]
return a/b*c
};
var argument4 = null;
var argument5 = {"9":9.313205406231542e+307,"4.7181864671467807e+306":49,"1.7976931348623157e+308":"NK-"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4] = ""
return a+b/c
};
var argument7 = false;
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[0] = true
return a-b/c
};
var argument10 = null;
var base_0 = ["9","+>","nS","Z","h:?#","i","l","B$A","0k=y6[1s","e"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9","+>","nS","Z","h:?#","i","l","B$A","0k=y6[1s","e"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9","+>","nS","Z","h:?#","i","l","B$A","0k=y6[1s","e"]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9","+>","nS","Z","h:?#","i","l","B$A","0k=y6[1s","e"]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test47.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)