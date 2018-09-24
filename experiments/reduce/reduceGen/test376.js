





var callbackArguments = [];
var argument1 = false;
var argument2 = null;
var argument3 = "";
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[4] = {"3.147520445516041e+307":">","1.0604191585021663e+308":"4","1.4425092572640681e+308":"","":-1,"{":1.7976931348623157e+308}
return a-b/c-d
};
var argument5 = true;
var argument6 = "";
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[9] = {"@":893,"h":213,"":"","8.8988939996841e+307":59,"|":"7"}
return a/b/c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[7] = ["s",627,1.7976931348623157e+308,460,"&","(D","`"]
argument10[627] = ""
argument11[3] = ":{J"
return a+b-c-d
};
var argument10 = [1.7976931348623157e+308,242,627,213,59,157,126,655];
var argument11 = {"843":7.743593250757315e+307,"<M":"x","":0,"b":1.4737089962826612e+308,"1.190481206868435e+307":843,"5.436647438696167e+307":"","'`":1.1214262164446598e+308,"5.706227761814804e+306":242,"x":"","9.781342937064103e+307":"5$P^"};
var argument12 = ["R","fvU"];
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[2.1869172855352885e+307] = null
return a*b+c-d
};
var base_0 = [157,618,460,893,655,157,82,0]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,618,460,893,655,157,82,0]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,618,460,893,655,157,82,0]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,618,460,893,655,157,82,0]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test376.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)