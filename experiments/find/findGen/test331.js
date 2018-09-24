





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument1 = true
return a/b-c
};
var argument2 = " ";
var argument3 = true;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument6['AA@'] = {"655":"Wqk","Vn":242,"ywb":9.291735790748052e+307,"1.5111969829905707e+308":1.7976931348623157e+308,"6.466804742912113e+307":0,"1.4423799716660771e+308":1.6840585013842971e+308,"1.6286262235011565e+308":607}
return a+b-c
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument8[8] = 0
return a*b-c
};
var argument8 = 3.63341681826856e+307;
var argument9 = {"49":"","82":"v","242":1.955364399068497e+307,"893":"","":"","9.412621796727743e+307":"`","(s-":"","-1":5.879268318203237e+307,"u":"j"};
var argument10 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[2] = "I"
base_3[6] = [714,595,"Tw","a","Ai","Yxa(",823,5e-324]
argument11['j'] = {"0":"WPG","82":"","213":4.21486649171757e+307,"4.507252229605276e+307":"RY","Tk":"","U":"MLx{","9.876632004293613e+307":595,"5.024524815253774e+306":"{","":213}
return a/b-c
};
var base_0 = ["9foT","$D","a]","Ys"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9foT","$D","a]","Ys"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9foT","$D","a]","Ys"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9foT","$D","a]","Ys"]
var r_3= undefined
try {
r_3 = base_3.find(argument10)
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
require("fs").writeFileSync("./experiments/find/findGen/test331.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)