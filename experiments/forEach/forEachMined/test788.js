





var callbackArguments = [];
var argument1 = function (val, key) {
 callbackArguments.push(arguments) 

    delete angular.element.fragments[key];
};
var argument2 = true;
var argument3 = true;
var argument4 = function (locale) {
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
var argument5 = 1.708647635857625e+308;
var argument6 = "";
var argument7 = function (name) {
 callbackArguments.push(arguments) 

    console.log('Test', name, 'took', ben(150, function () {
        parser.parseComplete(tests[name]);
    }));
};
var argument8 = null;
var argument9 = function (expr, i) {
 callbackArguments.push(arguments) 

    if (i)
        output.comma();
    expr.print(output);
};
var base_0 = ["i","u","M|r","$nM","X","&","V","F"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["i","u","M|r","$nM","X","&","V","F"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["i","u","M|r","$nM","X","&","V","F"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["i","u","M|r","$nM","X","&","V","F"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test788.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)