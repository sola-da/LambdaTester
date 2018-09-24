





var callbackArguments = [];
var argument1 = function (record) {
 callbackArguments.push(arguments) 

    if (Ext.isEmpty(record.get('translatedElement')) || Ext.isEmpty(record.get('translateToLanguage'))) {
        allGood = false;
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
var argument3 = function (plat) {
 callbackArguments.push(arguments) 

    kw.browser_min[plat.browser] = plat.version;
};
var argument4 = false;
var argument5 = function (observer) {
 callbackArguments.push(arguments) 

    var queue = observer.takeRecords();
    removeTransientObserversFor(observer);
    if (queue.length) {
        observer.callback_(queue, observer);
        anyNonEmpty = true;
    }
};
var argument6 = r_2;
var base_0 = ["dgO","1-&","?","d,","3","a"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["dgO","1-&","?","d,","3","a"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["dgO","1-&","?","d,","3","a"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["dgO","1-&","?","d,","3","a"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test401.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)