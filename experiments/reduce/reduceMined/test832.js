





var callbackArguments = [];
var argument1 = function (acc, e) {
 callbackArguments.push(arguments) 

    if (acc.indexOf("Error") === -1) {
        acc.push("Error");
    }
    return acc;
};
var argument2 = null;
var argument3 = function (declarations, declaration) {
 callbackArguments.push(arguments) 

    declarations.push(declaration);
    if (declaration == background.declaration) {
        declaration.value = declaration.value.replace(urlPattern, 'url(' + sprite.data + ')');
    }
    return declarations;
};
var argument4 = function (styles, str) {
 callbackArguments.push(arguments) 

    var name, value, _ref;
    _ref = str.split(':'), name = _ref[0], value = _ref[1];
    if (name && value) {
        name = name.trim();
        value = value.trim();
        styles[name.toLowerCase()] = value;
    }
    return styles;
};
var argument5 = function (prev, cur) {
 callbackArguments.push(arguments) 

    numLinesEst++;
    if (cur.indexOf('\n') >= 0)
        numLinesEst++;
    return prev + cur.length + 1;
};
var argument6 = true;
var argument7 = null;
var base_0 = ["P",")4","1","1","#"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["P",")4","1","1","#"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["P",")4","1","1","#"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["P",")4","1","1","#"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test832.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)