





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[126] = null
argument3[6] = null
return a/b-c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[3] = false
return a+b-c
};
var argument5 = false;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[403] = ">"
return a-b+c
};
var argument8 = true;
var argument9 = [0,893,"@Hz!","u","&","4_",242];
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[6] = [49,460,969,893]
return a+b*c
};
var argument11 = 714;
var base_0 = [49,0,100,843,607,5e-324]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,0,100,843,607,5e-324]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,0,100,843,607,5e-324]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,0,100,843,607,5e-324]
var r_3= undefined
try {
r_3 = base_3.find(argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findGen/test880.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)