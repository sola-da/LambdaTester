





var callbackArguments = [];
var argument1 = function (node, index) {
 callbackArguments.push(arguments) 

    node = Y.one(node);
    context = context || node;
    return fn.call(context, node, index, instance);
};
var argument2 = function (cachingLayer) {
 callbackArguments.push(arguments) 

    if (features.some(function (feature) {
            return feature.name === cachingLayer;
        })) {
        features.local = RemoteStorage[cachingLayer];
        return true;
    }
};
var argument3 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope];
    if (snippets)
        snippet = this.findMatchingSnippet(snippets, before, after);
    return !!snippet;
};
var argument4 = null;
var argument5 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope];
    if (snippets)
        snippet = this.findMatchingSnippet(snippets, before, after);
    return !!snippet;
};
var base_0 = ["2","H","GoU","i","a"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["2","H","GoU","i","a"]
var r_1= undefined
try {
r_1 = base_1.some(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["2","H","GoU","i","a"]
var r_2= undefined
try {
r_2 = base_2.some(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["2","H","GoU","i","a"]
var r_3= undefined
try {
r_3 = base_3.some(argument5)
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
require("fs").writeFileSync("./experiments/some/someMined/test512.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)