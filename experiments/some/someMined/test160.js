





var callbackArguments = [];
var argument1 = function (ban) {
 callbackArguments.push(arguments) 

    return user.matchesMask(ban.mask);
};
var argument2 = function (service) {
 callbackArguments.push(arguments) 

    var match = serviceURL.match(service.regexp);
    if (match) {
        request.urlInfo.pathname = match[1];
        response = service.module.call(null, request);
        return true;
    }
};
var argument3 = function (p) {
 callbackArguments.push(arguments) 

    try {
        var dom = new ActiveXObject(p);
        dom.async = false;
        dom.loadXML(xhr.responseText);
        result = dom;
    } catch (e) {
        return false;
    }
    return true;
};
var argument4 = null;
var argument5 = null;
var argument6 = function (inRole) {
 callbackArguments.push(arguments) 

    debug('isInRole() returns: %j', inRole);
    if (callback)
        callback(null, inRole);
};
var base_0 = [607,655,59]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,655,59]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,655,59]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,655,59]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
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
require("fs").writeFileSync("./experiments/some/someMined/test160.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)