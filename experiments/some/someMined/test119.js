





var callbackArguments = [];
var argument1 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope];
    if (snippets)
        snippet = this.findMatchingSnippet(snippets, before, after);
    return !!snippet;
};
var argument2 = function (state) {
 callbackArguments.push(arguments) 

    if (message.state !== state) {
        return false;
    }
    var stateCase = Background.badgeStates[state];
    chrome.browserAction.setPopup({ popup: stateCase.popup === false ? '' : 'now-playing/popup.html' });
    self.setBadge(stateCase.text, stateCase.color || '');
    return true;
};
var argument3 = null;
var argument4 = r_1;
var argument5 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === 'docA';
};
var argument6 = null;
var argument7 = function (v, i) {
 callbackArguments.push(arguments) 

    if (!(v instanceof Deferred)) {
        cancel(i);
        x.callback(v);
        return true;
    }
    return false;
};
var argument8 = true;
var base_0 = [100,"oW?","Y",0]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"oW?","Y",0]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"oW?","Y",0]
var r_2= undefined
try {
r_2 = base_2.some(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,"oW?","Y",0]
var r_3= undefined
try {
r_3 = base_3.some(argument7,argument8)
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
require("fs").writeFileSync("./experiments/some/someMined/test119.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)