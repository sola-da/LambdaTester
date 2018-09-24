





var callbackArguments = [];
var argument1 = function (value, key) {
 callbackArguments.push(arguments) 

    callback.call(context, key, key, entireSet);
};
var argument2 = null;
var argument3 = null;
var argument4 = function (i) {
 callbackArguments.push(arguments) 

    Mousetrap.unbind([i.toString()], function () {
        return _this.seek(i * 10);
    });
};
var argument5 = function (key) {
 callbackArguments.push(arguments) 

    child[key] = parent[key];
};
var argument6 = function (name) {
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
var base_0 = [59,"6",82,460,"Q$","dqN","#",","]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,"6",82,460,"Q$","dqN","#",","]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,"6",82,460,"Q$","dqN","#",","]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,"6",82,460,"Q$","dqN","#",","]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test802.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)