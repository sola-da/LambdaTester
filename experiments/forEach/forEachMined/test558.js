





var callbackArguments = [];
var argument1 = function (property) {
 callbackArguments.push(arguments) 

    var name = property.name;
    var type = property.message;
    var loggingMessage = property.loggingMessage;
    if (type == 'attribute') {
        var dummy = Device[name];
    } else {
        Device[name]();
    }
    this.assertErrorInLogs(loggingMessage, 1);
};
var argument2 = function (paramName, index) {
 callbackArguments.push(arguments) 

    params[paramName] = match[index + 1];
};
var argument3 = true;
var argument4 = 3.4507431227112974e+306;
var argument5 = function (element) {
 callbackArguments.push(arguments) 

    if (element.nodeType === 1)
        children.push(element);
};
var argument6 = function (cancelFn) {
 callbackArguments.push(arguments) 

    (cancelFn || noop)(true);
};
var argument7 = true;
var base_0 = [1.7976931348623157e+308,49,100,213,403,618,157,595,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,49,100,213,403,618,157,595,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,49,100,213,403,618,157,595,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,49,100,213,403,618,157,595,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test558.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)