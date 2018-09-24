





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    return fn.apply(session, [element].concat(args));
};
var argument2 = true;
var argument3 = function () {
 callbackArguments.push(arguments) 

    return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
};
var argument4 = {"":157,"8.935083711567212e+307":403,"1.7169248976936618e+307":2.9752756153898e+307,"c":";","t":403,"UN":-1,"@":"","(7":"i","2.4669632337910925e+307":"c<","O":1.78436704435907e+308};
var argument5 = function (i, elem) {
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
var argument6 = function (n) {
 callbackArguments.push(arguments) 

    return dojox.fx.addClass(n, cssClass, args);
};
var argument7 = "MF";
var base_0 = [403,714,403,213,893,157,893,460,893,627]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,714,403,213,893,157,893,460,893,627]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,714,403,213,893,157,893,460,893,627]
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,714,403,213,893,157,893,460,893,627]
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
require("fs").writeFileSync("./experiments/map/mapMined/test229.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)