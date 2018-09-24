





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    data = fn(data, headers);
};
var argument2 = function (prop) {
 callbackArguments.push(arguments) 

    Object.defineProperty(enchant.gl.PointLight.prototype, prop, {
        get: function () {
            return this['_' + prop];
        },
        set: function (n) {
            this['_' + prop] = n;
            this._changedPosition = true;
        }
    });
    enchant.gl.PointLight.prototype[prop] = 0;
};
var argument3 = function (v) {
 callbackArguments.push(arguments) 

    v.onError(err);
};
var argument4 = r_0;
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    if (typeof x == 'string')
        this.exec(x, editor);
    else
        this.exec(x[0], editor, x[1]);
};
var argument6 = r_0;
var argument7 = null;
var base_0 = ["X","+!"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["X","+!"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["X","+!"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["X","+!"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test777.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)