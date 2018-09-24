





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[618] = true
argument3[607] = 25
base_0[0][1.4677087964888306e+308] = "gW"
return a*b*c
};
var argument2 = r_0;
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[4] = {"122":"","213":126,"460":1.405450407282199e+307,"8.345115521218896e+307":1.253093951441709e+308,"}C40":"S","1.5920671462333497e+308":8.57524230919425e+307,"1.7976931348623157e+308":823,"7T":"","1.7885174032656353e+307":-100}
argument5[1] = true
return a-b/c
};
var argument4 = null;
var argument5 = null;
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[3] = false
argument7[49] = ["6`0","+|*","i","c5","2p","<","w","s"]
argument7[618] = {"714":9.826683286098724e+306,"":82,"1.4241230465047188e+308":"","O":1.6812128612360904e+308,"1.2711241329015938e+308":"}","rJ#":1.2985563183802312e+307}
return a*b*c
};
var argument7 = 242;
var argument8 = [969,627,705];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[1] = null
return a+b-c
};
var argument10 = {"157":" ","4.573069918217022e+307":"#MEu;dc","":1.1432373244182037e+308,"3.66424288758039e+307":1.673000307272388e+308,"3.604808000458919e+307":1.2513536055297242e+308,"S":-100,"g":"<","<NXY":126,"|!@h!":""};
var base_0 = [823,843]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,843]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,843]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10)
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
require("fs").writeFileSync("./experiments/map/mapGen/test209.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)