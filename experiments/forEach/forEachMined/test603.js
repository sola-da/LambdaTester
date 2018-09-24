





var callbackArguments = [];
var argument1 = function (exp, i) {
 callbackArguments.push(arguments) 

    if (i)
        output.comma();
    exp.print(output);
    if (i === len - 1 && exp instanceof AST_Hole)
        output.comma();
};
var argument2 = 1.3697957409864844e+308;
var argument3 = ["|k","p","dx;a","&","seE=fn"];
var argument4 = function (prop) {
 callbackArguments.push(arguments) 

    parseCsdlNavProperty(entityType, prop, schema);
};
var argument5 = function (arg) {
 callbackArguments.push(arguments) 

    if (!/^-/.exec(arg))
        that.argsWithoutOptions.push(arg);
    var result = /^--git-dir=(.*)$/.exec(arg);
    if (result) {
        if (result[1][0] == '/') {
            that.gitDir = result[1];
        } else {
            that.gitDir = path.join(process.cwd(), result[1]);
        }
    } else {
        result = /^(--.*)/.exec(arg);
        if (result) {
            that.argOptions.push(result[1]);
        }
    }
};
var argument6 = function (child, index, array) {
 callbackArguments.push(arguments) 

    result[index] = clone(child);
};
var argument7 = true;
var base_0 = [213,607]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [213,607]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [213,607]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [213,607]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test603.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)