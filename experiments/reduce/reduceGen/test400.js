





var callbackArguments = [];
var argument1 = ["^L",82,714,893,"H9","G"];
var argument2 = null;
var argument3 = null;
var argument4 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument1[126] = null
argument1[4] = {"82":",","893":607,"7.935217679173634e+307":9.373324394295397e+307,"":893,"a$":1.1283212348116837e+308,"r]0":"c","8.213535648594237e+307":627}
return a*b*c+d
};
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
base_1[1][3] = null
return a/b+c/d
};
var argument6 = {"893":1.1793212048346937e+308,"":-1};
var argument7 = true;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = false
base_2['length'] = {"59":1.2488296558751584e+308,"969":0,"":3.3301347748057037e+307,"0+DI":"","R":"HOX","1.7976931348623157e+308":"","1.5140422635951814e+308":"","u":""}
argument10['18{'] = {"893":""}
return a+b/c-d
};
var argument9 = "";
var argument10 = null;
var argument11 = 823;
var argument12 = {"242":0,"893":595,"q1c":5.358765451703013e+307,"":"L","2.3057599807013214e+307":2.3212189376878404e+307,"-1":403,"W":4.744095669110149e+307,"1.2810537680417977e+308":"","1.0436754198034421e+308":403};
var argument13 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument12[90] = ["B:","ilca"]
argument12[25] = {"":403}
return a+b/c/d
};
var base_0 = ["T",242,"N",714,"g",783,"c"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3,argument4)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["T",242,"N",714,"g",783,"c"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument5,argument6,argument7)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["T",242,"N",714,"g",783,"c"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["T",242,"N",714,"g",783,"c"]
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test400.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)