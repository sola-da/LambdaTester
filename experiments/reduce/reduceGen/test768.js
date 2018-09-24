





var callbackArguments = [];
var argument1 = 1.427577144335704e+308;
var argument2 = "'";
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = 1.5604166178449575e+308
argument2[213] = {"714":"JH5","":"5O","5.037833665309879e+307":"","T)":714,"1.212552389512923e+308":"1(","7.434561291350071e+307":7.87334334007118e+307}
argument2[-1] = {"242":")","823":"p","843":126,"6.453309469181636e+307":"","1.623609338764323e+308":"","-100":"#","1.7470166730959176e+308":""}
return a/b-c-d
};
var argument5 = [705,100,122,893,82,969];
var argument6 = r_0;
var argument7 = "=";
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[4] = ""
return a-b-c/d
};
var argument9 = r_1;
var argument10 = 9.085574627613196e+307;
var argument11 = r_0;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[7.889879335222838e+307] = [1.7976931348623157e+308,595,"]",82]
argument9['Cb'] = 5.904946848194677e+307
argument11[4] = [843,"r",607,"a",893,"P",969,"U","Z8%"]
return a-b+c/d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument14 = null
argument14[627][126] = {"823":"","j":"4","":"p"}
argument14[627] = null
return a-b/c/d
};
var argument14 = {"1.472434956985541e+308":"",":Yl":3.7014200902923485e+307,"{Uy":"*"};
var base_0 = [25,25,213,122,126,59,655]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,25,213,122,126,59,655]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,25,213,122,126,59,655]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,25,213,122,126,59,655]
var r_3= undefined
try {
r_3 = base_3.reduce(argument13,argument14)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test768.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)