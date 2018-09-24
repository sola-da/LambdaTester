





var callbackArguments = [];
var argument1 = function (init) {
 callbackArguments.push(arguments) 

    var tw = new TreeWalker(function (node) {
            if (node instanceof AST_SymbolRef) {
                push_uniq(in_use, node.definition());
            }
        });
    init.walk(tw);
};
var argument2 = null;
var argument3 = function (np) {
 callbackArguments.push(arguments) 

    var nodeContext = {
            nodeType: 'navProp',
            navigationProperty: np
        };
    visitNode(node[np.nameOnServer], mc, nodeContext, result, np.name);
};
var argument4 = true;
var argument5 = function (module) {
 callbackArguments.push(arguments) 

    module(scope);
};
var argument6 = function (rev) {
 callbackArguments.push(arguments) 

    addToMissing(id, rev);
};
var argument7 = null;
var base_0 = [969,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test181.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)