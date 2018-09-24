





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[6][3] = 1.7976931348623157e+308
return a*b+c
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][0] = {"":0,"2.8639285498741147e+307":1.7302276141749813e+308,"1.7778825286079422e+308":"","1.609376396192387e+308":"","YW":126,"-100":1.7336342819422265e+308}
return a+b/c
};
var argument5 = ["!en",595,607,618,714,460,783,403,25];
var argument6 = null;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[6][3] = false
argument9[893] = false
return a-b*c
};
var argument8 = {"4.688259563821148e+307":1.1038108329270224e+308,"1.4441226314898484e+308":8.007505164798578e+307,"T":"","w!":"a","9.358262560578998e+307":823,"JU":"y"};
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9 = true
argument11 = "i"
return a+b*c
};
var argument10 = null;
var argument11 = r_0;
var base_0 = ["8:)0<",")N","{","0No","BE2","6","ex","N","3t","r#B2]Z>"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["8:)0<",")N","{","0No","BE2","6","ex","N","3t","r#B2]Z>"]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapGen/test966.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)