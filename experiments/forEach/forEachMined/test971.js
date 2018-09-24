





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    if (typeof a === 'string') {
        recs.push('"' + a + '"');
    } else if (typeof a === 'function') {
        recs.push(a.toString().split('()')[0].substring(9));
    } else {
        recs.push(a.toString());
    }
};
var argument2 = true;
var argument3 = true;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    if (angular.isDefined(attr[key]))
        options[key] = attr[key];
};
var argument5 = false;
var argument6 = "";
var argument7 = function (level, i) {
 callbackArguments.push(arguments) 

    nestedData.key(function (d) {
        if (typeof level === 'function') {
            return level(d);
        }
        return fetchValue(vars, d, level);
    });
    checkAxes();
};
var argument8 = true;
var argument9 = function (handler) {
 callbackArguments.push(arguments) 

    var serverProxy = createServerProxy(handler.hubName, ServerConnectionBackend.server(handler.hubName));
    handler.hub.server = serverProxy;
    handler.doneFn();
};
var base_0 = [1.7976931348623157e+308,843,403,-100,595,655,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,843,403,-100,595,655,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,843,403,-100,595,655,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,843,403,-100,595,655,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test971.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)