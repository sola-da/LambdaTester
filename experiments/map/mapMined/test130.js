





var callbackArguments = [];
var argument1 = function (p, i) {
 callbackArguments.push(arguments) 

    return [
        i,
        Math.abs(p - median) / mad
    ];
};
var argument2 = 6.523235211501595e+307;
var argument3 = function (p) {
 callbackArguments.push(arguments) 

    p.isNumber = vg.isNumber(p[1]);
    return p;
};
var argument4 = r_1;
var argument5 = false;
var argument6 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument7 = null;
var argument8 = function (i, elem) {
 callbackArguments.push(arguments) 

    var val = jQuery(this).val();
    return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val, i) {
        return {
            name: elem.name,
            value: val.replace(rCRLF, '\r\n')
        };
    }) : {
        name: elem.name,
        value: val.replace(rCRLF, '\r\n')
    };
};
var base_0 = [49,59,618,242,1.7976931348623157e+308,655,59,5e-324,-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,59,618,242,1.7976931348623157e+308,655,59,5e-324,-100]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,59,618,242,1.7976931348623157e+308,655,59,5e-324,-100]
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,59,618,242,1.7976931348623157e+308,655,59,5e-324,-100]
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
require("fs").writeFileSync("./experiments/map/mapMined/test130.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)