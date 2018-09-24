





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    fn();
};
var argument2 = {"627":714,"893":"","8.028223200280866e+307":5e-324,"p":"","G":"","":""};
var argument3 = {"":"","V#":"","1.7976931348623157e+308":"#U","1.0221361535808346e+308":-1};
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    arr.push(fetchValue(vars, n, c));
};
var argument5 = function (route, path) {
 callbackArguments.push(arguments) 

    if (!match && (params = switchRouteMatcher($location.path(), path, route))) {
        match = inherit(route, {
            params: extend({}, $location.search(), params),
            pathParams: params
        });
        match.$$route = route;
    }
};
var argument6 = null;
var argument7 = null;
var argument8 = function (user) {
 callbackArguments.push(arguments) 

    try {
        user.send(message);
    } catch (exception) {
        winston.error('Error writing to stream:', exception);
    }
};
var argument9 = 1.5779821323449826e+308;
var base_0 = ["Dk","Wy","q8D:","(#","u","?8JQwt","$#",">","z;","I*"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["Dk","Wy","q8D:","(#","u","?8JQwt","$#",">","z;","I*"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["Dk","Wy","q8D:","(#","u","?8JQwt","$#",">","z;","I*"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["Dk","Wy","q8D:","(#","u","?8JQwt","$#",">","z;","I*"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test714.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)