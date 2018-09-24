





var callbackArguments = [];
var argument1 = function (ret, name) {
 callbackArguments.push(arguments) 

    ret[name] = genesis.lookupType(fields[name]);
    keys.push(name);
    offsets[name] = bytes;
    bytes += ret[name].bytes;
    return ret;
};
var argument2 = null;
var argument3 = false;
var argument4 = function (all, key) {
 callbackArguments.push(arguments) 

    all[key] = {};
    self._setTarget(filters[key], all[key]);
    return all;
};
var argument5 = {"zA":";p>","A":"","=V":"11e","1.0400658109989964e+308":""};
var argument6 = false;
var argument7 = function (acc, key) {
 callbackArguments.push(arguments) 

    if (/^_/.test(key) && key !== '_attachments') {
        acc.metadata[key.slice(1)] = doc[key];
    } else {
        acc.data[key] = doc[key];
    }
    return acc;
};
var argument8 = null;
var argument9 = "";
var argument10 = function (p, sub) {
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
var argument11 = false;
var argument12 = null;
var base_0 = [655,49]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [655,49]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [655,49]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [655,49]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test76.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)