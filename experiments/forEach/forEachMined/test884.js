





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    var id = a.substring(3, a.length);
    if (id.charAt(0) == '"' && id.charAt(id.length - 1) == '"') {
        id = id.substring(1, id.length - 1);
    }
    var node = e.byId(id);
    if (node && node.tagName.toLowerCase() == 'td') {
        cells.push(node);
    }
};
var argument2 = {"843":"","AvV":1.1922796025987186e+308,"1.471500690587278e+308":893,"1.4384969624433935e+308":893,"1.9498792984886692e+307":3.1235007037217994e+307,"k(@":"","M;yDU=":"","q":1.646262538089801e+308};
var argument3 = function (km) {
 callbackArguments.push(arguments) 

    var group = em._entityGroupMap[km.entityTypeName];
    if (!group) {
        throw new Error('Unable to locate the following fully qualified EntityType name: ' + km.entityTypeName);
    }
    group._fixupKey(km.tempValue, km.realValue);
};
var argument4 = false;
var argument5 = function (triple) {
 callbackArguments.push(arguments) 

    n3 = n3 + triple.toString();
};
var argument6 = "!g4";
var argument7 = function (def) {
 callbackArguments.push(arguments) 

    if (def.value && def.value instanceof AST_Lambda) {
        a.push(make_injector(def.value, def.name));
    }
};
var argument8 = r_0;
var argument9 = true;
var base_0 = ["]W","_","5","5","g"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["]W","_","5","5","g"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["]W","_","5","5","g"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["]W","_","5","5","g"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test884.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)