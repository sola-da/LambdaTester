





var callbackArguments = [];
var argument1 = function (scope) {
 callbackArguments.push(arguments) 

    var snippets = snippetMap[scope];
    if (snippets)
        snippet = this.findMatchingSnippet(snippets, before, after);
    return !!snippet;
};
var argument2 = null;
var argument3 = ["7","OJ"];
var argument4 = function (element) {
 callbackArguments.push(arguments) 

    if (currentModel.location === element.location) {
        return true;
    } else if (element.checked) {
        changeIndex++;
    }
    return false;
};
var argument5 = null;
var argument6 = function (es) {
 callbackArguments.push(arguments) 

    return e.entityAspect.entityState === es;
};
var argument7 = {"":843,"8.017633214005706e+307":"","T;":1.0649488299276588e+308};
var argument8 = [82];
var argument9 = function (match) {
 callbackArguments.push(arguments) 

    return match.route.props.ignoreScrollBehavior;
};
var base_0 = [714,59,893,"t","H5>*m","Z",59,126,0]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [714,59,893,"t","H5>*m","Z",59,126,0]
var r_1= undefined
try {
r_1 = base_1.some(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [714,59,893,"t","H5>*m","Z",59,126,0]
var r_2= undefined
try {
r_2 = base_2.some(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [714,59,893,"t","H5>*m","Z",59,126,0]
var r_3= undefined
try {
r_3 = base_3.some(argument9)
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
require("fs").writeFileSync("./experiments/some/someMined/test254.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)