





var callbackArguments = [];
var argument1 = true;
var argument2 = "";
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1] = {"59":"0","100":"","p@":9.305220446031204e+307,"8.60365013367113e+307":618,"4.759925642082162e+307":714,"C":"l","5.328371175195018e+307":""}
argument3[2] = 893
argument3[1.3938918493123786e+308] = true
return a/b-c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[2] = ""
return a*b+c+d
};
var argument6 = r_1;
var argument7 = r_1;
var argument8 = null;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[126] = true
return a-b-c-d
};
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[2.1280896016417002e+307] = "nSG"
argument12[9.331954948603684e+307] = "4aAlB"
base_3[7] = null
return a-b/c+d
};
var argument12 = r_1;
var base_0 = [5e-324,783,823,242,893,714,242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [5e-324,783,823,242,893,714,242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [5e-324,783,823,242,893,714,242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [5e-324,783,823,242,893,714,242]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test731.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)