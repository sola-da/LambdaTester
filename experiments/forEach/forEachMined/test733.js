





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    for (j = 0; j < __data_groups.length; j++) {
        if (__data_groups[j].indexOf(d.id) < 0) {
            continue;
        }
        for (k = 0; k < __data_groups[j].length; k++) {
            if (__data_groups[j][k] in indices) {
                indices[d.id] = indices[__data_groups[j][k]];
                break;
            }
        }
    }
    if (isUndefined(indices[d.id])) {
        indices[d.id] = i++;
    }
};
var argument2 = null;
var argument3 = "_";
var argument4 = function (listener) {
 callbackArguments.push(arguments) 

    try {
        listener();
    } catch (e) {
        $exceptionHandler(e);
    }
};
var argument5 = true;
var argument6 = function (key) {
 callbackArguments.push(arguments) 

    if (angular.isDefined($attrs[key]))
        self.$options[key] = $attrs[key];
};
var argument7 = 1.1888671946387758e+308;
var argument8 = function (path) {
 callbackArguments.push(arguments) 

    if (!fs.existsSync(path)) {
        if (!options.quiet)
            cli.fail('No such include directory: ' + path);
        return pbjs.STATUS_ERR_INCLUDE_DIR;
    }
};
var argument9 = r_2;
var base_0 = ["m","dh","h*X2","(c","e","{","B",">P9"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["m","dh","h*X2","(c","e","{","B",">P9"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["m","dh","h*X2","(c","e","{","B",">P9"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["m","dh","h*X2","(c","e","{","B",">P9"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test733.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)