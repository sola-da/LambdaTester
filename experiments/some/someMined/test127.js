





var callbackArguments = [];
var argument1 = function (element) {
 callbackArguments.push(arguments) 

    return element;
};
var argument2 = function (item) {
 callbackArguments.push(arguments) 

    return typeof item == 'number' || item && !item.hasOwnProperty('x');
};
var argument3 = r_0;
var argument4 = function (service) {
 callbackArguments.push(arguments) 

    var match = serviceURL.match(service.regexp);
    if (match) {
        request.urlInfo.pathname = match[1];
        response = service.module.call(null, request);
        return true;
    }
};
var argument5 = r_2;
var argument6 = function (inRole) {
 callbackArguments.push(arguments) 

    debug('isInRole() returns: %j', inRole);
    if (callback)
        callback(null, inRole);
};
var argument7 = "?";
var base_0 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,"k",49,"h","1","%","ugtc",59]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test127.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)