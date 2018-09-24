





var callbackArguments = [];
var argument1 = function (i, elem) {
 callbackArguments.push(arguments) 

    var val = jQuery(this).val();
    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val, i) {
        return {
            name: elem.name,
            value: val
        };
    }) : {
        name: elem.name,
        value: val
    };
};
var argument2 = function (field) {
 callbackArguments.push(arguments) 

    var facet = data.facets[field];
    return {
        field: field,
        terms: facet.terms
    };
};
var argument3 = 1.7976931348623157e+308;
var argument4 = function (dimName) {
 callbackArguments.push(arguments) 

    return atoms[dimName].value;
};
var argument5 = 213;
var argument6 = function (val) {
 callbackArguments.push(arguments) 

    return val === key ? null : keyMap[val];
};
var argument7 = null;
var base_0 = ["awm=l","A","p_k"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["awm=l","A","p_k"]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["awm=l","A","p_k"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["awm=l","A","p_k"]
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
require("fs").writeFileSync("./experiments/map/mapMined/test400.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)