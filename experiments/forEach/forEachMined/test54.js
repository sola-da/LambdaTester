





var callbackArguments = [];
var argument1 = function (key, node) {
 callbackArguments.push(arguments) 

    var nx = node.nodeData.x;
    var ny = node.nodeData.y;
    var d = 0.0001 + Math.sqrt(nx * nx + ny * ny);
    var gf = 0.0001 * that.gravity * d;
    node.layoutData.dx -= gf * nx / d;
    node.layoutData.dy -= gf * ny / d;
};
var argument2 = null;
var argument3 = false;
var argument4 = function (cp) {
 callbackArguments.push(arguments) 

    var cos = target.getProperty(cp.name);
    if (cp.isScalar) {
        clearOriginalValues(cos);
    } else {
        cos._acceptChanges();
        cos.forEach(function (co) {
            clearOriginalValues(co);
        });
    }
};
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
var argument6 = function _(key, value) {
 callbackArguments.push(arguments) 

    f(key);
};
var base_0 = [705,122,-100,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,122,-100,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,122,-100,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,122,-100,618]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test54.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)