





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    values.push(item.get(attr));
};
var argument2 = 6.005486792778312e+307;
var argument3 = null;
var argument4 = function (name) {
 callbackArguments.push(arguments) 

    wsWidgetProto[name] = function (val, force) {
        if (!this._init || force || val !== this.options[name]) {
            this.element.prop(name, this.formatValue(val));
            this.options[name] = val;
            this._propertyChange(name);
            this.mirrorValidity();
        }
    };
};
var argument5 = function (n) {
 callbackArguments.push(arguments) 

    B(t, n, e);
};
var argument6 = null;
var argument7 = true;
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
var argument9 = "";
var base_0 = [">","v8|","y","8","R","x"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [">","v8|","y","8","R","x"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [">","v8|","y","8","R","x"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [">","v8|","y","8","R","x"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test697.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)