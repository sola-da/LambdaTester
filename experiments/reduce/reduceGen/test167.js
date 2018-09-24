





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[1][0] = null
argument2[1.1277822633002616e+308] = [618]
return a/b*c/d
};
var argument2 = null;
var argument3 = true;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[0] = null
return a*b/c-d
};
var argument5 = null;
var argument6 = null;
var argument7 = {"25":"","607":126,"823":"","1.150855218454733e+308":"0","":"wn","aCNe":"",",":460,"2.7953406123757557e+307":""};
var argument8 = false;
var argument9 = null;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[4] = ""
base_2[1] = [783,1.7976931348623157e+308,0,618,0,122]
return a+b+c/d
};
var argument11 = false;
var argument12 = {"1.469675614744603e+308":"","1.1400781839560427e+308":9.400181569736919e+307,">XHm1":1.0149538323736175e+308,"-100":"","5.988198300552646e+307":1.243446698529588e+308,"4.456251793057931e+307":""};
var argument13 = r_1;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[2] = "r"
return a-b*c-d
};
var base_0 = ["5",627,595,"X"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5",627,595,"X"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5",627,595,"X"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5",627,595,"X"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test167.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)