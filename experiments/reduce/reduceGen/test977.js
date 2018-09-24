





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[4] = [49,213,49,242,49,595,100]
base_0[2][0] = 9.057262471802438e+307
argument3[7] = {"":8.629197480520922e+307,"1.4698534124207953e+308":1.1816014044773463e+308,"X-":"=","1.6420918104737797e+308":"g","E":"y"}
return a/b+c-d
};
var argument2 = r_0;
var argument3 = "";
var argument4 = "";
var argument5 = null;
var argument6 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3['s'] = [627,-1,1.7976931348623157e+308,126,1.7976931348623157e+308,705,969,618,969]
argument4[627][126] = [0]
return a/b-c-d
};
var argument7 = false;
var argument8 = null;
var argument9 = r_0;
var argument10 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[8] = false
return a+b-c+d
};
var argument11 = {"&^":213,"=uF":"A(","":9.714936270186615e+307,"v<K":" &$","3.85873779808838e+307":714,"C":""};
var argument12 = r_1;
var argument13 = 7.980356164151837e+307;
var argument14 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument13[655] = ";M&"
return a/b+c+d
};
var base_0 = ["]","Q","*$","O","w_",";","n","H","l"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]","Q","*$","O","w_",";","n","H","l"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]","Q","*$","O","w_",";","n","H","l"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9,argument10)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]","Q","*$","O","w_",";","n","H","l"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test977.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)