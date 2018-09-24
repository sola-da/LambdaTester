





var callbackArguments = [];
var argument1 = function (prop) {
 callbackArguments.push(arguments) 

    Object.defineProperty(enchant.gl.Mesh.prototype, prop, {
        get: function () {
            return this['_' + prop]._array;
        },
        set: function (array) {
            this['_' + prop]._array = array;
            if (this._appear) {
                this['_' + prop]._bufferData();
            }
        }
    });
};
var argument2 = function (c) {
 callbackArguments.push(arguments) 

    arr.push(fetchValue(vars, n, c));
};
var argument3 = 5.395758877204768e+307;
var argument4 = function (fn) {
 callbackArguments.push(arguments) 

    fn();
};
var argument5 = null;
var argument6 = false;
var argument7 = function (jq) {
 callbackArguments.push(arguments) 

    jq.shimConfig = shimConfig;
    jq.baseUrl = baseUrl;
    testLib(t, jq);
};
var argument8 = null;
var base_0 = [1.7976931348623157e+308,843,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,843,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,843,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,843,213]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test365.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)