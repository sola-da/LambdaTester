





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = "LVy"
argument2[2] = [25,126,-100,-1,595,122]
return a*b*c-d
};
var argument2 = null;
var argument3 = "&";
var argument4 = 5e-324;
var argument5 = null;
var argument6 = {"1.068088625191071e+308":"","1.6485784645043903e+308":969,"1.1647866931908513e+307":"","1.3775879804742089e+307":"b"};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[627] = 82
base_1[0][4] = "<NXY"
argument6[627] = null
return a*b+c-d
};
var argument8 = null;
var argument9 = r_2;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = true
argument8[4] = [893,82,"y"]
return a-b+c/d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[4] = false
return a+b+c*d
};
var base_0 = [82,"fEi","U","|","?","J#","h5e"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,"fEi","U","|","?","J#","h5e"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,"fEi","U","|","?","J#","h5e"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,"fEi","U","|","?","J#","h5e"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test183.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)