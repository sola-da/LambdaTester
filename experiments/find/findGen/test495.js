





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = true
base_0[9] = {}
return a*b*c
};
var argument2 = false;
var argument3 = {"157":"","403":1.4820837802050797e+307,"":823,"z]H9":4.833174947819723e+307,"1.4401096545807564e+308":1.618611827865004e+307,"Q":"H"};
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['AO?'] = ""
base_1[9] = {}
argument5[-1] = true
return a-b*c
};
var argument5 = [618];
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[7] = "J"
argument7[-1] = [-100,607,59,460,627,126]
argument7[5] = {}
return a*b/c
};
var argument7 = 3.781989821547185e+306;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[5] = "N"
argument9[8.748669805137695e+307] = 4.023885332651178e+307
return a-b+c
};
var base_0 = ["f",893,705,843,"Nr",126]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["f",893,705,843,"Nr",126]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["f",893,705,843,"Nr",126]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["f",893,705,843,"Nr",126]
var r_3= undefined
try {
r_3 = base_3.find(argument8)
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
require("fs").writeFileSync("./experiments/find/findGen/test495.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)