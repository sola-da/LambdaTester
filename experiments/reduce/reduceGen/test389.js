





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[1.359136872727139e+308] = ["b","Qe",82]
return a+b+c+d
};
var argument2 = 595;
var argument3 = null;
var argument4 = null;
var argument5 = [714,403,0,714,893,0];
var argument6 = null;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument4[0] = ""
return a*b/c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[8] = {"I,v":"&","":-1,"8.287834436470298e+307":2.518661154018992e+307,"3.736107788962504e+307":-1,"1.3029308023141435e+308":1.1603773864072438e+307,"6.950929125057783e+307":"Poh"}
base_2 = null
return a+b*c-d
};
var argument9 = r_2;
var argument10 = ["C",823,"t",59,49,"OM","([",627];
var argument11 = null;
var argument12 = {"2.922309381557512e+307":595};
var argument13 = {"242":823,"823":4.552625696055163e+307,"3.5868844729396784e+307":5.116377863137903e+307,"":",","1.1071325792787777e+308":""};
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11['s'] = [157,25,49,714,82,893,627,126,783]
return a-b-c/d
};
var base_0 = [-100]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100]
var r_3= undefined
try {
r_3 = base_3.reduce(argument11,argument12,argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test389.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)