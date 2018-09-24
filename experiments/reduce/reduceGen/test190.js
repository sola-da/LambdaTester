





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[4] = {"1.5944997663338637e+308":1.1615491932462419e+308,"8+t":""}
argument2[627] = ["L","a","*8F+>","m","3","2","L!","64f","cWU","8E"]
argument3[5] = "*"
return a/b+c/d
};
var argument2 = r_0;
var argument3 = {"714":"","783":1.5385270809639036e+308,"":2.8766818609100017e+307,"3.711776907794913e+307":714,"Cb":783};
var argument4 = null;
var argument5 = r_1;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[25] = null
argument3[126] = ""
argument4[1] = [82,122,213,969,126,213,893,100,242]
return a+b*c/d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[1] = ["s","q","f",59,618]
argument8[3] = ""
return a*b-c+d
};
var argument8 = r_1;
var argument9 = {"25":969,"49":1.540123404776975e+308,"Z2d":1.5357116753260817e+308,"4.062523488740043e+307":6.59169991305008e+307,"o":823,"1.1395470078226054e+308":"","r":1.3663714952277783e+308,"sD":"5D"};
var argument10 = r_0;
var argument11 = true;
var argument12 = null;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[25] = null
base_3[3] = 6.52210935036826e+307
return a/b/c*d
};
var base_0 = [49,627,460,783,100,607,783,0,213,213]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,627,460,783,100,607,783,0,213,213]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,627,460,783,100,607,783,0,213,213]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,627,460,783,100,607,783,0,213,213]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test190.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)