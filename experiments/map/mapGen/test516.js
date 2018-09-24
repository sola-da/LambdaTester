





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[1.1881593224845412e+308] = {"8.003115210342079e+307":"","":"]_eMm|R","1.4468981327307646e+308":1.205265117559661e+308,"5.447859197485415e+307":"","1.692599420896495e+308":6.397070806141927e+306,"'+":"","1.7559166983786469e+308":1.7703249414720895e+308,"1.582013166101265e+308":"#3n-b"}
return a*b+c
};
var argument2 = false;
var argument3 = false;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[2] = [-1,823,157,242]
base_1[7] = ""
return a*b+c
};
var argument5 = "|";
var argument6 = true;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[0] = ""
return a*b-c
};
var argument8 = false;
var argument9 = {"843":"=yXV"};
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_3['length'] = 1.608389896822284e+308
base_3[0] = {"2.2609723147584127e+307":403,"d":595,"":2.894208415849041e+307,"3.4354135409058053e+307":595,"X":"","6.859913408855633e+306":157}
base_3[8] = true
return a*b+c
};
var argument11 = r_2;
var argument12 = "";
var base_0 = [49,"x#]",618,126,122,"U@3"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,"x#]",618,126,122,"U@3"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/map/mapGen/test516.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)