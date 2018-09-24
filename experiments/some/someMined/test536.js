





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    return element;
};
var argument2 = null;
var argument3 = ["C","V",655,126,"f",893,823,"Q!6"];
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    return typeof t === 'object';
};
var argument5 = r_0;
var argument6 = [59,893];
var argument7 = function (ban) {
 callbackArguments.push(arguments) 

    return ban.mask === mask;
};
var argument8 = {"9":1.5539425816593359e+308,"49":969,"100":1.1286612133093665e+308,"1.3403385710515657e+308":"","h":"","v":"#","2.4784805751328714e+306":607,"1.3540320273759756e+308":460,"":"3lU","5.09837045847676e+307":""};
var argument9 = r_2;
var argument10 = function (r) {
 callbackArguments.push(arguments) 

    return comparePoints(r.start, start) <= 0 && comparePoints(r.end, end) >= 0;
};
var base_0 = ["#",82,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#",82,893]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#",82,893]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#",82,893]
var r_3= undefined
try {
r_3 = base_3.some(argument10)
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
require("fs").writeFileSync("./experiments/some/someMined/test536.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)