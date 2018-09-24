





var callbackArguments = [];
var argument1 = function (elt) {
 callbackArguments.push(arguments) 

    if (elt.value === v && !elt.undef) {
        if (elt.unused === true) {
            elt.unused = false;
        }
        return v;
    }
};
var argument2 = function (element) {
 callbackArguments.push(arguments) 

    return !isEmpty(element.gestures);
};
var argument3 = "N*rz";
var argument4 = function () {
 callbackArguments.push(arguments) 

    var i = 0;
    for (; i < l; i++) {
        if (jQuery.contains(this, targets[i])) {
            return true;
        }
    }
};
var argument5 = 82;
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return isValue(d.value);
};
var argument7 = null;
var base_0 = [25,82,157,618,705]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,82,157,618,705]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,82,157,618,705]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,82,157,618,705]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test749.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)