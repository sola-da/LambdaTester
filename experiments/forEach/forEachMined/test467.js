





var callbackArguments = [];
var argument1 = function (ref) {
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
var argument2 = null;
var argument3 = ["nQwL","|","D","i","e#]|","Xh"];
var argument4 = function (sequence) {
 callbackArguments.push(arguments) 

    sequence.end(err);
};
var argument5 = false;
var argument6 = false;
var argument7 = function (joinObserver) {
 callbackArguments.push(arguments) 

    joinObserver.subscribe();
    group.add(joinObserver);
};
var argument8 = function (depth, i) {
 callbackArguments.push(arguments) 

    var nestingDepth = vars.id.nesting.slice(0, i + 1);
    vars.data.nested.all[depth] = dataNest(vars, vars.data.value, nestingDepth);
};
var argument9 = false;
var base_0 = [100,655,783,49,823,893,843]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,655,783,49,823,893,843]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,655,783,49,823,893,843]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,655,783,49,823,893,843]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test467.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)