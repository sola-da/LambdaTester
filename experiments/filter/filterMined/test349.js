





var callbackArguments = [];
var argument1 = function (n) {
 callbackArguments.push(arguments) 

    return !(vars.size.value in n);
};
var argument2 = function (item, i) {
 callbackArguments.push(arguments) 

    return i % 2 == 0;
};
var argument3 = "d|";
var argument4 = r_1;
var argument5 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument6 = {"100":9.580961166800025e+307,"1.5314336445272145e+308":9.406512019037022e+306,"3.294657973746234e+307":"","Y":"","1.0845948229705667e+308":714,"":"","q":1.5472632292957326e+308,"6.108083771579453e+307":"uX","8.749676224902249e+307":""};
var argument7 = function (v) {
 callbackArguments.push(arguments) 

    return typeof v.x !== 'undefined';
};
var argument8 = 5.366354475733698e+307;
var base_0 = [100,627,403]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,627,403]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,627,403]
var r_2= undefined
try {
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test349.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)