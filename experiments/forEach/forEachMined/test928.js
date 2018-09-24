





var callbackArguments = [];
var argument1 = function (selectedTransclude) {
 callbackArguments.push(arguments) 

    var selectedScope = scope.$new();
    selectedScopes.push(selectedScope);
    selectedTransclude.transclude(selectedScope, function (caseElement) {
        var anchor = selectedTransclude.element;
        selectedElements.push(caseElement);
        animate.enter(caseElement, anchor.parent(), anchor);
    });
};
var argument2 = true;
var argument3 = false;
var argument4 = function (tok) {
 callbackArguments.push(arguments) 

    isundef(funct, 'W117', tok.token, tok.id);
};
var argument5 = 1.1146871239474459e+308;
var argument6 = null;
var argument7 = function (item, name) {
 callbackArguments.push(arguments) 

    stringsApp[key] = stringsApp[key].replace(new RegExp('{' + name + '}', 'g'), additionalGlobals[name]);
};
var argument8 = r_1;
var argument9 = null;
var argument10 = function (file) {
 callbackArguments.push(arguments) 

    if (path.extname(file) == '.js' && path.basename(file, '.js') != 'package') {
        readClientFile(file, {
            'sumeru': fw,
            'Model': Model
        });
    }
    ;
};
var base_0 = [0,460,100,843,49,157,126,25,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,460,100,843,49,157,126,25,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,460,100,843,49,157,126,25,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,460,100,843,49,157,126,25,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test928.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)