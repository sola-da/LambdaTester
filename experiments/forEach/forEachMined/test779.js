





var callbackArguments = [];
var argument1 = function (astralLetter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('^\\P{L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\P{Letter}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\PL$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^Letter}$').test(astralLetter)).toBe(false);
};
var argument2 = null;
var argument3 = 213;
var argument4 = function (controller) {
 callbackArguments.push(arguments) 

    controllers.push(_transformController(controller));
};
var argument5 = function (id) {
 callbackArguments.push(arguments) 

    var el = _$(id);
    if (el)
        el.innerHTML = '';
};
var argument6 = function (value) {
 callbackArguments.push(arguments) 

    maxValue = Math.max(parseFloat(value) || 0, maxValue);
};
var argument7 = false;
var argument8 = r_2;
var base_0 = [595,59,1.7976931348623157e+308,843,126]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,59,1.7976931348623157e+308,843,126]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,59,1.7976931348623157e+308,843,126]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,59,1.7976931348623157e+308,843,126]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test779.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)