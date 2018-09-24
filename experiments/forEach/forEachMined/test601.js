





var callbackArguments = [];
var argument1 = function (p) {
 callbackArguments.push(arguments) 

    paramNames[p] = true;
};
var argument2 = "V";
var argument3 = ["y"];
var argument4 = function (v) {
 callbackArguments.push(arguments) 

    relatedEntity = v.entityAspect ? v : navEntityType.createEntity(v);
    relatedEntities.push(relatedEntity);
};
var argument5 = null;
var argument6 = r_1;
var argument7 = function (locale) {
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
var argument8 = null;
var argument9 = r_0;
var argument10 = function (c) {
 callbackArguments.push(arguments) 

    pt1 = [
        c.p[0] / phys_scale,
        c.p[1] / phys_scale
    ];
    pt2 = [
        (c.p[0] + 280) / phys_scale,
        (c.p[1] + 280) / phys_scale
    ];
    ;
    checkpoints[c.n] = {
        'pt1': pt1,
        'pt2': pt2,
        'width': pt2[0] - pt1[0],
        'height': pt2[1] - pt1[1],
        'center': [
            (pt1[0] + pt2[0]) / 2,
            (pt1[1] + pt2[1]) / 2
        ]
    };
};
var argument11 = {"9":1.001705347062233e+308,"126":"","":"","1.3657620703247472e+308":1.1507615407994848e+308,"I":"O","UZE":"_","1.3952186269769712e+308":1.6982669307746574e+308};
var argument12 = r_0;
var base_0 = ["B:","Q",";V"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B:","Q",";V"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B:","Q",";V"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B:","Q",";V"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test601.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)