





var callbackArguments = [];
var argument1 = function (control) {
 callbackArguments.push(arguments) 

    control.$setPristine();
};
var argument2 = false;
var argument3 = function (sep) {
 callbackArguments.push(arguments) 

    var parts = scoped.split(sep);
    scoped = parts.map(function (p) {
        var t = p.trim();
        if (t && splits.indexOf(t) < 0 && t.indexOf(attrName) < 0) {
            p = t.replace(/([^:]*)(:*)(.*)/, '$1' + attrName + '$2$3');
        }
        return p;
    }).join(sep);
};
var argument4 = function (astralLetter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('^\\P{L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\P{Letter}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\PL$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^L}$').test(astralLetter)).toBe(false);
    expect(XRegExp('^\\p{^Letter}$').test(astralLetter)).toBe(false);
};
var argument5 = {"7.112896713610577e+307":3.9217969160542723e+307,"":"","5.123960626520218e+307":4.3021951276374907e+307,"1.4218958654579952e+308":2.2008952105640074e+307};
var argument6 = "u2";
var argument7 = function (fold) {
 callbackArguments.push(arguments) 

    this.removeFold(fold);
};
var argument8 = r_2;
var base_0 = ["6p3duBYo","m","on0","Y","b!b","`","t","N"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["6p3duBYo","m","on0","Y","b!b","`","t","N"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["6p3duBYo","m","on0","Y","b!b","`","t","N"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["6p3duBYo","m","on0","Y","b!b","`","t","N"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test780.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)