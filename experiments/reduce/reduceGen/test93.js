





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = 893
return a/b-c+d
};
var argument2 = false;
var argument3 = {"126":"","u8":242,"1.4368195238488314e+308":""};
var argument4 = null;
var argument5 = r_0;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1 = ""
base_1[6] = null
return a-b/c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8 = ""
argument7 = ["X1?2X-","v"]
argument8[3] = {"893":"a","1.2843153830392858e+308":460,"1.3124583332879575e+308":1.7976931348623157e+308,"-1":"=m"}
return a+b*c+d
};
var argument8 = r_0;
var argument9 = r_2;
var argument10 = r_3;
var argument11 = r_2;
var argument12 = r_0;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[0] = null
return a*b-c-d
};
var base_0 = ["I","GTD","jc","7","m4a","L2","J","y","%"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["I","GTD","jc","7","m4a","L2","J","y","%"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["I","GTD","jc","7","m4a","L2","J","y","%"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["I","GTD","jc","7","m4a","L2","J","y","%"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test93.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)