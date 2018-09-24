





var callbackArguments = [];
var argument1 = function (k, v) {
 callbackArguments.push(arguments) 

    if (parseInt(_r.exits[k]) != -1) {
        _r[k] = _r['go ' + k] = _r.exits[k];
    } else {
        _r[k] = _r['go ' + k] = 'nothing';
    }
};
var argument2 = function (val, key) {
 callbackArguments.push(arguments) 

    result.push(key);
};
var argument3 = function (w) {
 callbackArguments.push(arguments) 

    if (w && w.rowCount)
        screenRows += w.rowCount;
};
var argument4 = function (background) {
 callbackArguments.push(arguments) 

    var rule = background.rule;
    var declarations = rule.declarations.reduce(function (declarations, declaration) {
            declarations.push(declaration);
            if (declaration == background.declaration) {
                declaration.value = declaration.value.replace(urlPattern, 'url(' + sprite.data + ')');
            }
            return declarations;
        }, []);
    rule.declarations = declarations;
    rules.push(rule);
};
var argument5 = "s4";
var argument6 = {"3":1.153630126244212e+308,"157":1.5675829652076046e+308,"213":"","823":627,"8.600329109242109e+307":"","4.910993572705758e+306":"{sW","-100":1.6435300300566424e+308,"":"","F":2.465409902970044e+307};
var base_0 = [403,893,823,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,893,823,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,893,823,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,893,823,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test357.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)