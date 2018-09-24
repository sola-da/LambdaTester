





var callbackArguments = [];
var argument1 = function (json) {
 callbackArguments.push(arguments) 

    return !json.github.full_name.indexOf(query);
};
var argument2 = false;
var argument3 = null;
var argument4 = function (match) {
 callbackArguments.push(arguments) 

    return !hasMatch(nextMatches, match);
};
var argument5 = function (handler) {
 callbackArguments.push(arguments) 

    return handler && (!event || handler.event === event) && (!fn || handler.fn === fn) && (!selector || handler.selector === selector);
};
var argument6 = function (message) {
 callbackArguments.push(arguments) 

    if (tabInfo.subscriptions.has(message.action)) {
        passMessageToDevTools(message, tabId);
        return false;
    }
    return true;
};
var argument7 = ["l",157,"R",607];
var argument8 = true;
var base_0 = ["N","8","f","=","IJ<M(","8:","i","75d","KlV"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["N","8","f","=","IJ<M(","8:","i","75d","KlV"]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["N","8","f","=","IJ<M(","8:","i","75d","KlV"]
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["N","8","f","=","IJ<M(","8:","i","75d","KlV"]
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
require("fs").writeFileSync("./experiments/filter/filterMined/test655.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)