





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    var elementData = element.data(NG_ANIMATE_CSS_DATA_KEY);
    if (elementData) {
        (elementData.closeAnimationFn || noop)();
    }
};
var argument2 = null;
var argument3 = function (funcName) {
 callbackArguments.push(arguments) 

    var oldValue = oldSummary[funcName](), newValue = newSummary[funcName]();
    if (oldValue !== newValue) {
        diffMap[funcName] = newValue;
    }
};
var argument4 = function (val, i) {
 callbackArguments.push(arguments) 

    style += (i > 0 ? ',' : '') + (index * staggerDelay + parseInt(val, 10)) + 's';
};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    style += item + ':' + getCSSProperty(element, container, item) + ';';
};
var argument6 = {"0":"","]yUW":82,"":"y","4.2101292166641446e+307":""};
var base_0 = [714,403,-1,969,126]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,403,-1,969,126]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,403,-1,969,126]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,403,-1,969,126]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test685.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)