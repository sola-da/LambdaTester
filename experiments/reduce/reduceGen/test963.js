





var callbackArguments = [];
var argument1 = false;
var argument2 = [969,714,843,403,100,607,122,-1,460];
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[9] = null
argument3[7] = [627]
argument1[3] = true
return a/b/c+d
};
var argument5 = false;
var argument6 = null;
var argument7 = ["E","p","+cRlp",714,"<6uw|",714,823,"`",655];
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[1.359136872727139e+308] = {"82":1.4387918114586739e+308,"969":"n","1.3214908825670874e+308":"K","7.578734655875015e+307":"2[f","2kx":1.739560333262109e+307,"5e-324":8.765948937641286e+307,"f":"","1.2076888459280747e+308":""}
return a*b/c*d
};
var argument9 = false;
var argument10 = false;
var argument11 = ["::",")",460,"%;n",59,969,"S]w","M",122,";!k"];
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2.1280896016417002e+307] = ["tq","QZ"]
return a-b+c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15['HMm'] = ""
argument13[893] = ""
argument15[6.35085648319999e+307] = ""
return a+b+c*d
};
var base_0 = ["W","|6ou>","R"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W","|6ou>","R"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W","|6ou>","R"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W","|6ou>","R"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test963.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)