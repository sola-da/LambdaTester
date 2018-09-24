





var callbackArguments = [];
var argument1 = function (handler) {
 callbackArguments.push(arguments) 

    var serverProxy = createServerProxy(handler.hubName, ServerConnectionBackend.server(handler.hubName));
    handler.hub.server = serverProxy;
    handler.doneFn();
};
var argument2 = function (letter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(letter)).toBe(false);
    expect(XRegExp('\\P{Letter}').test(letter)).toBe(false);
    expect(XRegExp('\\PL').test(letter)).toBe(false);
    expect(XRegExp('\\p{^L}').test(letter)).toBe(false);
    expect(XRegExp('\\p{^Letter}').test(letter)).toBe(false);
};
var argument3 = function (orthoRoleName) {
 callbackArguments.push(arguments) 

    dataCells.push(new pvc.visual.CartesianOrthoDataCell(this, 'ortho', orthoAxisIndex, orthoRoleName, dataPartValue, isStacked, nullInterpolationMode, trend));
};
var argument4 = null;
var argument5 = [126,213,242,783,618,403,82,893];
var argument6 = function (defaultValue, key) {
 callbackArguments.push(arguments) 

    if (angular.isUndefined(scope[key]) || scope[key] === null) {
        return opts[key] = defaultValue;
    } else {
        return opts[key] = scope[key];
    }
};
var base_0 = [714,49,242,460,655,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,49,242,460,655,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,49,242,460,655,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,49,242,460,655,25]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test163.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)