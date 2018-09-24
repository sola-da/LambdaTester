





var callbackArguments = [];
var argument1 = function (index) {
 callbackArguments.push(arguments) 

    this._userIndexesToSingleDim[index] = null;
};
var argument2 = [627];
var argument3 = ["|","T","3","*","n|n","]=I","?[R","g#ab"];
var argument4 = function (container) {
 callbackArguments.push(arguments) 

    __toArray(container.entitySet).forEach(function (entitySet) {
        var entityTypeName = parseTypeName(entitySet.entityType, schema).messageName;
        metadataStore.setEntityTypeForResourceName(entitySet.name, entityTypeName);
        metadataStore._entityTypeResourceMap[entityTypeName] = entitySet.name;
    });
};
var argument5 = function (side) {
 callbackArguments.push(arguments) 

    var len_a = pvc.BasePanel.orthogonalLength[side];
    op[side] = (this.offsetPaddings[side] || 0) * (clientSize[len_a] + paddings[len_a]);
};
var argument6 = null;
var argument7 = function (plat) {
 callbackArguments.push(arguments) 

    kw.browser_min[plat.browser] = plat.version;
};
var base_0 = [595,893,157,595,0,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,157,595,0,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,893,157,595,0,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,893,157,595,0,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test386.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)