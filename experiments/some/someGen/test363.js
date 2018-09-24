





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"783":49,"":6.729347192392119e+307,"1.7455633695092769e+308":"","I":"]_","5aK":"(MR","7.89160833416256e+306":1.7304599927084855e+308,"1.5570740932118301e+308":0}
argument2[6] = ""
return a*b-c
};
var argument2 = false;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4['f!BO'] = "@"
argument4[4.224481734419934e+307] = ["-52","3h",618,627,82,"{"]
return a-b*c
};
var argument4 = [893,49,403,100,783,213,5e-324,1.7976931348623157e+308,242];
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[9.551053197482062e+307] = false
argument6['f'] = true
base_2[6] = null
return a*b+c
};
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = "+"
base_3[1][3] = [49,"AX","]=","5","896",893,"n","[",714,"h"]
base_3[1] = false
return a-b*c
};
var argument9 = ["eG",618,100,25,823,"n","o9","t",122];
var argument10 = ",fK";
var base_0 = ["=B"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=B"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=B"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=B"]
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
require("fs").writeFileSync("./experiments/some/someGen/test363.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)