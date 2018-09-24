





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    if (headers.hasOwnProperty(key)) {
        delete headers[key];
    }
};
var argument2 = function (sym) {
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
var argument3 = r_0;
var argument4 = true;
var argument5 = function (completer, i) {
 callbackArguments.push(arguments) 

    completer.getCompletions(editor, session, pos, prefix, function (err, results) {
        if (!err)
            matches = matches.concat(results);
        var pos = editor.getCursorPosition();
        var line = session.getLine(pos.row);
        callback(null, {
            prefix: util.retrievePrecedingIdentifier(line, pos.column, results[0] && results[0].identifierRegex),
            matches: matches,
            finished: --total === 0
        });
    });
};
var argument6 = null;
var argument7 = function (bundleLocations) {
 callbackArguments.push(arguments) 

    preloaded = preloaded.then(function () {
        return Promise.all(bundleLocations.map(function (bundleLocation) {
            load(bundleLocation);
            return getDefinition(bundleLocation).promise;
        }));
    });
};
var base_0 = ["&[","rZ","%+N)A"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["&[","rZ","%+N)A"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["&[","rZ","%+N)A"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["&[","rZ","%+N)A"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test17.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)