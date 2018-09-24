





var callbackArguments = [];
var argument1 = function (calcSpec) {
 callbackArguments.push(arguments) 

    complexType.addCalculation(calcSpec);
};
var argument2 = null;
var argument3 = true;
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    item.destroy();
};
var argument5 = function (container) {
 callbackArguments.push(arguments) 

    return container.destroy();
};
var argument6 = false;
var argument7 = function (astralLetter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('^\\P{L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\P{Letter}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\PL$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^Letter}$').test(astralLetter)).toBe(false);
};
var argument8 = false;
var argument9 = false;
var base_0 = ["WT","ux","vGd,_OJ","JHVT","vr","<V","F[","_r"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["WT","ux","vGd,_OJ","JHVT","vr","<V","F[","_r"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["WT","ux","vGd,_OJ","JHVT","vr","<V","F[","_r"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["WT","ux","vGd,_OJ","JHVT","vr","<V","F[","_r"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test280.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)