





var callbackArguments = [];
var argument1 = function (needle) {
 callbackArguments.push(arguments) 

    return every(arrs, function (haystack) {
        return contains(haystack, needle);
    });
};
var argument2 = function (d, i) {
 callbackArguments.push(arguments) 

    return d & 1;
};
var argument3 = {"627":157,"705":1.5353607029470389e+307,"893":460,"7.376860728058408e+307":"|2H","":"8","1.2550724163441896e+308":1.7976931348623157e+308,"-1":1.4849901113530571e+308,"4.395867260275494e+307":8.746279461342109e+307};
var argument4 = function () {
 callbackArguments.push(arguments) 

    var node = this;
    return emptyArray.some.call($this, function (parent) {
        return $.contains(parent, node);
    });
};
var argument5 = null;
var argument6 = function (index) {
 callbackArguments.push(arguments) 

    var element = jQuery(this);
    var change = element.data('gridstring').charAt(0) <= highestRow && element.data('gridstring').charAt(2) <= highestColumn;
    return change;
};
var argument7 = null;
var argument8 = "5";
var base_0 = [595,100,25,627,122,783,403,25,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,100,25,627,122,783,403,25,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,100,25,627,122,783,403,25,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test940.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)