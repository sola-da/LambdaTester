





var callbackArguments = [];
var argument1 = function (singleLine) {
 callbackArguments.push(arguments) 

    console.log(singleLine);
};
var argument2 = true;
var argument3 = function (string) {
 callbackArguments.push(arguments) 

    model.compareThings(string, stuff).should.equal(-1);
    model.compareThings(stuff, string).should.equal(1);
};
var argument4 = {};
var argument5 = function (letter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(letter)).toBe(false);
    expect(XRegExp('\\P{Letter}').test(letter)).toBe(false);
    expect(XRegExp('\\PL').test(letter)).toBe(false);
    expect(XRegExp('\\p{^L}').test(letter)).toBe(false);
    expect(XRegExp('\\p{^Letter}').test(letter)).toBe(false);
};
var argument6 = true;
var argument7 = function cb_forEach(ruleJSON) {
 callbackArguments.push(arguments) 

    var rule = new Rule(ruleJSON);
    if (!this.rules.some(function cb_some(r) {
            return deepEqual(r, rule);
        })) {
        this.rules.push(rule);
    }
};
var argument8 = null;
var base_0 = ["e",82,122,25,"5F","J","D=-q"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["e",82,122,25,"5F","J","D=-q"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["e",82,122,25,"5F","J","D=-q"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["e",82,122,25,"5F","J","D=-q"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test996.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)