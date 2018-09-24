





var callbackArguments = [];
var argument1 = function (entity) {
 callbackArguments.push(arguments) 

    if (entity != null) {
        if (entity.getProperty(fkPropName) == oldValue) {
            entity.setProperty(fkPropName, newValue);
        }
    }
};
var argument2 = true;
var argument3 = function (axis) {
 callbackArguments.push(arguments) 

    axis.option.defaults({ Offset: 0.04 });
};
var argument4 = ["I",";p6"];
var argument5 = function (v, i) {
 callbackArguments.push(arguments) 

    var firstColon = v.indexOf(':');
    var origin = v.substring(0, firstColon).toLowerCase();
    var key = v.substring(firstColon + 1);
    switch (origin) {
    case 'context':
    case 'cxt':
    case 'c':
        retval = cxt.get(key);
        return;
    case 'arg':
        break;
    default:
        var ds = cxt.getDatasource(origin);
        if (ds != undefined) {
            retval = ds[key];
            return;
        }
    }
};
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    child[key] = parent[key];
};
var argument7 = 893;
var argument8 = 893;
var base_0 = [714,122,126,655,627,823]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,122,126,655,627,823]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,122,126,655,627,823]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,122,126,655,627,823]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test863.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)