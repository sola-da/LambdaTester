





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[8] = {"59":"","100":893,"595":"^","1.122196014751128e+308":"","":"","7.495881670537716e+307":"","8.140783450212566e+307":403,"1.3569658157443155e+308":893,"1.383546577435787e+308":""}
base_0[4] = true
return a/b*c/d
};
var argument2 = "R";
var argument3 = false;
var argument4 = r_1;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1['length'] = 3.351591216428297e+307
argument2 = true
return a+b/c/d
};
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = {"0":1.2773299489021653e+308,"595":1.0794083912205184e+308,"627":"[v","q3":"","P":"","":"mG!2$","1.4034744228995816e+308":"","5.262931091360336e+307":1.7976931348623157e+308}
return a-b/c/d
};
var argument7 = false;
var argument8 = null;
var argument9 = {"126":"'M9l","Z-":"","":"","M":1.7048953189970677e+308,"p":"DTnS","AJXi":213,"}O":1.7224624370648897e+308};
var argument10 = "";
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[1] = ""
return a+b*c*d
};
var base_0 = [714,893,618,82,59,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,893,618,82,59,126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,893,618,82,59,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,893,618,82,59,126]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test40.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)