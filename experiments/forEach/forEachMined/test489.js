





var callbackArguments = [];
var argument1 = function (type) {
 callbackArguments.push(arguments) 

    var desc = descs[type];
    if (desc) {
        if (type === 'prop') {
            desc = $.extend({ writeable: true }, desc);
        } else {
            desc = $.extend({}, desc, { writeable: true });
        }
        extendQ[type](nodeName, prop, desc);
        if (nodeName != '*' && webshims.cfg.extendNative && type == 'prop' && desc.value && $.isFunction(desc.value)) {
            extendNativeValue(nodeName, prop, desc);
        }
        descs[type] = desc;
    }
};
var argument2 = r_0;
var argument3 = function (expression, key) {
 callbackArguments.push(arguments) 

    whensExpFns[key] = $interpolate(expression.replace(BRACE, startSymbol + numberExp + '-' + offset + endSymbol));
};
var argument4 = r_0;
var argument5 = function (name) {
 callbackArguments.push(arguments) 

    this._readDim(name, reader);
};
var argument6 = false;
var argument7 = false;
var argument8 = function (listener) {
 callbackArguments.push(arguments) 

    try {
        listener();
    } catch (e) {
        FBTrace.sysout('SelectionController.selectionChanged; EXCEPTION ' + e, e);
        FBTestApp.FBTest.exception('SelectionController', e);
    }
};
var argument9 = null;
var base_0 = [893,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,25]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test489.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)