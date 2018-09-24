





var callbackArguments = [];
var argument1 = function (method) {
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
var argument2 = true;
var argument3 = null;
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    if (!this.isRoot || !skip) {
        acc = cb.call(this, acc, x);
    }
};
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    stats[valu"Error"]++;
};
var argument6 = true;
var argument7 = function (collection) {
 callbackArguments.push(arguments) 

    browserDbInstance[collection] = getCollectionApiInstance(collection);
};
var argument8 = "";
var base_0 = ["M","^==","7","d","_","JfS","oY","m%9","6"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["M","^==","7","d","_","JfS","oY","m%9","6"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["M","^==","7","d","_","JfS","oY","m%9","6"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["M","^==","7","d","_","JfS","oY","m%9","6"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test521.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)