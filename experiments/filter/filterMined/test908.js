





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument2 = {"714":"","843":"","969":"","zg":"6i!|","1.3595757737181653e+308":"3","$":"y","":122,"1.1547181404281835e+308":157};
var argument3 = function (item, i) {
 callbackArguments.push(arguments) 

    return i % 2 == 0;
};
var argument4 = true;
var argument5 = function (e) {
 callbackArguments.push(arguments) 

    return !_isNamedBlankNode(e);
};
var argument6 = "lRfb";
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return x.error;
};
var base_0 = [100,618,1.7976931348623157e+308,100,100,0,157]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,618,1.7976931348623157e+308,100,100,0,157]
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
r_2 = base_2.filter(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test908.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)