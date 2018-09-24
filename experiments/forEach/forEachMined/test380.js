





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    _counter[id]--;
    if (_counter[id] == 0) {
        this.globals[id].deactivate();
    }
};
var argument2 = false;
var argument3 = function (directive) {
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
var argument4 = "";
var argument5 = function (t) {
 callbackArguments.push(arguments) 

    format_key(t);
};
var argument6 = false;
var argument7 = function (ep) {
 callbackArguments.push(arguments) 

    request.put(ep, { form: { version: version } }, function (err, res) {
        console.log('notified endpoint', ep, res.statusCode, err);
    });
};
var argument8 = null;
var base_0 = ["e","o","%^","$","A"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e","o","%^","$","A"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e","o","%^","$","A"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e","o","%^","$","A"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test380.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)