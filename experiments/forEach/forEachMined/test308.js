





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    angular.isDefined(attr[key]) && attr.$observe(key, function (newValue) {
        timepicker.$options[key] = dateParser.getTimeForAttribute(key, newValue);
        !isNaN(timepicker.$options[key]) && timepicker.$build();
        validateAgainstMinMaxTime(controller.$dateValue);
    });
};
var argument2 = false;
var argument3 = function (s) {
 callbackArguments.push(arguments) 

    aq.queue(function (lock) {
        console.log('Copying `chan_' + name + '_library`');
        queryNew('INSERT INTO `chan_' + name + '_library` VALUES ?', [s], function () {
            lock.release();
        });
    });
};
var argument4 = [126,627,893,969,627];
var argument5 = function (axis) {
 callbackArguments.push(arguments) 

    var axisKey = vars[axis].value;
    if (requirements.indexOf(axis) >= 0 && axisKey && vars[axis].scale.value === 'continuous') {
        exceptions.push(axisKey);
        nestedData.key(function (d) {
            return fetchValue(vars, d, axisKey);
        });
    }
};
var argument6 = true;
var argument7 = function (value, key) {
 callbackArguments.push(arguments) 

    callbackFn.call(thisArg, key, key, $__13);
};
var argument8 = r_3;
var argument9 = null;
var base_0 = [242,"<sp","Q]"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"<sp","Q]"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"<sp","Q]"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"<sp","Q]"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test308.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)