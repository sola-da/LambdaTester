





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[5] = 1.2888790932395863e+308
argument2[5] = 1.5804469610557152e+308
base_0[1][4] = {"122":969,"2.9030623459582435e+307":" ","":"Ol@","e":1.228176387182171e+308,"2.2533605123032505e+306":403,"d":"","No":2.899026469480456e+307,"-r,-":2.4504837340413813e+307,"2.76589595675279e+307":8.219755775179059e+307}
return a*b*c
};
var argument2 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[4] = 714
return a*b*c
};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2.4183178393969103e+306] = null
return a*b/c
};
var argument4 = false;
var argument5 = false;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[122] = null
base_3[7] = [655,893,213,460,100,595,460,-100,607]
return a-b+c
};
var argument7 = null;
var argument8 = ["pC",-1,59];
var base_0 = [49,"7","FZ","ii",157,100]
var r_0= undefined
try {
r_0 = base_0.every(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"7","FZ","ii",157,100]
var r_1= undefined
try {
r_1 = base_1.every(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,"7","FZ","ii",157,100]
var r_2= undefined
try {
r_2 = base_2.every(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,"7","FZ","ii",157,100]
var r_3= undefined
try {
r_3 = base_3.every(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/every/everyGen/test375.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)