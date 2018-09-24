





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[3] = 1.67021752927489e+308
base_0[3][2][5] = [126,100,-100,618,122,49,460,157,5e-324]
return a/b/c
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = ["Y=q",157,"k","3",126,"X"]
return a*b-c
};
var argument5 = "";
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[8] = null
return a/b*c
};
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[2][5] = {"607":"vP^+","1.2423171648384457e+308":1.0580750050892607e+308,"":1.2829554708372177e+308,"yy":"","5.83582607886579e+307":823,"5e-324":"","$>":"","L":"`","S|":0}
argument9[4] = 9.16429217184443e+307
argument9[5] = true
return a-b+c
};
var argument9 = [5e-324,49,460,607];
var base_0 = [100,"M>#s9KMe",25,"Y","pS",969,"9","Z"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"M>#s9KMe",25,"Y","pS",969,"9","Z"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"M>#s9KMe",25,"Y","pS",969,"9","Z"]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapGen/test615.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)