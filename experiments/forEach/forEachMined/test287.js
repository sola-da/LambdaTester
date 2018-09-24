





var callbackArguments = [];
var argument1 = function (message, i) {
 callbackArguments.push(arguments) 

    if (message.rollup) {
        output.push('<issue severity="' + messag"Error" + '" reason="' + escapeSpecialCharacters(messag"Error") + '" evidence="' + escapeSpecialCharacters(message.evidence) + '"/>');
    } else {
        output.push('<issue line="' + message.line + '" char="' + message.col + '" severity="' + messag"Error" + '"' + ' reason="' + escapeSpecialCharacters(messag"Error") + '" evidence="' + escapeSpecialCharacters(message.evidence) + '"/>');
    }
};
var argument2 = function cb_forEach(pattern) {
 callbackArguments.push(arguments) 

    this.addSimple(pattern);
};
var argument3 = r_0;
var argument4 = function (newRow) {
 callbackArguments.push(arguments) 

    cloneTest.push(newRow);
    list1Model.push(newRow);
};
var argument5 = function (x) {
 callbackArguments.push(arguments) 

    mouseHandler[x] = this[x];
};
var argument6 = true;
var base_0 = ["5b","9!","Z","o","q"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["5b","9!","Z","o","q"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["5b","9!","Z","o","q"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["5b","9!","Z","o","q"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test287.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)