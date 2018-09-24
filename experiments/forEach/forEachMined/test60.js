





var callbackArguments = [];
var argument1 = function (method) {
 callbackArguments.push(arguments) 

    if (!Buffer.prototype[method])
        return;
    MongooseBuffer.prototype[method] = new Function('var ret = Buffer.prototype.' + method + '.apply(this, arguments);' + 'this._markModified();' + 'return ret;');
};
var argument2 = function (cancelFn) {
 callbackArguments.push(arguments) 

    (cancelFn || noop)(true);
};
var argument3 = true;
var argument4 = function (range) {
 callbackArguments.push(arguments) 

    session.removeMarker(range.markerId);
    range.markerId = null;
};
var argument5 = function (value, key) {
 callbackArguments.push(arguments) 

    if (value)
        xhr.setRequestHeader(key, value);
};
var base_0 = ["+","vQ",">Z","X","Y","iW%","`ln","9","-"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+","vQ",">Z","X","Y","iW%","`ln","9","-"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+","vQ",">Z","X","Y","iW%","`ln","9","-"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+","vQ",">Z","X","Y","iW%","`ln","9","-"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test60.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)