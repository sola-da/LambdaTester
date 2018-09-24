





var callbackArguments = [];
var argument1 = function (method) {
 callbackArguments.push(arguments) 

    var _base;
    if ((_base = $httpProvider.defaults.headers)[method] == null) {
        _base[method] = {};
    }
    return $httpProvider.defaults.headers[method]['If-Modified-Since'] = '0';
};
var argument2 = 893;
var argument3 = false;
var argument4 = function (c) {
 callbackArguments.push(arguments) 

    titles.push(vars.format.value(c));
};
var argument5 = "";
var argument6 = function (v) {
 callbackArguments.push(arguments) 

    this.addEdge(v.duplicate());
};
var argument7 = false;
var argument8 = "I3";
var argument9 = function (id) {
 callbackArguments.push(arguments) 

    updateValues(id);
};
var argument10 = r_0;
var argument11 = false;
var base_0 = [25,893,1.7976931348623157e+308,82,627,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,893,1.7976931348623157e+308,82,627,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,893,1.7976931348623157e+308,82,627,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,893,1.7976931348623157e+308,82,627,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test961.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)