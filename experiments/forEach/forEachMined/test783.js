





var callbackArguments = [];
var argument1 = function (source) {
 callbackArguments.push(arguments) 

    if (/\.js$/.test(source))
        pbjs.sources[source.substring(0, source.lastIndexOf('.'))] = require(__dirname + '/pbjs/sources/' + source);
};
var argument2 = null;
var argument3 = true;
var argument4 = function (file) {
 callbackArguments.push(arguments) 

    if (file.id === id) {
        tmp = file;
        return false;
    }
};
var argument5 = 100;
var argument6 = null;
var argument7 = function (joinObserver) {
 callbackArguments.push(arguments) 

    joinObserver.subscribe();
    group.add(joinObserver);
};
var argument8 = r_0;
var argument9 = [49,213,49,100,82,714,595,823,823];
var argument10 = function (completer, i) {
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
var argument11 = false;
var argument12 = false;
var base_0 = [-1,213,0,705,126,893,242,126,100]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,213,0,705,126,893,242,126,100]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-1,213,0,705,126,893,242,126,100]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-1,213,0,705,126,893,242,126,100]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test783.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)