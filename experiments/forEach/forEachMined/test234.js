





var callbackArguments = [];
var argument1 = function (layer) {
 callbackArguments.push(arguments) 

    var ts = '';
    if (layer.time && layer.time.substr(0, 4) != '9999') {
        ts = layer.time.substr(0, 4);
    }
    searchableLayers.push(layer.bodId);
    timeEnabled.push(layer.timeEnabled);
    timeStamps.push(ts);
};
var argument2 = {"595":"","618":122,"":"",";":""};
var argument3 = false;
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
var argument5 = "{i";
var argument6 = "t(";
var argument7 = function (rect) {
 callbackArguments.push(arguments) 

    this.invalidateRect(adjustRect(rect));
};
var argument8 = false;
var argument9 = function (handler) {
 callbackArguments.push(arguments) 

    var serverProxy = createServerProxy(handler.hubName, ServerConnectionBackend.server(handler.hubName));
    handler.hub.server = serverProxy;
    handler.doneFn();
};
var argument10 = false;
var base_0 = [595,"e",49,"+4[",":s"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,"e",49,"+4[",":s"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,"e",49,"+4[",":s"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,"e",49,"+4[",":s"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test234.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)