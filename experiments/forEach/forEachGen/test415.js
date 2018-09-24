





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0] = 1.7325687626743825e+308
return a*b+c
};
var argument2 = r_0;
var argument3 = 1.6185425055302262e+308;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5['U+WQ'] = [100,607,59]
return a+b*c
};
var argument5 = {"":"","-1":618,"RUa3=B,":"t","fR8":1.7707145539440148e+307,"P":783,"Hg$_&{":122,"1.3613893644589698e+308":"h","r":"<8"};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[4][4] = ""
return a*b-c
};
var argument7 = 655;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[2] = null
argument9[126] = {"969":"I","":"O","1.5191608092957229e+308":"o+3W","9.319081405314465e+307":0,"1.7584281721517412e+308":100,"1.7364668455243997e+308":4.830465180206952e+307,"1.9305515978258529e+307":6.514765821864365e+306,"1.3279959198054731e+308":460,"5.870007448830008e+307":893,"-100":705}
argument9[126] = true
return a+b-c
};
var argument9 = 8.585811667582848e+307;
var base_0 = [893,157,-100,"&","7","<j",714,714,"Ok"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,157,-100,"&","7","<j",714,714,"Ok"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,157,-100,"&","7","<j",714,714,"Ok"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,157,-100,"&","7","<j",714,714,"Ok"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test415.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)