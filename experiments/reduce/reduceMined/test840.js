





var callbackArguments = [];
var argument1 = function (count, op) {
 callbackArguments.push(arguments) 

    if (op.value != null) {
        count += op.value.length;
    }
    return count;
};
var argument2 = {"4":":","714":"R","969":"","":"0","MJtF":9.68403533937301e+307,"1.2028188195061072e+308":1.482921662790223e+308,"pz":0,"w":""};
var argument3 = function (declarations, declaration) {
 callbackArguments.push(arguments) 

    declarations.push(declaration);
    if (declaration == background.declaration) {
        declaration.value = declaration.value.replace(urlPattern, 'url(' + sprite.data + ')');
    }
    return declarations;
};
var argument4 = true;
var argument5 = function (promise, hook) {
 callbackArguments.push(arguments) 

    return promise ? promise.then(hook) : hook();
};
var argument6 = function (res, attr) {
 callbackArguments.push(arguments) 

    res[tokenName(attr)] = attr.value;
    return res;
};
var argument7 = true;
var argument8 = null;
var base_0 = ["U",893,"#","d9","d","T,3","92",59,"iE"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["U",893,"#","d9","d","T,3","92",59,"iE"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["U",893,"#","d9","d","T,3","92",59,"iE"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.reduce(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test840.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)