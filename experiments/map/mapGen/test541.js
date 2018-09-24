





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = {"843":"","1.2004998985385983e+308":"lf","":3.846330035557947e+307,"4.771482142410935e+307":"","Y]":"%","1.0497641574424849e+308":122,"4.791385954250303e+307":"=","1.7976931348623157e+308":1.3438067600494397e+308,"^v<":242}
base_0['length'] = true
return a/b/c
};
var argument2 = null;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = "qgqFJ"
base_1[7][2] = ["eh","D","RQ"]
return a*b/c
};
var argument4 = "a";
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['C'] = null
argument6[3] = [460,893,403,705,82,607]
argument6 = ["{n","3G","eE "]
return a*b/c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[7] = ["R","|","m",82,-1,"a"]
base_3[7] = "zQ"
return a+b+c
};
var argument8 = true;
var argument9 = true;
var base_0 = [126,595,242,823,157,126,0,843,100,0]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,595,242,823,157,126,0,843,100,0]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test541.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)