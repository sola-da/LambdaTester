





var callbackArguments = [];
var argument1 = {"25":7.744506219211842e+307,"969":"1","7.92871485781261e+307":"d","":"","HE":""};
var argument2 = [25,"G"];
var argument3 = r_0;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[25] = {"":"","5.679694559888734e+307":1.1781332294288674e+308}
argument2[0] = false
return a*b*c*d
};
var argument5 = null;
var argument6 = {"99":"","242":1.30623148789356e+308,"":"","k":1.5742588324624261e+308,":":"","`Ei":969,"BK7":"","c9":4.3134993151644504e+306};
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument6[213] = ""
argument5[0] = {"5.246456772914463e+307":"","6.938448406309804e+307":893,"7.240280692924666e+307":"p6MM","r)":"^","F69!y":1.663833015683432e+308,"":"","[":"","1.0960672535087112e+308":213}
argument6 = null
return a/b*c/d
};
var argument9 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument11[2] = true
return a/b*c-d
};
var argument10 = r_1;
var argument11 = 6.396016056651079e+307;
var argument12 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[126] = null
return a/b*c/d
};
var argument13 = 7.03798609337572e+307;
var base_0 = [126,"D",213,607,"y",783]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,"D",213,607,"y",783]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7,argument8)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,"D",213,607,"y",783]
var r_2= undefined
try {
r_2 = base_2.reduce(argument9,argument10,argument11)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,"D",213,607,"y",783]
var r_3= undefined
try {
r_3 = base_3.reduce(argument12,argument13)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test265.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)