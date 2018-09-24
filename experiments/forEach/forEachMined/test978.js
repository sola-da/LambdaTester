





var callbackArguments = [];
var argument1 = function (gval, gkey) {
 callbackArguments.push(arguments) 

    array.push(optionToData(angular.element(gval), group));
};
var argument2 = 1.9626624097305882e+307;
var argument3 = false;
var argument4 = function (handle) {
 callbackArguments.push(arguments) 

    var destroyMethodName = 'destroyRecursive' in handle ? 'destroyRecursive' : 'destroy' in handle ? 'destroy' : 'remove';
    var odh = aspect.before(this, 'destroy', function (preserveDom) {
            handle[destroyMethodName](preserveDom);
        });
    var hdh = aspect.after(handle, destroyMethodName, function () {
            odh.remove();
            hdh.remove();
        }, true);
};
var argument5 = {"|":"","4.0220658617968557e+307":893,"":"N","G":"a","1.6026702811810066e+308":"","-100":403,"1.5397460939832401e+308":"7t5REtQ_Ix","pC`S":6.612489646581531e+307};
var argument6 = function (completer) {
 callbackArguments.push(arguments) 

    if (completer.identifierRegexps) {
        completer.identifierRegexps.forEach(function (identifierRegex) {
            if (!prefix && identifierRegex)
                prefix = util.retrievePrecedingIdentifier(line, pos.column, identifierRegex);
        });
    }
};
var argument7 = null;
var argument8 = function (id) {
 callbackArguments.push(arguments) 

    this._extendCore(mark, id, keyArgs);
};
var argument9 = null;
var base_0 = [-100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test978.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)