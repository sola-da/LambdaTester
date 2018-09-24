





var callbackArguments = [];
var argument1 = function (mql) {
 callbackArguments.push(arguments) 

    mql.removeListener(updateCurrentOptions);
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function (invFkProp) {
 callbackArguments.push(arguments) 

    if (invFkProp.relatedNavigationProperty.inverse == null) {
        entityManager._updateFkVal(invFkProp, oldValue, newValue);
    }
    ;
};
var argument5 = null;
var argument6 = null;
var argument7 = function (p) {
 callbackArguments.push(arguments) 

    p = p.trim();
    if (this.selectorNeedsScoping(p, name)) {
        p = strict ? this.applyStrictSelectorScope(p, name) : this.applySimpleSelectorScope(p, name);
    }
    r.push(p);
};
var argument8 = function (entitySet) {
 callbackArguments.push(arguments) 

    var entityTypeName = parseTypeName(entitySet.entityType, schema).messageName;
    metadataStore.setEntityTypeForResourceName(entitySet.name, entityTypeName);
    metadataStore._entityTypeResourceMap[entityTypeName] = entitySet.name;
};
var argument9 = false;
var base_0 = ["E3","E",100,"W","XE"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["E3","E",100,"W","XE"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["E3","E",100,"W","XE"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["E3","E",100,"W","XE"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test706.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)