





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument2['C'] = {"100":"Lt","403":7.752152948882427e+307,"h":"","1.3257464590910998e+306":"","3.0981775435390995e+307":0,"IM":"WF+;eo1-","+L":1.5461302893782525e+308}
return a*b*c
};
var argument2 = {"403":893,"-1":"h","n]S":"","1.5421272919977366e+308":"","8.27789652657549e+307":""};
var argument3 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument3 = {"=":"3]V"}
base_1[1][3.5329845145600404e+307] = false
argument5 = null
return a/b/c
};
var argument4 = false;
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument7[-100] = [705,59,618,0,-100,607,893]
argument7[1.4034744228995816e+308] = null
base_2[1] = ""
return a+b/c
};
var argument6 = {"0":"S","":3.049256285747176e+307,"=":595,"8.929077467327616e+307":1.4773889386986647e+308,"*_":"ge","*&":1.7505817643802025e+308};
var argument7 = false;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[2] = false
return a+b+c
};
var base_0 = [460,607,823,783,100,49]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,607,823,783,100,49]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,607,823,783,100,49]
var r_3= undefined
try {
r_3 = base_3.filter(argument8)
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
require("fs").writeFileSync("./experiments/filter/filterGen/test952.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)