





var callbackArguments = [];
var argument1 = function (handler) {
 callbackArguments.push(arguments) 

    var serverProxy = createServerProxy(handler.hubName, ServerConnectionBackend.server(handler.hubName));
    handler.hub.server = serverProxy;
    handler.doneFn();
};
var argument2 = 3.3830534794569193e+307;
var argument3 = "";
var argument4 = function (t) {
 callbackArguments.push(arguments) 

    r.indexOf(t) < 0 && i.push(t);
};
var argument5 = function (name) {
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
var argument6 = {"607":"","":-100,"K":705};
var argument7 = [595,705,893,-100,969,969,714,82,82];
var argument8 = function (path) {
 callbackArguments.push(arguments) 

    var module = require('./' + path);
    for (var i in module) {
        classes[i] = module[i];
    }
};
var argument9 = 7.522371141400615e+307;
var argument10 = null;
var base_0 = [969,893,783]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,893,783]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,893,783]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,893,783]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test557.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)