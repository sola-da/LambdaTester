





var callbackArguments = [];
var argument1 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument2[627][126] = true
argument2[7] = 6.374488817659927e+307
return a-b*c/d
};
var argument2 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument3[403] = [100,157,157,714,618,714,25]
argument4[2] = {"o":"","4.409031420395736e+307":2.305454908377445e+307,"":"B"}
argument3[1.1532786076532189e+308] = true
return a-b+c-d
};
var argument3 = true;
var argument4 = [5e-324,893,627,823,82,-100,714];
var argument5 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument7['*c'] = false
argument5[0] = null
argument7[7.889879335222838e+307] = {"122":"","607":1.4240329237380115e+308,"655":122,"":100,":":"","6.077615052327841e+307":"w","8.951474069466871e+307":"","6.662035277069856e+307":1.3949919502493468e+308,"2.32961323776753e+307":"Q:1","7.419531624425143e+307":"o"}
return a+b+c/d
};
var argument6 = null;
var argument7 = 7.274479374578539e+307;
var argument8 = function callback(a,b,c,d) { 
callbackArguments.push(JSON.stringify(arguments))
argument10[3] = [-1,595,-1,-1,843,714,-100,0]
argument8[893] = 8.183196933015015e+307
return a+b/c/d
};
var argument9 = "";
var argument10 = "";
var base_0 = [595,"8HDG",82,"lkV","0","j"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"8HDG",82,"lkV","0","j"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"8HDG",82,"lkV","0","j"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"8HDG",82,"lkV","0","j"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceGen/test742.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)