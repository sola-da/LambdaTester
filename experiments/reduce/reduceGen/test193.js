





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[7] = 49
base_0[0] = true
argument3[5] = [607,1.7976931348623157e+308,242,49,"ko","2",49,"r2%g"]
return a/b/c*d
};
var argument2 = ["U","AXxi","3r","@","T",")m-","{","aU","3","DC2DO"];
var argument3 = {"A":"","*":"tc"};
var argument4 = {"9":5.967415330871946e+307,"126":7.802659908182823e+307,"460":"%","":1.6977214650074408e+308,"1.1906829607605013e+308":6.618851702148747e+307,"@":"","2.1869172855352885e+307":595,"2.277641977158732e+307":")","z":8.979613759924138e+307};
var argument5 = r_1;
var argument6 = true;
var argument7 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[1] = {"25":"GJ","403":",'!|2","969":"","^7":5.687793573896889e+307,"":655,">$f":"","1.3772409629936904e+308":"3}","t":843,"-":403}
argument5[4] = 1.4641515567444055e+308
base_1[9] = [893,618,"_H",82,969]
return a*b*c*d
};
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[3] = {"8":1.2870658838711368e+308,"783":2.9978001591355685e+307,"823":"[s","5.484998796042765e+305":"_<","":8.725788610727508e+306,":":-100}
return a*b/c-d
};
var argument9 = 893;
var argument10 = {"213":"1g","%)8":1.592552890857441e+308,"1.275488562355602e+308":7.856769037865154e+307,"8.295928462343015e+307":655,"":157,"3.4065060176596717e+307":"","8.270091853663227e+307":"","3.1741205267600205e+307":1.5694318654500385e+308,"*c":595,"b":59};
var argument11 = r_0;
var argument12 = r_0;
var argument13 = true;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3[0][4] = [122,607,82,969,-100,-1]
return a/b-c-d
};
var base_0 = [705,100,242,-1,627,595,705,126,783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,100,242,-1,627,595,705,126,783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,100,242,-1,627,595,705,126,783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,100,242,-1,627,595,705,126,783]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test193.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)