





var callbackArguments = [];
var argument1 = null;
var argument2 = [969,595,969];
var argument3 = false;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = [783,-100,122,100,893]
argument1[2] = [627,403,403,823,100,1.7976931348623157e+308,122,1.7976931348623157e+308,714]
argument1[2] = {"82":25,"100":"","":"N","1.3614887151656834e+308":213,"V":"jo","4.454549565774764e+307":"","1.2234805913589142e+308":8.509554360201476e+307,"5<Kq":""}
return a/b+c*d
};
var argument5 = true;
var argument6 = false;
var argument7 = false;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[0] = [1.7976931348623157e+308,100,618,460,126,82,627,595]
argument6[82] = {"25":893,"49":"1","157":"X","242":1.0152426424332036e+308,"":"","4.358996851088688e+307":655}
argument6[7] = null
return a/b*c-d
};
var argument9 = "f>m<+W";
var argument10 = {"242":""};
var argument11 = false;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[1] = ["na","%","=|","K","T","y&7","^","}G"]
return a-b/c-d
};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument15[1.3938918493123786e+308] = ["&8","dfp","d","0","*Z!;","G,|","`"]
return a/b/c-d
};
var base_0 = [122,"1",157,783,783,"t",213,"b"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,"1",157,783,783,"t",213,"b"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,"1",157,783,783,"t",213,"b"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11,argument12)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,"1",157,783,783,"t",213,"b"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test546.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)