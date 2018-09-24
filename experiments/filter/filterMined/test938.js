





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return !d.disabled;
};
var argument2 = null;
var argument3 = false;
var argument4 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument5 = {"25":"F","W|Z;-":893,"":49,"2.154778380009414e+307":""};
var argument6 = ["HL","[Je7t"];
var argument7 = function (needle) {
 callbackArguments.push(arguments) 

    return !some(arrs, function (haystack) {
        return contains(haystack, needle);
    });
};
var argument8 = false;
var argument9 = function (el) {
 callbackArguments.push(arguments) 

    return b.indexOf(el) >= 0;
};
var argument10 = 714;
var base_0 = ["A","h{"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.filter(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument9,argument10)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test938.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)