





var callbackArguments = [];
var argument1 = function (context) {
 callbackArguments.push(arguments) 

    return context.fn(context, self.v);
};
var argument2 = null;
var argument3 = function (et) {
 callbackArguments.push(arguments) 

    var group = this._findEntityGroup(et);
    ek = group && group.findEntityByKey(entityKey);
    return ek;
};
var argument4 = false;
var argument5 = function (service) {
 callbackArguments.push(arguments) 

    var match = serviceURL.match(service.regexp);
    if (match) {
        request.urlInfo.pathname = match[1];
        response = service.module.call(null, request);
        return true;
    }
};
var argument6 = null;
var argument7 = function (URL) {
 callbackArguments.push(arguments) 

    if (requestMap[URL].promise === promise) {
        request = requestMap[URL].request;
        return true;
    }
};
var argument8 = {"126":3.7930534668987963e+307,"618":595,"H":"J6","":627,"aZj":"","1.4371490528918171e+308":"c*Q","1.7976931348623157e+308":"","!0":1.4877951428424656e+308};
var base_0 = [82,"B2"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,"B2"]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,"B2"]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,"B2"]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test675.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)