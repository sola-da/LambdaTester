





var callbackArguments = [];
var argument1 = "";
var argument2 = {"4":2.3541720221861028e+306,"d":242,"7.463432409233234e+307":0,"":705,"V":3.871140626024353e+307,"(":""};
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1277822633002616e+308] = true
base_0[1] = false
argument2[0] = "|"
return a/b-c-d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5 = 5.230020534750726e+307
base_1[2] = 9.345650592238694e+307
base_1[1] = false
return a*b-c+d
};
var argument6 = r_0;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7.463432409233234e+307] = {"0":"","242":627,"705":2.5574557229107237e+307,"^":1.5431164580934939e+308,"5.927169968998761e+307":"","3.261397770524847e+306":"","7.815953452187194e+307":"Is","":"","-100":"_"}
argument7[1] = {"627":"","655":"","4.855784219588827e+307":1.2991500454663309e+308,"x|":"","":"wf]","9.130189455683348e+307":100,"1.5581908984183862e+307":9.360947328566458e+306,"qh_":4.697708005571185e+306,"e|":""}
return a+b+c+d
};
var argument8 = [82,893,705,59,157,0,823];
var argument9 = false;
var argument10 = null;
var argument11 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[5] = {"460":8.938223052023863e+307,"u":9.171285094931522e+306,"":"?","E0":"={","3.3862897046505747e+307":"m|,;"}
base_3[4] = null
return a*b/c-d
};
var base_0 = ["h","5:v","av48","wR","q","=","X","M","_#Hc"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h","5:v","av48","wR","q","=","X","M","_#Hc"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h","5:v","av48","wR","q","=","X","M","_#Hc"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h","5:v","av48","wR","q","=","X","M","_#Hc"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test55.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)