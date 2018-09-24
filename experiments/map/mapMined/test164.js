





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || docElem;
    while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent || docElem;
};
var argument2 = function (r) {
 callbackArguments.push(arguments) 

    if (r.makeImportant) {
        return r.makeImportant();
    } else {
        return r;
    }
};
var argument3 = {"1.4596588547220522e+308":"a","":460,"1.2960284157390719e+308":"","1.1975773311661912e+308":1.1893031039768922e+308};
var argument4 = function (v, ix) {
 callbackArguments.push(arguments) 

    meta = jra.visitNode(v, mc, nodeContext) || {};
    v = meta.node || v;
    return processMeta(mc, v, meta, function (refValue) {
        result[key][ix] = refValue();
    });
};
var argument5 = function (n) {
 callbackArguments.push(arguments) 

    return id(n) + ':' + (n.innerHTML || n.nodeValue);
};
var base_0 = ["0p","T","=Ma","-iy","="]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["0p","T","=Ma","-iy","="]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["0p","T","=Ma","-iy","="]
var r_2= undefined
try {
r_2 = base_2.map(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test164.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)