





var callbackArguments = [];
var argument1 = ["L","7sq",";KK","}%","L9"];
var argument2 = null;
var argument3 = ["ZKI",":B","e","$$j6`n","n","+","5",")","M$","xu"];
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['HMm'] = [627,705,823,126,618,627,705]
argument3[1.359136872727139e+308] = {"":"",":U#":"","2.906840298110317e+307":"9g=PJ[","2.3189906211508394e+307":7.502840951648477e+307,"I@lt":82}
argument3[25] = 1.0434351955576196e+307
return a/b/c*d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1] = ""
return a*b/c-d
};
var argument6 = [49,705,"o#",100];
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[627] = 1.4936187356698684e+307
return a+b-c+d
};
var argument9 = true;
var argument10 = ["dh","if:*","X","@","Gi","O","c","X","o"];
var argument11 = true;
var argument12 = r_3;
var argument13 = r_3;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12 = [783,969,705,-1,823]
return a+b*c-d
};
var base_0 = [705,"sf",126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,"sf",126]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,"sf",126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,"sf",126]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test363.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)