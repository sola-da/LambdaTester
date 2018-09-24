





var callbackArguments = [];
var argument1 = function (y, i) {
 callbackArguments.push(arguments) 

    if (i != 0) {
        var prev = vars.data.time.values[i - 1];
        step.push(y - prev);
        if (i === vars.data.time.values.length - 1) {
            vars.data.time.total = y - vars.data.time.values[0];
        }
    }
};
var argument2 = null;
var argument3 = function (fold) {
 callbackArguments.push(arguments) 

    fold.setFoldLine(foldLine);
};
var argument4 = function (el, i) {
 callbackArguments.push(arguments) 

    if (matchesSelector && matchesSelector.call(el, ':focus'))
        index = i;
};
var argument5 = 403;
var argument6 = function (d) {
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
var argument7 = null;
var base_0 = [157,783,460,969,59,126]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,783,460,969,59,126]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,783,460,969,59,126]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,783,460,969,59,126]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test587.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)