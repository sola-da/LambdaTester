





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    return unwrapOriginalValues(item, metadataStore, transformFn);
};
var argument2 = function (d, i) {
 callbackArguments.push(arguments) 

    return +value.call(pie, d, i);
};
var argument3 = "=5";
var argument4 = false;
var argument5 = function (bundleLocation) {
 callbackArguments.push(arguments) 

    load(bundleLocation);
    return getDefinition(bundleLocation).promise;
};
var argument6 = function (i, elem) {
 callbackArguments.push(arguments) 

    var val = jQuery(this).val();
    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
        return {
            name: elem.name,
            value: val.replace(rCRLF, '\r\n')
        };
    }) : {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var argument7 = false;
var base_0 = ["#","u","H","<","FL-SX"," !"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#","u","H","<","FL-SX"," !"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#","u","H","<","FL-SX"," !"]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#","u","H","<","FL-SX"," !"]
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test296.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)