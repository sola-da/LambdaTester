





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[2] = ""
base_0[0][1] = 0
return a*b-c
};
var argument2 = 893;
var argument3 = {"783":607,"969":1.1363993022749922e+308,"2.5022379025739315e+307":607,"1.5754420793911495e+307":"","-1":"3","6.424289074933109e+307":1.0127552885909186e+308,"":"9knx","-100":1.5802165209725176e+308,"1.366743586472057e+308":"["};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[126] = true
argument5[2] = null
argument5 = null
return a-b/c
};
var argument5 = false;
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2['length'] = 607
argument9[3] = null
return a+b+c
};
var argument8 = [618,126];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[3] = {"122":-1,"157":714,"783":"76","969":""}
base_3[0][4] = 1.73793667775054e+307
return a+b-c
};
var base_0 = [0,242,100,49,157,893,-1,-1,595,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,242,100,49,157,893,-1,-1,595,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,242,100,49,157,893,-1,-1,595,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,242,100,49,157,893,-1,-1,595,213]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test197.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)