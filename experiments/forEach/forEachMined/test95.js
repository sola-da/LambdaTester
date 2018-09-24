





var callbackArguments = [];
var argument1 = function (field) {
 callbackArguments.push(arguments) 

    field.setDisabled(newDisabled);
};
var argument2 = function (x) {
 callbackArguments.push(arguments) 

    acc.push(this.node);
};
var argument3 = function (signal) {
 callbackArguments.push(arguments) 

    signal.remove();
};
var argument4 = null;
var argument5 = function (method) {
 callbackArguments.push(arguments) 

    Events.prototype[method] = function (obj, name, callback) {
        var listeningTo = this._listeningTo || (this._listeningTo = {});
        var id = obj._listenId || (obj._listenId = uniqueId('l'));
        listeningTo[id] = obj;
        if (!callback && typeof name === 'object')
            callback = this;
        obj[listenMethods[method]](name, callback, this);
        return this;
    };
};
var argument6 = {"705":157,"6.367825909238471e+307":8.500686108205199e+307,"":5e-324,"-":1.2588757789652546e+308};
var base_0 = [595,-100,403,59,607,"("]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,-100,403,59,607,"("]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,-100,403,59,607,"("]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,-100,403,59,607,"("]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test95.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)