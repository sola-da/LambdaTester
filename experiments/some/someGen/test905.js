





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[7] = {"7.565868824273664e+307":7.274165450395838e+306,"VsR":705,"-1":893}
base_0[4][7] = -100
return a-b-c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[3] = {"aE":82,"w":122,"":""}
base_1[8] = false
base_1[1][8] = "2'"
return a*b+c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = [627,843,59,82,82,1.7976931348623157e+308,59,242,595,213]
base_2['length'] = {"-100":1.3655228458362815e+308,"1.9274660965698764e+307":242}
return a/b*c
};
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0] = [403,126,893,122,82,618,49,403,-1]
return a+b/c
};
var argument9 = null;
var argument10 = 1.3151399694020574e+308;
var base_0 = [783,783,82,893,242,25,460,705,783,655]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,783,82,893,242,25,460,705,783,655]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,783,82,893,242,25,460,705,783,655]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,783,82,893,242,25,460,705,783,655]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someGen/test905.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)