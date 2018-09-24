





var callbackArguments = [];
var argument1 = function (klass, i) {
 callbackArguments.push(arguments) 

    activeClassName += (i > 0 ? ' ' : '') + klass + '-active';
};
var argument2 = function (d) {
 callbackArguments.push(arguments) 

    vars.self[d] = function (dep, n) {
        return function (x) {
            if (vars.dev.value && vars.methodGroup) {
                d3plus.console.groupEnd();
                vars.methodGroup = false;
            }
            var str = vars.format.locale.value.dev.deprecated;
            dep = '.' + dep + '()';
            d3plus.console.error(d3plus.string.format(str, dep, '.' + n + '()'), n);
            return vars.self;
        };
    }(d, method);
};
var argument3 = function (annotation) {
 callbackArguments.push(arguments) 

    self.tracer.record([[
            t,
            [annotation]
        ]]);
};
var argument4 = r_2;
var argument5 = function (name) {
 callbackArguments.push(arguments) 

    var pd = trait[name];
    if (!hasOwnProperty(newTrait, name) || newTrait[name].required) {
        newTrait[name] = pd;
    }
};
var argument6 = null;
var base_0 = [783,655]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,655]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,655]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,655]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test487.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)