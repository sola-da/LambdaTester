





var callbackArguments = [];
var argument1 = function (word, idx) {
 callbackArguments.push(arguments) 

    if (!word || word === currentWord)
        return;
    var distance = Math.abs(prefixPos - idx);
    var score = words.length - distance;
    if (wordScores[word]) {
        wordScores[word] = Math.max(score, wordScores[word]);
    } else {
        wordScores[word] = score;
    }
};
var argument2 = function (view) {
 callbackArguments.push(arguments) 

    var idx = view.contentIndex;
    if (indexes.contains(idx)) {
        ok(true, 'should find childView for contentIndex %@ (nowShowing=%@)'.fmt(idx, set));
    } else {
        ok(false, 'should NOT find childView for contentIndex %@ (nowShowing=%@)'.fmt(idx, set));
    }
    indexes.remove(idx);
};
var argument3 = true;
var argument4 = function (letter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(letter)).toBe(false);
    expect(XRegExp('\\P{Letter}').test(letter)).toBe(false);
    expect(XRegExp('\\PL').test(letter)).toBe(false);
    expect(XRegExp('\\p{^L}').test(letter)).toBe(false);
    expect(XRegExp('\\p{^Letter}').test(letter)).toBe(false);
};
var argument5 = "c";
var argument6 = 1.360504603159235e+308;
var argument7 = function cb_forEach(rule) {
 callbackArguments.push(arguments) 

    if (!rule.pattern) {
        return logger.error({ rule: rule }, 'Simple naming rules require a pattern.');
    }
    if (!rule.name) {
        return logger.error({ rule: rule }, 'Simple naming rules require a replacement name.');
    }
    this.addSimple(rule.pattern, rule.name);
};
var base_0 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["fW","^g$",100,893,823,213,"#V","NUXx"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test10.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)