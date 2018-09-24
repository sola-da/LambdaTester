





var callbackArguments = [];
var argument1 = 9.41837216000489e+307;
var argument2 = {"460":607,"627":6.489802181441092e+307,"A*g?":"","4.3574349526929597e+307":-100,"1.2493350857613284e+308":893,"zxZ":655,"_G":4.54475777833849e+307,"sq":"","1.4536802928799306e+306":5.647192279181022e+306,"":""};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[213] = {"":"tza"}
argument3 = 4.694977117769333e+307
argument3[2] = [157,"e",893,100," ",213,242,"O9l","YDT"]
return a+b+c*d
};
var argument5 = r_0;
var argument6 = 1.32681712083608e+308;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['HMm'] = {"157":403,"j2Ky-%":1.6229984263630032e+308,"p":6.928462320200123e+306,"[":823,"":823,"2.0796874953747124e+307":""}
argument6[1.612812046173122e+308] = [783,157,705,242,-100,893]
return a+b/c-d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[59] = null
return a*b-c+d
};
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[3] = null
base_3['length'] = false
argument12[3] = [242,242,"N",705,"tfD"]
return a/b/c*d
};
var argument11 = r_1;
var base_0 = [59]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test839.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)