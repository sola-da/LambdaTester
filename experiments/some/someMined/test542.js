





var callbackArguments = [];
var argument1 = function (es) {
 callbackArguments.push(arguments) 

    return e.entityAspect.entityState === es;
};
var argument2 = 714;
var argument3 = false;
var argument4 = function (v) {
 callbackArguments.push(arguments) 

    return v2(v);
};
var argument5 = false;
var argument6 = false;
var argument7 = function (state) {
 callbackArguments.push(arguments) 

    if (message.state !== state) {
        return false;
    }
    var stateCase = Background.badgeStates[state];
    chrome.browserAction.setPopup({ popup: stateCase.popup === false ? '' : 'now-playing/popup.html' });
    self.setBadge(stateCase.text, stateCase.color || '');
    return true;
};
var argument8 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope];
    if (snippets)
        snippet = this.findMatchingSnippet(snippets, before, after);
    return !!snippet;
};
var argument9 = r_3;
var base_0 = ["=",")","0","(o"]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["=",")","0","(o"]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["=",")","0","(o"]
var r_2= undefined
try {
r_2 = base_2.some(argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["=",")","0","(o"]
var r_3= undefined
try {
r_3 = base_3.some(argument8,argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test542.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)