





var callbackArguments = [];
var argument1 = function (parser) {
 callbackArguments.push(arguments) 

    if (parser.name === self.options.parser) {
        self.parser_module = parser;
        if (exports.debug_mode) {
            console.log('Using parser module: ' + self.parser_module.name);
        }
        return true;
    }
};
var argument2 = function (m) {
 callbackArguments.push(arguments) 

    if (m.route !== match.route)
        return false;
    for (var property in m.params)
        if (m.params[property] !== match.params[property])
            return false;
    return true;
};
var argument3 = false;
var argument4 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 3 && el.char === 'C';
};
var argument5 = [5e-324,-1,783,25];
var argument6 = function (colObj) {
 callbackArguments.push(arguments) 

    return !!colObj.name.match(/\.col1$/);
};
var argument7 = ["T","9","O8+2E5<","D",";"];
var argument8 = [618,655,122,783];
var base_0 = [100,-100,843,82,969,969,783,-100,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,-100,843,82,969,969,783,-100,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,-100,843,82,969,969,783,-100,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,-100,843,82,969,969,783,-100,1.7976931348623157e+308]
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
require("fs").writeFileSync("./experiments/some/someMined/test774.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)