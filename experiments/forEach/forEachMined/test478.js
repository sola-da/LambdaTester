





var callbackArguments = [];
var argument1 = function (route, path) {
 callbackArguments.push(arguments) 

    if (!match && (params = switchRouteMatcher($location.path(), route))) {
        match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params
        });
        match.$$route = route;
    }
};
var argument2 = "#,";
var argument3 = function (item) {
 callbackArguments.push(arguments) 

    if (typeof pending[item.rev] !== 'undefined') {
        pending[item.rev].resolve({ rev: item.rev });
        delete pending[item.rev];
    } else {
        bufferChange(item.rev);
    }
};
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    item = path.join(dir, item);
    remove.removeSync(item);
};
var argument5 = [893,-100,893];
var argument6 = function (identifierRegex) {
 callbackArguments.push(arguments) 

    if (!prefix && identifierRegex)
        prefix = util.retrievePrecedingIdentifier(line, pos.column, identifierRegex);
};
var argument7 = r_2;
var base_0 = ["q;","j","s","),"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["q;","j","s","),"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["q;","j","s","),"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["q;","j","s","),"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test478.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)