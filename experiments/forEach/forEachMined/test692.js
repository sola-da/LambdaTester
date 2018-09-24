





var callbackArguments = [];
var argument1 = function (def) {
 callbackArguments.push(arguments) 

    def.mangle(options);
};
var argument2 = function (file) {
 callbackArguments.push(arguments) 

    if (fsutils.isDirectory(d + '/' + file))
        return;
    if (file.charAt(0) == '.')
        return;
    if (file.substr(file.length - 3) === '.js')
        file = file.substr(0, file.length - 3);
    fileLoader.loadFile(type, file, dir);
};
var argument3 = {"783":"Q","969":1.668843712902519e+308,"1.0689775630670688e+308":"!","":"5"};
var argument4 = true;
var argument5 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope] || [];
    for (var i = snippets.length; i--;) {
        var s = snippets[i];
        var caption = s.name || s.tabTrigger;
        if (!caption)
            continue;
        completions.push({
            caption: caption,
            snippet: s.content,
            meta: s.tabTrigger && !s.name ? s.tabTrigger + '\u21E5 ' : 'snippet'
        });
    }
};
var argument6 = null;
var argument7 = function (point) {
 callbackArguments.push(arguments) 

    scalars.push(new Vector(point).dotProduct(axis));
};
var argument8 = null;
var base_0 = ["9i,G`xV","&","A","&","+$r","H","+8","9","M"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["9i,G`xV","&","A","&","+$r","H","+8","9","M"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["9i,G`xV","&","A","&","+$r","H","+8","9","M"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["9i,G`xV","&","A","&","+$r","H","+8","9","M"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test692.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)