





var callbackArguments = [];
var argument1 = function (name) {
 callbackArguments.push(arguments) 

    var command = commands[name];
    if (!command)
        return;
    if (typeof command === 'string')
        return this.bindKey(command, name);
    if (typeof command === 'function')
        command = { exec: command };
    if (typeof command !== 'object')
        return;
    if (!command.name)
        command.name = name;
    this.addCommand(command);
};
var argument2 = function (element) {
 callbackArguments.push(arguments) 

    element = angular.element(element);
    var data = element.data(NG_ANIMATE_STATE);
    if (data) {
        cancelAnimations(data.animations);
        cleanup(element);
    }
};
var argument3 = [969,607,783,969,"P","%N","3>"];
var argument4 = function (id) {
 callbackArguments.push(arguments) 

    for (var j = 0; j < selectedData.length; j++) {
        if (selectedData[j] && selectedData[j].id === id) {
            newData.push(selectedData[j]);
            selectedData.shift(j);
            break;
        }
    }
};
var argument5 = function (cssClass) {
 callbackArguments.push(arguments) 

    element.className = trim((' ' + element.className + ' ').replace(/[\n\t]/g, ' ').replace(' ' + trim(cssClass) + ' ', ' '));
};
var base_0 = [126,157,100,403,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,157,100,403,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,157,100,403,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,157,100,403,607]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test424.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)