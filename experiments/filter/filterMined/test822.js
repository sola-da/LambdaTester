





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument2 = [595,100,"}","n","]c?:"];
var argument3 = function (d) {
 callbackArguments.push(arguments) 

    return __data_selection_isselectable(d);
};
var argument4 = "@";
var argument5 = false;
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    return !predicate(v);
};
var argument7 = {"3":1.4658414878049106e+308,"8":1.2962329368403766e+308,"627":714,"714":1.2802199568431656e+308,"2.298598727891349e+307":1.673345277140917e+307,"":"","b9":4.180986775347519e+307};
var argument8 = function (a) {
 callbackArguments.push(arguments) 

    return a[vars.id.value] === data[i][vars.id.value];
};
var base_0 = [1.7976931348623157e+308,-100,893]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,-100,893]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,-100,893]
var r_2= undefined
try {
r_2 = base_2.filter(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,-100,893]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test822.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)