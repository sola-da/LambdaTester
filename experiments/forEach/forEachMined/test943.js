





var callbackArguments = [];
var argument1 = function (value) {
 callbackArguments.push(arguments) 

    output.push(value);
};
var argument2 = function (v) {
 callbackArguments.push(arguments) 

    ys[t.id].push(v.value);
};
var argument3 = function (container) {
 callbackArguments.push(arguments) 

    __toArray(container.entitySet).forEach(function (entitySet) {
        var entityTypeName = parseTypeName(entitySet.entityType, schema).messageName;
        metadataStore.setEntityTypeForResourceName(entitySet.name, entityTypeName);
        metadataStore._entityTypeResourceMap[entityTypeName] = entitySet.name;
    });
};
var argument4 = function (value, key) {
 callbackArguments.push(arguments) 

    if (key == 'class') {
        safeAddClass($element, value);
        dst['class'] = (dst['class'] ? dst['class'] + ' ' : '') + value;
    } else if (key == 'style') {
        $element.attr('style', $element.attr('style') + ';' + value);
    } else if (key.charAt(0) != '$' && !dst.hasOwnProperty(key)) {
        dst[key] = value;
        dstAttr[key] = srcAttr[key];
    }
};
var argument5 = "";
var argument6 = r_0;
var base_0 = [213,"jc",627,"3","cpN",25,"vx"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,"jc",627,"3","cpN",25,"vx"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,"jc",627,"3","cpN",25,"vx"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,"jc",627,"3","cpN",25,"vx"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test943.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)