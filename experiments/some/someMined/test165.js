





var callbackArguments = [];
var argument1 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope];
    if (snippets)
        snippet = this.findMatchingSnippet(snippets, before, after);
    return !!snippet;
};
var argument2 = true;
var argument3 = function (el) {
 callbackArguments.push(arguments) 

    return el.num === 3 && el.char === 'C';
};
var argument4 = true;
var argument5 = function (enumType) {
 callbackArguments.push(arguments) 

    return enumType.name === baseTypeName;
};
var argument6 = function (match) {
 callbackArguments.push(arguments) 

    return match.route.props.ignoreScrollBehavior;
};
var argument7 = false;
var base_0 = ["`<5;",1.7976931348623157e+308,823]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["`<5;",1.7976931348623157e+308,823]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["`<5;",1.7976931348623157e+308,823]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["`<5;",1.7976931348623157e+308,823]
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
require("fs").writeFileSync("./experiments/some/someMined/test165.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)