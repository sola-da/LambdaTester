





var callbackArguments = [];
var argument1 = true;
var argument2 = "";
var argument3 = 5.200882587501531e+307;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[';N'] = {"618":1.258549006796611e+307,"K":157,"-100":122,"":1.1797924919261713e+308}
base_0[3] = {"655":8.778364932994004e+307,"'v{":5.119363579392576e+307,"1.611608535938671e+308":" e","":1.2592705175795381e+308,"5e-324":"","1.1912770837537691e+308":"","1.6410468137656976e+308":""}
argument3 = {"7":"","157":1.2435315047631152e+308,"823":"","893":9.447934505357469e+307,"":49,"8.132164080002936e+307":"sm","1.2572199404206254e+308":1.2436836934794013e+308}
return a-b+c+d
};
var argument5 = true;
var argument6 = null;
var argument7 = ["**","zezP","Ri`","zv","o","6"];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[403] = ["2G)",">"]
return a/b*c*d
};
var argument9 = null;
var argument10 = 6.301692174867994e+307;
var argument11 = true;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[126] = {"242":2.6452415554090475e+307,"":4.546673068556621e+307,"!'As":":w","d":843}
argument9[3] = ""
argument10[7] = {"59":9.884777161077073e+307,"1.171811120372335e+308":"8ke"}
return a+b-c-d
};
var argument13 = true;
var argument14 = true;
var argument15 = null;
var argument16 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14 = 242
argument13[8] = "2["
return a/b+c*d
};
var base_0 = ["w","=","blh=1`","S","67F{","s","W"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["w","=","blh=1`","S","67F{","s","W"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["w","=","blh=1`","S","67F{","s","W"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["w","=","blh=1`","S","67F{","s","W"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14,argument15,argument16)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test661.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)