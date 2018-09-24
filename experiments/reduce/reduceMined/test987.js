





var callbackArguments = [];
var argument1 = function (obj, key) {
 callbackArguments.push(arguments) 

    obj[key] = item[key];
    return obj;
};
var argument2 = {"":"hP","5.529670315146572e+306":"YT9","vP":""};
var argument3 = function (target, key) {
 callbackArguments.push(arguments) 

    target[key] = source[key];
    return target;
};
var argument4 = null;
var argument5 = function (p, sub) {
 callbackArguments.push(arguments) 

    return p.then(function () {
        reporter.log('Submodule: ' + sub.name);
        reporter.indent();
        var subConfig = JSON.parse(JSON.stringify(mite.config));
        subConfig = cliUtil.applySubmoduleToConfig(subConfig, sub);
        var m = new Mite(subConfig);
        return self._up(m).then(function () {
            console.log();
            reporter.outdent();
        });
    });
};
var argument6 = 6.394156780392991e+306;
var argument7 = null;
var argument8 = function (acc, join) {
 callbackArguments.push(arguments) 

    acc.push(makePunc(punc, join), join);
    return acc;
};
var base_0 = ["$",607,"5",157,157,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$",607,"5",157,157,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$",607,"5",157,157,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$",607,"5",157,157,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test987.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)