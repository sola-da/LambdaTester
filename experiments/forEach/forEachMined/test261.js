





var callbackArguments = [];
var argument1 = function (v) {
 callbackArguments.push(arguments) 

    v.angle = Math.atan2(v[0] - cx, v[1] - cy);
};
var argument2 = true;
var argument3 = null;
var argument4 = function (value, key) {
 callbackArguments.push(arguments) 

    locals[key] = isString(value) ? $injector.get(value) : $injector.invoke(value);
};
var argument5 = r_1;
var argument6 = function (k, v) {
 callbackArguments.push(arguments) 

    _r = room[k];
    _r.name = k;
};
var argument7 = 1.2490711486315393e+308;
var argument8 = function (selectedTransclude) {
 callbackArguments.push(arguments) 

    var selectedScope = scope.$new();
    selectedScopes.push(selectedScope);
    selectedTransclude.transclude(selectedScope, function (caseElement) {
        var anchor = selectedTransclude.element;
        selectedElements.push(caseElement);
        animate.enter(caseElement, anchor.parent(), anchor);
    });
};
var base_0 = [823,100,"y(","5JI"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [823,100,"y(","5JI"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [823,100,"y(","5JI"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [823,100,"y(","5JI"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test261.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)