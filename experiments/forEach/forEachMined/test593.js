





var callbackArguments = [];
var argument1 = function (rev) {
 callbackArguments.push(arguments) 

    addToMissing(id, rev);
};
var argument2 = r_0;
var argument3 = function (key) {
 callbackArguments.push(arguments) 

    attr[key] && attr.$observe(key, function (newValue, oldValue) {
        scope[key] = $sce.trustAsHtml(newValue);
    });
};
var argument4 = function (v) {
 callbackArguments.push(arguments) 

    var val = fetchValue(vars, v, sort);
    if (val) {
        if (typeof val == 'number') {
            d[sort] += val;
        } else {
            d[sort] = val;
        }
    }
};
var argument5 = function (ref) {
 callbackArguments.push(arguments) 

    var decl = util.getDeclaration(ref, scope), identifier = ref.identifier, name = identifier.name, defs;
    if (decl && (defs = decl.defs).length && identifier.range[0] < defs[0].node.range[0]) {
        var defType = defs[0].message;
        if (!flag_funcs && defType === 'FunctionName' || !flag_vars && defType === 'Variable') {
            return;
        }
        context.report(identifier, '\'${0}\' was used before it was defined.', { 0: name });
    }
};
var argument6 = {"100":"L","607":"%I$$$O","823":"","893":"","3.4654950258248837e+307":"","2.587602547960195e+307":"","":"","zB":969};
var argument7 = true;
var base_0 = [893,213,714,213,627,607,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,213,714,213,627,607,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,213,714,213,627,607,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,213,714,213,627,607,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test593.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)