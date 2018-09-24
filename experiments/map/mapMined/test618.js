





var callbackArguments = [];
var argument1 = function (atom) {
 callbackArguments.push(arguments) 

    return atom.label;
};
var argument2 = ["twf","7hd","In","p","geUE","F","M","Sg"];
var argument3 = function (i, elem) {
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
var argument4 = null;
var argument5 = null;
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    return value === target ? null : value;
};
var argument7 = 3.6985111301903724e+307;
var argument8 = function (val) {
 callbackArguments.push(arguments) 

    return keyMap[val];
};
var base_0 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,893,"F_",655,"&5l","O?",242,627,893]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test618.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)