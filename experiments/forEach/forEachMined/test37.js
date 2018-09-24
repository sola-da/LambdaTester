





var callbackArguments = [];
var argument1 = function (prop) {
 callbackArguments.push(arguments) 

    Object.defineProperty(enchant.gl.Sprite3D.prototype, prop, {
        get: function () {
            return this['_' + prop];
        },
        set: function (n) {
            this['_' + prop] = n;
            this._changedTranslation = true;
        }
    });
};
var argument2 = null;
var argument3 = function (dataCells, index) {
 callbackArguments.push(arguments) 

    var axis = this.axes[pvc.buildIndexedId(type, index)];
    axis.isBound() || axis.bind(dataCells);
};
var argument4 = r_1;
var argument5 = function (entity) {
 callbackArguments.push(arguments) 

    that._linkRelatedEntities(entity);
};
var argument6 = null;
var argument7 = function (dimGroupName) {
 callbackArguments.push(arguments) 

    var L = itemLogicalGroup[dimGroupName];
    L > 0 && add(dimGroupName, 0, L);
};
var argument8 = r_3;
var argument9 = null;
var base_0 = [82,595,0,-100,655,82,627,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,595,0,-100,655,82,627,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,595,0,-100,655,82,627,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,595,0,-100,655,82,627,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test37.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)