





var callbackArguments = [];
var argument1 = function (node) {
 callbackArguments.push(arguments) 

    if (node.nodeType == 1)
        return node;
};
var argument2 = false;
var argument3 = false;
var argument4 = function (m) {
 callbackArguments.push(arguments) 

    var cutAt = m.indexOf('.');
    if (cutAt === -1) {
        cutAt = m.indexOf('_');
    }
    var root = m.substring(0, cutAt);
    m = m.substring(cutAt + 1);
    var rootPath = Ink.getPath(root);
    return [
        '<script type="text/javascript" src="',
        rootPath,
        m.replace(/\./g, '/'),
        '/"></script>'
    ].join('');
};
var argument5 = false;
var argument6 = function () {
 callbackArguments.push(arguments) 

    var elements = jQuery.prop(this, 'elements');
    return elements ? jQuery.makeArray(elements) : this;
};
var argument7 = r_0;
var argument8 = null;
var argument9 = function (i, elem) {
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
var argument10 = false;
var argument11 = false;
var base_0 = ["=",157,"?SuK",823,"X"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=",157,"?SuK",823,"X"]
var r_3= undefined
try {
r_3 = base_3.map(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/map/mapMined/test438.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)