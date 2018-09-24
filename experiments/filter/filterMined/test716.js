





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d[vars.id.value] == vars.focus.value[0];
};
var argument2 = null;
var argument3 = false;
var argument4 = function (commandObj, idx, arr) {
 callbackArguments.push(arguments) 

    return commandObj.dialog;
};
var argument5 = function (message) {
 callbackArguments.push(arguments) 

    if (tabInfo.subscriptions.has(message.action)) {
        passMessageToDevTools(message, tabId);
        return false;
    }
    return true;
};
var argument6 = function (t) {
 callbackArguments.push(arguments) 

    return years.indexOf(t.getTime()) < 0;
};
var base_0 = [595,893,1.7976931348623157e+308,460,607,460,242,460,82]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,893,1.7976931348623157e+308,460,607,460,242,460,82]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument6)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test716.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)