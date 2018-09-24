





var callbackArguments = [];
var argument1 = function (colObj) {
 callbackArguments.push(arguments) 

    return !!colObj.name.match(/\.col1$/);
};
var argument2 = [242,595,242,-100,607,627,595];
var argument3 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope];
    if (snippets)
        snippet = snippets[name];
    return !!snippet;
};
var argument4 = r_1;
var argument5 = 1.132128035583757e+308;
var argument6 = function (co) {
 callbackArguments.push(arguments) 

    return coHasOriginalValues(co);
};
var argument7 = function (a) {
 callbackArguments.push(arguments) 

    i++;
    arr.push(a + 3);
    return i > 3;
};
var argument8 = ["Wo4",843,"pY"];
var base_0 = [82,0,969,49,595,607,783,126,595]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,0,969,49,595,607,783,126,595]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,0,969,49,595,607,783,126,595]
var r_2= undefined
try {
r_2 = base_2.some(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,0,969,49,595,607,783,126,595]
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
require("fs").writeFileSync("./experiments/some/someMined/test156.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)