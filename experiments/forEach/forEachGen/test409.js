





var callbackArguments = [];
var argument1 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_0[0][0] = ["jHvQ",460,"Xh",823,82,"`",25,"RcMJ"]
argument2[2] = {"893":"a","":"[","6.795784157389009e+307":"","}":"","h":1.4794037712942584e+308,":(":1.5198801044896707e+308}
return a/b+c
};
var argument2 = {"1.2223466590438952e+308":"","q!Y":8.142116820073286e+307,"2.5767464912706133e+307":157};
var argument3 = 969;
var argument4 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument5[7] = false
return a/b/c
};
var argument5 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
base_2[0][823] = true
return a+b+c
};
var argument6 = true;
var argument7 = 1.5461740157196347e+307;
var argument8 = function callback(a,b,c) { 
callbackArguments.push(JSON.stringify(arguments))
argument9[6] = [460,49,">!","5"]
argument9[4] = 126
return a/b/c
};
var argument9 = 1.206867829860476e+308;
var argument10 = r_1;
var base_0 = [59,969,"e"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,969,"e"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,969,"e"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,969,"e"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachGen/test409.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)