





var callbackArguments = [];
var argument1 = function (eg) {
 callbackArguments.push(arguments) 

    return eg.hasChanges();
};
var argument2 = null;
var argument3 = r_0;
var argument4 = function (module) {
 callbackArguments.push(arguments) 

    return ngDeps.modules[module].indexOf(dependency) > -1;
};
var argument5 = null;
var argument6 = r_0;
var argument7 = function (parser) {
 callbackArguments.push(arguments) 

    if (parser.name === self.options.parser) {
        self.parser_module = parser;
        if (exports.debug_mode) {
            console.log('Using parser module: ' + self.parser_module.name);
        }
        return true;
    }
};
var argument8 = [0,25,49,655,460,-1,618,242,595,82];
var argument9 = function (enumType) {
 callbackArguments.push(arguments) 

    return enumType.name === baseTypeName;
};
var argument10 = null;
var base_0 = [783,"_Y",25]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,"_Y",25]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,"_Y",25]
var r_2= undefined
try {
r_2 = base_2.some(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,"_Y",25]
var r_3= undefined
try {
r_3 = base_3.some(argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someMined/test373.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)