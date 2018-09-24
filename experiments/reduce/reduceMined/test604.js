





var callbackArguments = [];
var argument1 = function (declarations, declaration) {
 callbackArguments.push(arguments) 

    declarations.push(declaration);
    if (declaration == background.declaration) {
        declaration.value = declaration.value.replace(urlPattern, 'url(' + sprite.data + ')');
    }
    return declarations;
};
var argument2 = "";
var argument3 = true;
var argument4 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument5 = null;
var argument6 = r_0;
var argument7 = function (err, results) {
 callbackArguments.push(arguments) 

    callback.apply(that, [err].concat(results));
};
var argument8 = true;
var argument9 = r_0;
var argument10 = function (sum2, datum) {
 callbackArguments.push(arguments) 

    var value = datum.atoms[dimName].value;
    isAbs && 0 > value && (value = -value);
    return null != sum2 ? sum2 + value : value;
};
var argument11 = {"49":"2d=","403":"",";":460,"D":714,"1.69498175792665e+308":"","":627,"W":9.565898340562453e+306,"}t":9.533671009479324e+307,"L":607};
var argument12 = r_3;
var base_0 = ["h",">&ZkP","4","Qt","0","b9"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["h",">&ZkP","4","Qt","0","b9"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["h",">&ZkP","4","Qt","0","b9"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["h",">&ZkP","4","Qt","0","b9"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test604.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)