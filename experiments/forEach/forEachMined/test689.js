





var callbackArguments = [];
var argument1 = function (field) {
 callbackArguments.push(arguments) 

    field.setDisabled(newDisabled);
};
var argument2 = function (combinator, method) {
 callbackArguments.push(arguments) 

    Element.implement(method, function (expression) {
        return this.getElements(injectCombinator(expression, combinator));
    });
};
var argument3 = null;
var argument4 = "J";
var argument5 = function (state) {
 callbackArguments.push(arguments) 

    if (callUpdates && state.update)
        return;
    promise = promise.then(call(state, 'exit'));
};
var argument6 = "";
var argument7 = function (completer, i) {
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
var base_0 = [242,705,1.7976931348623157e+308,1.7976931348623157e+308,618,122,49,403,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,705,1.7976931348623157e+308,1.7976931348623157e+308,618,122,49,403,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,705,1.7976931348623157e+308,1.7976931348623157e+308,618,122,49,403,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,705,1.7976931348623157e+308,1.7976931348623157e+308,618,122,49,403,618]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test689.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)