





var callbackArguments = [];
var argument1 = function (p, sub) {
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
var argument2 = null;
var argument3 = [5e-324,213,893];
var argument4 = function (prev, current, i, arr) {
 callbackArguments.push(arguments) 

    return doMerge(prev, current, true).tree;
};
var argument5 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument6 = r_2;
var argument7 = function (hash, r) {
 callbackArguments.push(arguments) 

    if (r instanceof Rule && r.variable === true) {
        hash[r.name] = r;
    }
    if (r.message === 'Import' && r.root && r.root.variables) {
        var vars = r.root.variables();
        for (var name in vars) {
            if (vars.hasOwnProperty(name)) {
                hash[name] = vars[name];
            }
        }
    }
    return hash;
};
var argument8 = 122;
var base_0 = [242,126,126,705,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,126,126,705,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,126,126,705,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,126,126,705,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test623.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)