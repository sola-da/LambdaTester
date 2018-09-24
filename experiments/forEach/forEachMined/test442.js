





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    d[0][id] = null;
};
var argument2 = null;
var argument3 = function (ns) {
 callbackArguments.push(arguments) 

    tlns[ns] = normalizePath(require.toUrl(ns, null, '_').replace(/(\.js)?(\?.*)?$/, ''));
};
var argument4 = false;
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    if (__data_types[t.id] === type) {
        has = true;
    }
    if (!(t.id in __data_types) && type === 'line') {
        has = true;
    }
};
var argument6 = false;
var argument7 = false;
var argument8 = function (prop) {
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
var argument9 = true;
var base_0 = ["7>#u","rB","P:T","y)","R","Z","F?","EfR-","Wa","@,"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7>#u","rB","P:T","y)","R","Z","F?","EfR-","Wa","@,"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7>#u","rB","P:T","y)","R","Z","F?","EfR-","Wa","@,"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7>#u","rB","P:T","y)","R","Z","F?","EfR-","Wa","@,"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test442.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)