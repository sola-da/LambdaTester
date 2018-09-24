





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return e.indexOf('Error') !== 0 && e.indexOf('d3plus.js:') < 0 && e.indexOf('d3plus.min.js:') < 0;
};
var argument2 = function (comment) {
 callbackArguments.push(arguments) 

    return c.test(comment.value);
};
var argument3 = 1.7850133120008017e+308;
var argument4 = null;
var argument5 = function (message) {
 callbackArguments.push(arguments) 

    if (tabInfo.subscriptions.has(message.action)) {
        passMessageToDevTools(message, tabId);
        return false;
    }
    return true;
};
var argument6 = function (ve) {
 callbackArguments.push(arguments) 

    return ve.property && (ve.property.name === propertyName || propertyName.indexOf('.') != -1 && ve.propertyName == propertyName);
};
var argument7 = [714,403,893,242,242];
var argument8 = false;
var base_0 = [-1,714,655,122,122]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,714,655,122,122]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,714,655,122,122]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,714,655,122,122]
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test719.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)