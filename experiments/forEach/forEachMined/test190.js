





var callbackArguments = [];
var argument1 = function (role) {
 callbackArguments.push(arguments) 

    var name = role.name, roleSpec = options[name + 'Role'];
    if (void 0 !== roleSpec) {
        roleOptions || (roleOptions = options.visualRoles = {});
        void 0 === roleOptions[name] && (roleOptions[name] = roleSpec);
    }
};
var argument2 = function (option) {
 callbackArguments.push(arguments) 

    if (option in optionsOverride) {
        options[option] = optionsOverride[option];
    }
};
var argument3 = function (method) {
 callbackArguments.push(arguments) 

    var _base;
    if ((_base = $httpProvider.defaults.headers)[method] == null) {
        _base[method] = {};
    }
    return $httpProvider.defaults.headers[method]['If-Modified-Since'] = '0';
};
var argument4 = true;
var argument5 = function (prop) {
 callbackArguments.push(arguments) 

    parseCsdlDataProperty(complexType, prop, schema);
};
var argument6 = 5.946096105281235e+307;
var argument7 = 714;
var base_0 = [714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test190.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)