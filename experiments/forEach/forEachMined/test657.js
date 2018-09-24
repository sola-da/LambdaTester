





var callbackArguments = [];
var argument1 = function (prop) {
 callbackArguments.push(arguments) 

    Object.defineProperty(enchant.gl.Camera3D.prototype, prop, {
        get: function () {
            return this['_' + prop];
        },
        set: function (n) {
            this['_' + prop] = n;
            this._changedUpVector = true;
        }
    });
};
var argument2 = null;
var argument3 = null;
var argument4 = function (invFkProp) {
 callbackArguments.push(arguments) 

    if (invFkProp.relatedNavigationProperty.inverse == null) {
        entityManager._updateFkVal(invFkProp, oldValue, newValue);
    }
    ;
};
var argument5 = function (dir) {
 callbackArguments.push(arguments) 

    var filename = dir + '/config/routes.js';
    if (!fileLoader.fileExists(filename))
        return;
    try {
        router.init(app, require(filename)(app));
    } catch (e) {
        console.error('Error initializing routes', e.stack);
        throw e;
    }
};
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    if (v !== '1')
        msg += v;
};
var base_0 = [618,25,893,607,783,213,969,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [618,25,893,607,783,213,969,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [618,25,893,607,783,213,969,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [618,25,893,607,783,213,969,-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test657.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)