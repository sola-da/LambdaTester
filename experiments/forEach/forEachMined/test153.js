





var callbackArguments = [];
var argument1 = function (locale) {
 callbackArguments.push(arguments) 

    var target = bundlePathAndName + '/' + locale;
    if (has('dojo-preload-i18n-Api')) {
        checkForLegacyModules(target);
    }
    if (!cache[target]) {
        doLoad(require, bundlePathAndName, bundlePath, bundleName, locale, finish);
    } else {
        finish();
    }
};
var argument2 = true;
var argument3 = function (selectedTransclude) {
 callbackArguments.push(arguments) 

    var selectedScope = scope.$new();
    selectedScopes.push(selectedScope);
    selectedTransclude.transclude(selectedScope, function (caseElement) {
        var anchor = selectedTransclude.element;
        selectedElements.push(caseElement);
        animate.enter(caseElement, anchor.parent(), anchor);
    });
};
var argument4 = null;
var argument5 = null;
var argument6 = function (key, index) {
 callbackArguments.push(arguments) 

    code += 'if(s === null || s === undefined) return s;\n' + 'l=s;\n' + 's=' + (index ? 's' : '((k&&k.hasOwnProperty("' + key + '"))?k:s)') + '["' + key + '"]' + ';\n' + 'if (s && s.then) {\n' + ' if (!("$$v" in s)) {\n' + ' p=s;\n' + ' p.$$v = undefined;\n' + ' p.then(function(v) {p.$$v=v;});\n' + '}\n' + ' s=s.$$v\n' + '}\n';
};
var argument7 = 49;
var argument8 = -1;
var argument9 = function (value) {
 callbackArguments.push(arguments) 

    output.push(value);
};
var argument10 = "";
var argument11 = null;
var base_0 = [460,-1,627,49,0,893,627,655,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,-1,627,49,0,893,627,655,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,-1,627,49,0,893,627,655,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,-1,627,49,0,893,627,655,59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test153.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)