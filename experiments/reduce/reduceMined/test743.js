





var callbackArguments = [];
var argument1 = function (p, v) {
 callbackArguments.push(arguments) 

    return { sighting: p.sighting - 1 };
};
var argument2 = function (r, s) {
 callbackArguments.push(arguments) 

    r[o[s]] = s;
    return r;
};
var argument3 = function (p, sub) {
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
var argument4 = function (p, v) {
 callbackArguments.push(arguments) 

    return { sighting: p.sighting - 1 };
};
var argument5 = r_1;
var base_0 = [82,100,843,-1,-1,1.7976931348623157e+308,59,-100,126]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.reduce(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,100,843,-1,-1,1.7976931348623157e+308,59,-100,126]
var r_2= undefined
try {
r_2 = base_2.reduce(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.reduce(argument4,argument5)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test743.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)