





var callbackArguments = [];
var argument1 = function (fieldError) {
 callbackArguments.push(arguments) 

    var attrName = fieldError.field, message = fieldError.message;
    if (!_.isArray(errors[attrName]))
        errors[attrName] = [];
    errors[attrName].push(message);
};
var argument2 = null;
var argument3 = function (completer, i) {
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
var argument4 = r_1;
var argument5 = function (value) {
 callbackArguments.push(arguments) 

    output.push(value);
};
var argument6 = r_1;
var argument7 = r_2;
var argument8 = function (e) {
 callbackArguments.push(arguments) 

    var group = entityGroupMap[e.entityType.name];
    if (!group) {
        group = {};
        group.entityType = e.entityType;
        group._entities = [];
        entityGroupMap[e.entityType.name] = group;
    }
    group._entities.push(e);
};
var base_0 = ["3)","h","5d{&"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["3)","h","5d{&"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["3)","h","5d{&"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["3)","h","5d{&"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test132.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)