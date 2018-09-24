





var callbackArguments = [];
var argument1 = function (handler) {
 callbackArguments.push(arguments) 

    $injector.invoke(handler, auth, locals);
};
var argument2 = 893;
var argument3 = false;
var argument4 = function (astralLetter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('^\\P{L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\P{Letter}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\PL$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^Letter}$').test(astralLetter)).toBe(false);
};
var argument5 = null;
var argument6 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.screenWidth > width)
        width = w.screenWidth;
};
var argument7 = null;
var argument8 = ["P","T^","_bko","0","0=1 ","cn"];
var argument9 = function (nodetype) {
 callbackArguments.push(arguments) 

    PARENS(nodetype, func);
};
var argument10 = {"49":"3X","893":82,"1.7950494860643479e+307":1.7968443044183538e+308,"":"I","4.571770232811845e+307":4.807339303602806e+307};
var argument11 = false;
var base_0 = [607,843,59,-1,122,714,-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,843,59,-1,122,714,-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,843,59,-1,122,714,-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,843,59,-1,122,714,-100]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test571.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)