





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[213] = ""
return a+b+c-d
};
var argument2 = true;
var argument3 = null;
var argument4 = null;
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = {"L":893}
argument4['*c'] = 460
return a-b+c-d
};
var argument6 = r_0;
var argument7 = {"705":714,"969":"LIY","7$":"&i&]","h8do+%":893,"1.6882138070345725e+308":""};
var argument8 = "x&";
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = 1.195949271293332e+308
return a-b/c-d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[9] = false
argument12[403] = true
return a*b*c+d
};
var argument11 = ["CH47]tI:<",";","z","?A","0B8%"];
var base_0 = [0,"9=",627]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,"9=",627]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,"9=",627]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,"9=",627]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test427.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)