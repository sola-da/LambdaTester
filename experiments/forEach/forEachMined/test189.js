





var callbackArguments = [];
var argument1 = function (cssClass) {
 callbackArguments.push(arguments) 

    if (!JQLiteHasClass(element, cssClass)) {
        element.className = trim(element.className + ' ' + trim(cssClass));
    }
};
var argument2 = 7.631982852956733e+307;
var argument3 = function (mapping) {
 callbackArguments.push(arguments) 

    mapping.extra = true;
    $scope.groupConfig.push(mapping);
};
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    var parts = key.split(' ');
    if (exports.debug_mode) {
        console.warn('sending pub/sub on_ready ' + parts[0] + ', ' + parts[1]);
    }
    callback_count++;
    self.send_command(parts[0] + 'scribe', [parts[1]], callback);
};
var argument5 = r_0;
var argument6 = function (handler) {
 callbackArguments.push(arguments) 

    handler.call(null, args);
};
var argument7 = null;
var argument8 = [122,"4o","^",627,"8y2"];
var base_0 = ["L","$-^","R","EKj","={","C"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["L","$-^","R","EKj","={","C"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["L","$-^","R","EKj","={","C"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["L","$-^","R","EKj","={","C"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test189.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)