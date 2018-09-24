





var callbackArguments = [];
var argument1 = function (m) {
 callbackArguments.push(arguments) 

    if (m.route !== match.route)
        return false;
    for (var property in m.params)
        if (m.params[property] !== match.params[property])
            return false;
    return true;
};
var argument2 = function (parser) {
 callbackArguments.push(arguments) 

    if (parser.name === self.options.parser) {
        self.parser_module = parser;
        if (exports.debug_mode) {
            console.log('Using parser module: ' + self.parser_module.name);
        }
        return true;
    }
};
var argument3 = null;
var argument4 = null;
var argument5 = function (ban) {
 callbackArguments.push(arguments) 

    return ban.mask === mask;
};
var argument6 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 1 && el.char === 'A';
};
var argument7 = r_2;
var argument8 = "V";
var base_0 = [25,122]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [25,122]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [25,122]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [25,122]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test121.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)