





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[627] = [460,242]
return a*b+c/d
};
var argument2 = {"yt":-100,"":122};
var argument3 = true;
var argument4 = 783;
var argument5 = r_0;
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[0][3] = {"2":5.899996261833412e+307,"595":"","(":"","1.733192974182337e+308":"","":-1,"6.162495164984502e+307":823,"8.512922693911169e+307":"","Eii":893,"4.976412745322597e+307":7.501844988982605e+307,"1.0215740581951928e+308":1.7927495082798839e+308}
argument5[627] = false
argument5[2] = 7.186157145937502e+307
return a-b/c+d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[7.999889602676851e+307] = null
argument8[2] = true
return a/b/c*d
};
var argument9 = "";
var argument10 = ["^H",82,"O!ne","[","z","BA$",403];
var argument11 = [242,59,242,49,-100,893,122,627];
var argument12 = r_0;
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[';N'] = [-100,25]
return a+b/c+d
};
var base_0 = [655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test924.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)