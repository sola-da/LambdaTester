





var callbackArguments = [];
var argument1 = function (cp) {
 callbackArguments.push(arguments) 

    if (cpHasOriginalValues(entity, cp)) {
        var coOrCos = entity.getProperty(cp.name);
        result[fn(cp.name, cp)] = __map(coOrCos, function (co) {
            return unwrapInstance(co, transformFn);
        });
    }
};
var argument2 = function (staticRoute) {
 callbackArguments.push(arguments) 

    if (fs.existsSync(staticRoute + file)) {
        file = staticRoute + file;
        fileExists = true;
    }
};
var argument3 = null;
var argument4 = function (fold) {
 callbackArguments.push(arguments) 

    this.removeFold(fold);
};
var argument5 = function (i) {
 callbackArguments.push(arguments) 

    exports[i] = typeof fs[i] !== 'function' ? fs[i] : i.match(/^[A-Z]|^create|Sync$/) ? function () {
        return fs[i].apply(fs, arguments);
    } : graceful(fs[i]);
};
var base_0 = ["$","S"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$","S"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$","S"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$","S"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test85.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)