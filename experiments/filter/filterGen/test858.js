





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['K'] = null
base_0[4][2] = true
base_0['filter'] = "%"
return a/b-c
};
var argument2 = true;
var argument3 = ["# ","LJ(","6","I","vsB","5&","ZN","i"];
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['h'] = ["K",";JWr","3","S"]
argument6[126] = null
base_1[6] = [893,126,627,49,595,655,1.7976931348623157e+308]
return a/b/c
};
var argument5 = r_1;
var argument6 = {"49":4.334535100674145e+307,"242":"P","714":969,"2.4079624249509696e+307":"<!X","<":"J","":"l","1.5032737558326808e+308":1.3585515006991804e+308,"jt'F":"5","Fo":618};
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[9] = 1.2358952176608914e+308
return a-b+c
};
var argument8 = 607;
var argument9 = ["UEoT%","h","C","c>%T","IJ","0BH","&BYy"];
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['c'] = 4.943802174469776e+307
argument11[4.224481734419934e+307] = {"403":"{","'":8.805422843070688e+307,"1.1070271957831946e+308":618,"1.6306522457867155e+308":"]","":"","6.228746559978097e+306":"","1.7976931348623157e+308":655}
return a*b+c
};
var base_0 = [705,157]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,157]
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,157]
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,157]
var r_3= undefined
try {
r_3 = base_3.filter(argument10)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test858.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)