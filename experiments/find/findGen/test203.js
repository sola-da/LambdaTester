





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[0] = {"714":9.826683286098724e+306,"":82,"1.4241230465047188e+308":"","O":1.6812128612360904e+308,"1.2711241329015938e+308":"}","rJ#":1.2985563183802312e+307}
argument2[-1] = 242
return a+b/c
};
var argument2 = [969,627,705];
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[8][0] = {"25":"'9;","49":3.66424288758039e+307,"&":"","7.570864219255052e+307":-1,"":"","1.673000307272388e+308":3.604808000458919e+307,"1.2513536055297242e+308":"S","-100":""}
argument6[1] = 2.0444620010484271e+307
argument6[0] = ["<","1A1","Y","Bv",",","!@h!","|"]
return a*b-c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][1] = true
argument7[5] = 4.2721595287459407e+307
base_2[2] = ""
return a/b+c
};
var argument6 = false;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[6] = null
argument9 = 25
return a*b-c
};
var argument8 = false;
var base_0 = [618,618]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,618]
var r_1= undefined
try {
r_1 = base_1.find(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,618]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,618]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test203.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)