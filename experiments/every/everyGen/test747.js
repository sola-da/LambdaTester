





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][6] = 157
return a*b+c
};
var argument2 = null;
var argument3 = "1";
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[5] = null
base_1[1][5] = [1.7976931348623157e+308,126,595,82,1.7976931348623157e+308,823,100]
base_1[0][6] = null
return a-b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[1.3599216339661573e+308] = 705
return a-b+c
};
var argument6 = 9.993578076320765e+307;
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[122] = false
argument9[403] = {"":783,"-100":1.6203141258544653e+308,"2.837629012872876e+307":157,"5.478649265288076e+307":""}
base_3[3] = null
return a-b*c
};
var argument9 = null;
var argument10 = null;
var base_0 = ["!)?3",")Z[",969,"{","8[82",893,893,122]
var r_0= undefined
try {
r_0 = base_0.every(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["!)?3",")Z[",969,"{","8[82",893,893,122]
var r_1= undefined
try {
r_1 = base_1.every(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["!)?3",")Z[",969,"{","8[82",893,893,122]
var r_2= undefined
try {
r_2 = base_2.every(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["!)?3",")Z[",969,"{","8[82",893,893,122]
var r_3= undefined
try {
r_3 = base_3.every(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/every/everyGen/test747.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)