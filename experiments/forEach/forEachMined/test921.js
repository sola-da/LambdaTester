





var callbackArguments = [];
var argument1 = function (selfSelector) {
 callbackArguments.push(arguments) 

    selectorsToAdd.push(extendVisitor.extendSelector(matches, selectorPath, selfSelector));
};
var argument2 = null;
var argument3 = function (l) {
 callbackArguments.push(arguments) 

    dojo.disconnect(l);
};
var argument4 = true;
var argument5 = [-1,0,705,714,627,126];
var argument6 = function (route, path) {
 callbackArguments.push(arguments) 

    if (!match && (params = switchRouteMatcher($location.path(), route))) {
        match = inherit(route, {
            params: angular.extend({}, $location.search(), params),
            pathParams: params
        });
        match.$$route = route;
    }
};
var argument7 = function (subFold) {
 callbackArguments.push(arguments) 

    fold.subFolds.push(subFold.clone());
};
var argument8 = null;
var base_0 = [0,655,"r","_f",893,"w5fx",823,59,627,"1F-QYO"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,655,"r","_f",893,"w5fx",823,59,627,"1F-QYO"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,655,"r","_f",893,"w5fx",823,59,627,"1F-QYO"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,655,"r","_f",893,"w5fx",823,59,627,"1F-QYO"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test921.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)