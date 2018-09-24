





var callbackArguments = [];
var argument1 = function (doc, index) {
 callbackArguments.push(arguments) 

    res.push(callback.call(thisArg, doc, index, self));
};
var argument2 = function (event) {
 callbackArguments.push(arguments) 

    $$.fn[event] = function (callback) {
        return this.on(event, callback);
    };
};
var argument3 = "";
var argument4 = function (prop) {
 callbackArguments.push(arguments) 

    webshims.defineNodeNamesProperty(nodeNames, prop, {
        prop: {
            set: function (val) {
                $.attr(this, prop, val);
            },
            get: function () {
                return $.attr(this, prop) || '';
            }
        }
    });
};
var argument5 = null;
var argument6 = ["t",122,100];
var argument7 = function (type) {
 callbackArguments.push(arguments) 

    var axes = this.axesByType[type];
    axes && axes.forEach(this._setCartAxisScaleRange, this);
};
var argument8 = null;
var argument9 = false;
var base_0 = ["@",705]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["@",705]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["@",705]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["@",705]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test296.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)