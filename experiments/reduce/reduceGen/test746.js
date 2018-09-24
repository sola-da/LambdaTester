





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627][126] = {"595":8.298978665768292e+307,"&":2.571541983832687e+307}
argument1[2.1869172855352885e+307] = {"":893,"1.6949712133213823e+308":6.76969106903469e+307,"3.3937445068767904e+307":"JWr"}
return a/b+c/d
};
var argument2 = [1.7976931348623157e+308,843,403,714,714,893];
var argument3 = true;
var argument4 = [1.7976931348623157e+308,460,783,705,705];
var argument5 = ["N-K","S","p(n#q","IK","i","&","L","+","9p22","Q"];
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[3] = "1q"
argument3[2.1280896016417002e+307] = 607
argument5[595] = ["UEoT%","h","C","c>%T","IJ","0BH","&BYy"]
return a+b/c*d
};
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[5] = ["O`","d","R"]
argument8[-1] = {"655":893,"":403,"{":1.7976931348623157e+308,"1.7883333668932724e+308":""}
argument9[2] = 3.7174744095679726e+307
return a*b+c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[1.612812046173122e+308] = 5.366205402543928e+307
argument10[627] = ""
argument10['18{'] = 1.8463130237709677e+307
return a/b/c+d
};
var base_0 = ["|","# ",893,893,-1,"6"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","# ",893,893,-1,"6"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|","# ",893,893,-1,"6"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|","# ",893,893,-1,"6"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test746.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)