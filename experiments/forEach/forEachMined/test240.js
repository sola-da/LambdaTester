





var callbackArguments = [];
var argument1 = function (d, i) {
 callbackArguments.push(arguments) 

    d.d3plus_order = i;
};
var argument2 = function (completer, i) {
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
var argument3 = null;
var argument4 = function (field) {
 callbackArguments.push(arguments) 

    field.setDisabled(newDisabled);
};
var argument5 = null;
var argument6 = function (varName) {
 callbackArguments.push(arguments) 

    if (_.isString(localVars[varName])) {
        localVars[varName] = grunt.template.process(localVars[varName]);
    } else {
        localVars[varName] = JSON.stringify(localVars[varName]);
    }
    varRegExps[varName] = varRegExps[varName] || new RegExp(options.prefix + varName + options.suffix, 'g');
    contents = contents.replace(varRegExps[varName], localVars[varName]);
};
var base_0 = [-100,157,0,1.7976931348623157e+308,595,157,-100,25,82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,157,0,1.7976931348623157e+308,595,157,-100,25,82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,157,0,1.7976931348623157e+308,595,157,-100,25,82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,157,0,1.7976931348623157e+308,595,157,-100,25,82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test240.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)