





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    fn();
};
var argument2 = function (path) {
 callbackArguments.push(arguments) 

    assert.ok(~[
        'world',
        'foo'
    ].indexOf(path));
};
var argument3 = function (route, path) {
 callbackArguments.push(arguments) 

    if (!match && (params = switchRouteMatcher($location.path(), route))) {
        match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params
        });
        match.$$route = route;
    }
};
var argument4 = null;
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    fn = DATE_FORMATS[value];
    text += fn ? fn(date, $locale.DATETIME_FORMATS) : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
};
var base_0 = [0,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test281.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)