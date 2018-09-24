





var callbackArguments = [];
var argument1 = function (level, i) {
 callbackArguments.push(arguments) 

    nestedData.key(function (d) {
        if (typeof level === 'function') {
            return level(d);
        }
        return fetchValue(vars, d, level);
    });
    checkAxes();
};
var argument2 = false;
var argument3 = function (param) {
 callbackArguments.push(arguments) 

    if (param.message === 'Identifier' && env[Finder.findESLintEnvForMember(param.name)]) {
        context.report(param, 'Parameter \'${0}\' shadows a global member', {
            0: param.name,
            nls: 'no-shadow-global-param'
        });
    }
};
var argument4 = null;
var argument5 = false;
var argument6 = function (elementName) {
 callbackArguments.push(arguments) 

    var constructor = window['HTML' + elementName + 'Element'];
    if (constructor && constructor.prototype) {
        wrapDOMEventsHelper(constructor.prototype);
    }
};
var argument7 = r_2;
var argument8 = "rSi";
var argument9 = function (e) {
 callbackArguments.push(arguments) 

    var n = 'on' + e;
    var m = obs[n];
    if (m)
        withDefaults[n] = function () {
            m.apply(obs, arguments);
        };
    else
        withDefaults[n] = function () {
        };
};
var base_0 = ["bn?jE{@ohI","bf","h:Ir","M"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["bn?jE{@ohI","bf","h:Ir","M"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["bn?jE{@ohI","bf","h:Ir","M"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["bn?jE{@ohI","bf","h:Ir","M"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test282.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)