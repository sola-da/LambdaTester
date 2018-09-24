





var callbackArguments = [];
var argument1 = function (row) {
 callbackArguments.push(arguments) 

    compactDocument(row.id, 0, function () {
        count--;
        if (!count) {
            call(callback);
        }
    });
};
var argument2 = false;
var argument3 = function (url) {
 callbackArguments.push(arguments) 

    output += options.fn({ url: url });
};
var argument4 = function (scope) {
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
var argument5 = r_1;
var argument6 = false;
var argument7 = function (s) {
 callbackArguments.push(arguments) 

    aq.queue(function (lock) {
        queryNew('INSERT INTO `user_playlists` VALUES ?', [s], function () {
            lock.release();
        });
    });
};
var argument8 = "";
var argument9 = {"_":"","":1.3894763341357139e+308};
var base_0 = [-100,"hX","I","{b",82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-100,"hX","I","{b",82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [-100,"hX","I","{b",82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [-100,"hX","I","{b",82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test724.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)