





var callbackArguments = [];
var argument1 = function (fk, i) {
 callbackArguments.push(arguments) 

    var keyProp = keyProps[i].name;
    var keyVal = parentEntity.getProperty(keyProp);
    var fkVal = a.getProperty(fk);
    return keyVal !== fkVal;
};
var argument2 = {"3.3590918844603183e+307":"","":403,"5.451945056109718e+307":157};
var argument3 = true;
var argument4 = function (parser) {
 callbackArguments.push(arguments) 

    if (parser.name === self.options.parser) {
        self.parser_module = parser;
        if (exports.debug_mode) {
            console.log('Using parser module: ' + self.parser_module.name);
        }
        return true;
    }
};
var argument5 = function (es) {
 callbackArguments.push(arguments) 

    return e.entityAspect.entityState === es;
};
var argument6 = true;
var argument7 = true;
var argument8 = function (r) {
 callbackArguments.push(arguments) 

    return comparePoints(r.start, start) <= 0 && comparePoints(r.end, end) >= 0;
};
var argument9 = r_2;
var argument10 = true;
var base_0 = [-100,126,460]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,126,460]
var r_1= undefined
try {
r_1 = base_1.some(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,126,460]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,126,460]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/some/someMined/test14.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)