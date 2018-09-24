





var callbackArguments = [];
var argument1 = function (sym) {
 callbackArguments.push(arguments) 

    body.push(new AST_SimpleStatement({
        body: new AST_Assign({
            left: new AST_Sub({
                expression: new AST_SymbolRef({ name: 'exports' }),
                property: new AST_String({ value: sym.name })
            }),
            operator: '=',
            right: new AST_SymbolRef(sym)
        })
    }));
};
var argument2 = [1.7976931348623157e+308,823,714];
var argument3 = function (n) {
 callbackArguments.push(arguments) 

    dojo.toggleClass(n, 'dojoxGridSubRowAlt', alt);
    dojo.attr(n, 'dojoxTreeGridBaseClasses', n.className);
    alt = !alt;
    self.grid.rows.styleRowNode(dojo.attr(n, 'dojoxTreeGridPath'), n);
};
var argument4 = function (name) {
 callbackArguments.push(arguments) 

    var getter, value;
    if (isLive === liveModuleSentinel) {
        var descr = Object.getOwnPropertyDescriptor(uncoatedModule, name);
        if (descr.get)
            getter = descr.get;
    }
    if (!getter) {
        value = uncoatedModule[name];
        getter = function () {
            return value;
        };
    }
    Object.defineProperty(coatedModule, name, {
        get: getter,
        enumerable: true
    });
};
var argument5 = function (subFold) {
 callbackArguments.push(arguments) 

    fold.subFolds.push(subFold.clone());
};
var base_0 = [783,618,893,122,100,893,213,49,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,618,893,122,100,893,213,49,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,618,893,122,100,893,213,49,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,618,893,122,100,893,213,49,100]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test694.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)