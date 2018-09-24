





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
var argument2 = true;
var argument3 = function (child) {
 callbackArguments.push(arguments) 

    child.updateDom(options);
};
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    callback(err, results);
};
var argument5 = ["iB4",">B",627,242,607,"q;E","G",595,714];
var argument6 = function (param) {
 callbackArguments.push(arguments) 

    if (param.message === 'Identifier' && env[Finder.findESLintEnvForMember(param.name)]) {
        context.report(param, 'Parameter \'${0}\' shadows a global member', {
            0: param.name,
            nls: 'no-shadow-global-param'
        });
    }
};
var argument7 = true;
var argument8 = false;
var base_0 = [213,"qimm","K",82,595,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,"qimm","K",82,595,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,"qimm","K",82,595,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,"qimm","K",82,595,655]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test44.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)