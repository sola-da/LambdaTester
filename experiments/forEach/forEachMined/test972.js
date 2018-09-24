





var callbackArguments = [];
var argument1 = function (name) {
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
var argument2 = function (node) {
 callbackArguments.push(arguments) 

    node.innerHTML = this.getRelativeTime(node.innerHTML);
};
var argument3 = ["`^}","(x","L1","M","X|","j$","$","b","soF"];
var argument4 = function (d, i) {
 callbackArguments.push(arguments) 

    d.sort(function (a, b) {
        return sortSubgroups(matrix[i][a], matrix[i][b]);
    });
};
var argument5 = function (handler) {
 callbackArguments.push(arguments) 

    delete handlers[id][handler.i];
    if ('removeEventListener' in element)
        element.removeEventListener(realEvent(handler.e), handler.proxy, eventCapture(handler, capture));
};
var base_0 = [783,893,157,1.7976931348623157e+308,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,893,157,1.7976931348623157e+308,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,893,157,1.7976931348623157e+308,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,893,157,1.7976931348623157e+308,627]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test972.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)