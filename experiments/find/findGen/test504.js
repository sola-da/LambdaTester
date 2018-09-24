





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = ["p","2jbox=)","Y","&",":"]
argument3['LK'] = [122]
base_0[3][7] = {"":""}
return a/b+c
};
var argument2 = null;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][6] = {"":1.6591652771066127e+308,"d":1.564049677000763e+308}
argument5[1] = ""
base_1[0][2] = true
return a+b/c
};
var argument5 = {"25":403,"595":6.677096645008766e+307,"607":1.1464131614234991e+308,"655":"","1.359657285704809e+308":655,"":"","1.1075474545191815e+308":5e-324,"3.48296817012097e+307":""};
var argument6 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[2] = null
argument7[6] = 783
base_2[8] = {}
return a-b*c
};
var argument7 = r_0;
var argument8 = [714,157,714];
var argument9 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[6] = true
base_3['length'] = {"0":1.1596641278634826e+308,"25":0,"F":"H",")":"C"}
base_3[7] = [126,714,403]
return a/b*c
};
var argument10 = true;
var base_0 = [783,49,618,242,893]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,49,618,242,893]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,49,618,242,893]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,49,618,242,893]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test504.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)