





var callbackArguments = [];
var argument1 = function (str) {
 callbackArguments.push(arguments) 

    return str.replace(/\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}/g, function (s) {
        var code = parseInt(s.substr(2), 16);
        return regexp_safe_literal(code) ? String.fromCharCode(code) : s;
    });
};
var argument2 = [714,618,783,"W","NX","%|",460,126,"+KT","hK"];
var argument3 = function (y) {
 callbackArguments.push(arguments) 

    return (y - translate[1]) / scale;
};
var argument4 = function (i, elem) {
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
var argument5 = function (node) {
 callbackArguments.push(arguments) 

    return node.addr;
};
var base_0 = ["q@t","+","EI","5","O","oG","HdE","M`"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["q@t","+","EI","5","O","oG","HdE","M`"]
var r_1= undefined
try {
r_1 = base_1.map(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["q@t","+","EI","5","O","oG","HdE","M`"]
var r_3= undefined
try {
r_3 = base_3.map(argument5)
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
require("fs").writeFileSync("./experiments/map/mapMined/test569.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)