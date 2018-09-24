





var callbackArguments = [];
var argument1 = function (eg) {
 callbackArguments.push(arguments) 

    if (!eg)
        return;
    var entities = eg.getEntities(entityStates);
    if (selected) {
        selected.push.apply(selected, entities);
    } else {
        selected = entities;
    }
};
var argument2 = r_0;
var argument3 = "M";
var argument4 = function (type) {
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
var argument5 = r_0;
var argument6 = false;
var argument7 = function (section) {
 callbackArguments.push(arguments) 

    section.style.transition = '';
};
var argument8 = function (p) {
 callbackArguments.push(arguments) 

    if (!paramNames[p]) {
        throw new Error('Missing required parameter \'' + p + '\' in state \'' + state.name + '\'');
    }
    paramNames[p] = false;
};
var base_0 = [213,-1,893,627,714,157,460,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,-1,893,627,714,157,460,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,-1,893,627,714,157,460,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,-1,893,627,714,157,460,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test973.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)