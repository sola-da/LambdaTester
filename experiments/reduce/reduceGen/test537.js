





var callbackArguments = [];
var argument1 = false;
var argument2 = 1.2540212384078325e+308;
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = 607
argument3[6.35085648319999e+307] = 126
base_0 = [59,969]
return a*b/c+d
};
var argument5 = {"0":213,"823":5e-324,"9.044401344303415e+307":59,"1.2829554708372177e+308":"yy","":"L","vP^+":5.83582607886579e+307,"`":"S|"};
var argument6 = null;
var argument7 = null;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['*c'] = null
return a/b-c-d
};
var argument9 = [49,5e-324,213,823,460,1.7976931348623157e+308];
var argument10 = [126];
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[627] = 82
return a*b+c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = null
argument14[1.1277822633002616e+308] = {"1.7149019460509618e+308":7.535471478949578e+307,"3.765028683475413e+307":100,"":1.6839367966216082e+308,"9u":"tHb","|Z":"G"}
argument15[6.35085648319999e+307] = true
return a+b-c/d
};
var base_0 = [213,607,49,49,82,1.7976931348623157e+308,843,242]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,607,49,49,82,1.7976931348623157e+308,843,242]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,607,49,49,82,1.7976931348623157e+308,843,242]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,607,49,49,82,1.7976931348623157e+308,843,242]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test537.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)