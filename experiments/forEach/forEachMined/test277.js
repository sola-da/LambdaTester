





var callbackArguments = [];
var argument1 = function (mapping, name) {
 callbackArguments.push(arguments) 

    mapping.name = name;
    maps.push(mapping);
};
var argument2 = ["(0g","A","TTl","7"];
var argument3 = function (colGroup, cg) {
 callbackArguments.push(arguments) 

    this._colGroups[cg] = [colGroup];
};
var argument4 = {"82":"9k","607":"T?LS{J"," ":893,"":"V","h":1.9887810608221318e+307,"7.918015620340516e+307":3.090116693462502e+307};
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    tmp = tmp.concat(_createPart(item, boundary));
};
var argument6 = null;
var argument7 = "gD8 ?";
var argument8 = function (cp) {
 callbackArguments.push(arguments) 

    var nextTarget = target.getProperty(cp.name);
    if (cp.isScalar) {
        var unwrappedCo = unwrapOriginalValues(nextTarget, metadataStore, transformFn);
        if (!__isEmpty(unwrappedCo)) {
            result[fn(cp.name, cp)] = unwrappedCo;
        }
    } else {
        var unwrappedCos = nextTarget.map(function (item) {
                return unwrapOriginalValues(item, metadataStore, transformFn);
            });
        result[fn(cp.name, cp)] = unwrappedCos;
    }
};
var argument9 = r_0;
var argument10 = r_0;
var base_0 = [242,59,25,1.7976931348623157e+308]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,59,25,1.7976931348623157e+308]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,59,25,1.7976931348623157e+308]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,59,25,1.7976931348623157e+308]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test277.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)