





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    if (relationArray._addsInProcess.indexOf(a) >= 0) {
        return false;
    }
    var inverseValue = a.getProperty(inverseProp.name);
    return inverseValue !== parentEntity;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    for (i = 0; i < len; i++) {
        if (jQuery.contains(self[i], this)) {
            return true;
        }
    }
};
var argument3 = null;
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    return item != null;
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    return this.nodeName === '#text' && $.trim($(this).text()) !== '';
};
var argument6 = true;
var argument7 = true;
var base_0 = [242,1.7976931348623157e+308,25,213,126,969,5e-324,655,242]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,1.7976931348623157e+308,25,213,126,969,5e-324,655,242]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,1.7976931348623157e+308,25,213,126,969,5e-324,655,242]
var r_2= undefined
try {
r_2 = base_2.filter(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,1.7976931348623157e+308,25,213,126,969,5e-324,655,242]
var r_3= undefined
try {
r_3 = base_3.filter(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test197.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)