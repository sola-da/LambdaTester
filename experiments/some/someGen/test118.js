





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[9] = {"627":893,"1.1593826956528354e+308":9.772197284848389e+307,"":"e"}
return a/b/c
};
var argument2 = true;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[5] = ["W","1","kWUJ&",627,"sQ`N",843,"#I",655,5e-324]
base_1[1] = true
argument5[9] = {}
return a+b+c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = [157,0,122,100,5e-324,59,969,783,460]
return a+b-c
};
var argument6 = ["q",213,655,"w"];
var argument7 = 4.963841462582841e+307;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.6798476101238045e+308] = null
base_3[1] = false
return a+b/c
};
var argument9 = null;
var argument10 = r_3;
var base_0 = ["!","6i","-q","&Hfw","s","NX","?","8jY","1","k#$"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!","6i","-q","&Hfw","s","NX","?","8jY","1","k#$"]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!","6i","-q","&Hfw","s","NX","?","8jY","1","k#$"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!","6i","-q","&Hfw","s","NX","?","8jY","1","k#$"]
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
require("fs").writeFileSync("./experiments/some/someGen/test118.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)