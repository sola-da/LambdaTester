





var callbackArguments = [];
var argument1 = function (categScene) {
 callbackArguments.push(arguments) 

    categScene.layoutII(layoutInfo);
};
var argument2 = function (imp) {
 callbackArguments.push(arguments) 

    var uri = relativeToSelf(imp.uri.content);
    var res = new Resource(uri, parser);
    self.resources.push(res);
};
var argument3 = function (et) {
 callbackArguments.push(arguments) 

    _run(et);
};
var argument4 = "Z:";
var argument5 = {"2.638895923122176e+307":"G1CIwA","W":"","M":""};
var argument6 = function (ref) {
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
var argument7 = false;
var argument8 = null;
var base_0 = [714,705,627,627,213,607,82,460,403,25]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,705,627,627,213,607,82,460,403,25]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,705,627,627,213,607,82,460,403,25]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,705,627,627,213,607,82,460,403,25]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test977.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)