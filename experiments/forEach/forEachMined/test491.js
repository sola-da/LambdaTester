





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    if (file.indexOf(fn.jsFunctionName) < 0 && functionIgnores.indexOf(fn.jsFunctionName) < 0) {
        functionsResult.push(fn.jsFunctionName);
    }
};
var argument2 = function (selectedTransclude) {
 callbackArguments.push(arguments) 

    var selectedScope = scope.$new();
    selectedScopes.push(selectedScope);
    selectedTransclude.transclude(selectedScope, function (caseElement) {
        var anchor = selectedTransclude.element;
        selectedElements.push(caseElement);
        animate.enter(caseElement, anchor.parent(), anchor);
    });
};
var argument3 = null;
var argument4 = function (stmt, i) {
 callbackArguments.push(arguments) 

    if (i)
        output.newline();
    output.indent(true);
    stmt.print(output);
};
var argument5 = r_0;
var argument6 = function (container) {
 callbackArguments.push(arguments) 

    return container.destroy();
};
var argument7 = {"!":"","":4.282066024094841e+307,"s7":714,"7.625642843406253e+307":705};
var base_0 = [607,25,25,100,126,49]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,25,25,100,126,49]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,25,25,100,126,49]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,25,25,100,126,49]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test491.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)