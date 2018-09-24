





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[100] = ["ao*","%","#CWOL"]
argument3[6] = null
return a*b-c
};
var argument2 = null;
var argument3 = [893,25,59,403,49,607];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[8] = false
return a-b*c
};
var argument5 = {"460":"VA","607":126,"655":6.351592478808714e+306,"783":403,"A0s":843,"":4.792750400524181e+307,"-100":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['j'] = "3k"
argument8['^h'] = 1.581193464067778e+308
argument7[8.748669805137695e+307] = ""
return a/b*c
};
var argument7 = false;
var argument8 = false;
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['LK'] = ""
argument10[25] = null
argument11[6] = false
return a+b-c
};
var base_0 = ["V",122,"Z]",1.7976931348623157e+308,"s",969,"3",655,705,213]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V",122,"Z]",1.7976931348623157e+308,"s",969,"3",655,705,213]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V",122,"Z]",1.7976931348623157e+308,"s",969,"3",655,705,213]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V",122,"Z]",1.7976931348623157e+308,"s",969,"3",655,705,213]
var r_3= undefined
try {
r_3 = base_3.find(argument9)
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
require("fs").writeFileSync("./experiments/find/findGen/test974.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)