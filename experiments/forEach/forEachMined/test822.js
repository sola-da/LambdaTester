





var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    require('./' + path.basename(file))(app);
};
var argument2 = [595,100,"}","n","]c?:"];
var argument3 = function (id) {
 callbackArguments.push(arguments) 

    __data_classes[id] = args.classes[id];
};
var argument4 = "@";
var argument5 = false;
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
var argument7 = {"3":1.4658414878049106e+308,"8":1.2962329368403766e+308,"627":714,"714":1.2802199568431656e+308,"2.298598727891349e+307":1.673345277140917e+307,"":"","b9":4.180986775347519e+307};
var argument8 = function (val) {
 callbackArguments.push(arguments) 

    moxieData.append(appendData[i].name, val);
};
var base_0 = [1.7976931348623157e+308,-100,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [1.7976931348623157e+308,-100,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [1.7976931348623157e+308,-100,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [1.7976931348623157e+308,-100,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test822.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)