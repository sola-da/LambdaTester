





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    return number(c);
};
var argument2 = null;
var argument3 = null;
var argument4 = function (b) {
 callbackArguments.push(arguments) 

    return [
        b.ip,
        b.reason
    ];
};
var argument5 = null;
var argument6 = null;
var argument7 = function (x) {
 callbackArguments.push(arguments) 

    return +x;
};
var argument8 = function (i, elem) {
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
var argument9 = null;
var base_0 = [242,783,122,823,242,893,460,607,25,893]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,783,122,823,242,893,460,607,25,893]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,783,122,823,242,893,460,607,25,893]
var r_2= undefined
try {
r_2 = base_2.map(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,783,122,823,242,893,460,607,25,893]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test24.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)