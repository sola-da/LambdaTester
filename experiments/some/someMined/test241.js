





var callbackArguments = [];
var argument1 = function (db) {
 callbackArguments.push(arguments) 

    return db.id === doc.id;
};
var argument2 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope];
    if (snippets)
        snippet = this.findMatchingSnippet(snippets, before, after);
    return !!snippet;
};
var argument3 = r_1;
var argument4 = function () {
 callbackArguments.push(arguments) 

    return true;
};
var argument5 = r_1;
var argument6 = function (isCustomAttributeFn) {
 callbackArguments.push(arguments) 

    return isCustomAttributeFn.call(null, attributeName);
};
var argument7 = false;
var base_0 = ["S=A","Fy","t?F-q","(e&``","6","f","[`"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["S=A","Fy","t?F-q","(e&``","6","f","[`"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["S=A","Fy","t?F-q","(e&``","6","f","[`"]
var r_2= undefined
try {
r_2 = base_2.some(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["S=A","Fy","t?F-q","(e&``","6","f","[`"]
var r_3= undefined
try {
r_3 = base_3.some(argument6,argument7)
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
require("fs").writeFileSync("./experiments/some/someMined/test241.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)