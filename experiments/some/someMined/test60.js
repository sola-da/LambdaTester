





var callbackArguments = [];
var argument1 = function (word) {
 callbackArguments.push(arguments) 

    return keyword === word;
};
var argument2 = function (colObj) {
 callbackArguments.push(arguments) 

    return !!colObj.name.match(/\.col1$/);
};
var argument3 = true;
var argument4 = function (klass) {
 callbackArguments.push(arguments) 

    return $a.hasClass(klass);
};
var argument5 = function (variable) {
 callbackArguments.push(arguments) 

    if (variable.name === ref.identifier.name) {
        if (!isImplicitGlobal(variable) || Object.hasOwnProperty.call(variable, 'writeable')) {
            declaredGlobal = variable;
            return true;
        }
    }
    return false;
};
var base_0 = ["+","vQ",">Z","X","Y","iW%","`ln","9","-"]
var r_0= undefined
try {
r_0 = base_0.some(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["+","vQ",">Z","X","Y","iW%","`ln","9","-"]
var r_1= undefined
try {
r_1 = base_1.some(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["+","vQ",">Z","X","Y","iW%","`ln","9","-"]
var r_2= undefined
try {
r_2 = base_2.some(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["+","vQ",">Z","X","Y","iW%","`ln","9","-"]
var r_3= undefined
try {
r_3 = base_3.some(argument5)
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
require("fs").writeFileSync("./experiments/some/someMined/test60.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)