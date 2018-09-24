





var callbackArguments = [];
var argument1 = null;
var argument2 = "k";
var argument3 = {"2":25,"59":"","":893,"H;":783,"P":"S","1.6419775682966564e+307":"","3.188142123277266e+307":893};
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = "}"
argument3[59] = true
return a+b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[5] = null
argument6[0] = null
argument7[1.3938918493123786e+308] = null
return a*b/c+d
};
var argument6 = {"25":"","126":100,"":3.304946904013111e+307,"-1":705,"7.515689288903326e+307":"W","Pr":"q","3.5961810613194544e+307":4.549236036421059e+307,"5D)":843,"3.2290301544987766e+307":""};
var argument7 = 242;
var argument8 = null;
var argument9 = 49;
var argument10 = r_1;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2] = null
base_2[2][0] = [242,823,82,823,49]
return a+b*c+d
};
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[-1] = {"242":"L","893":"","wSm":460,"1.2464112637591869e+308":"","":"","Z*6":"t"," ":"e+1","q":1.4741746060096164e+308,",[3":""}
argument13[627][126] = ""
return a*b+c*d
};
var base_0 = ["LJtFO|","HQS","e","i","JH","%6"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["LJtFO|","HQS","e","i","JH","%6"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["LJtFO|","HQS","e","i","JH","%6"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["LJtFO|","HQS","e","i","JH","%6"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test639.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)