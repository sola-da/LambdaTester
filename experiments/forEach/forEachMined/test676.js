





var callbackArguments = [];
var argument1 = function (f) {
 callbackArguments.push(arguments) 

    return f(global);
};
var argument2 = true;
var argument3 = [0,460];
var argument4 = function (directive) {
 callbackArguments.push(arguments) 

    var locals = {
            $scope: scope,
            $element: $element,
            $attrs: attrs,
            $transclude: boundTranscludeFn
        };
    controller = directive.controller;
    if (controller == '@') {
        controller = attrs[directive.name];
    }
    $element.data('$' + directive.name + 'Controller', $controller(controller, locals));
};
var argument5 = function (r) {
 callbackArguments.push(arguments) 

    sel.substractPoint(r.cursor);
};
var argument6 = true;
var argument7 = {"607":"*","w":"7n&K","":655,"2f{":655};
var argument8 = function (item) {
 callbackArguments.push(arguments) 

    slots.push(me.createSlot(item, days, months, years));
};
var base_0 = ["H6bF","<","0@","_","]","k","t%","I"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["H6bF","<","0@","_","]","k","t%","I"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["H6bF","<","0@","_","]","k","t%","I"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["H6bF","<","0@","_","]","k","t%","I"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test676.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)