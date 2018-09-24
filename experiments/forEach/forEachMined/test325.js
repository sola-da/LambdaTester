





var callbackArguments = [];
var argument1 = function (child) {
 callbackArguments.push(arguments) 

    var childRow = this.explorer.getRow(child);
    childRow.parentNode.removeChild(childRow);
};
var argument2 = function (url) {
 callbackArguments.push(arguments) 

    output += options.fn({ url: url });
};
var argument3 = true;
var argument4 = r_1;
var argument5 = function (calcSpec) {
 callbackArguments.push(arguments) 

    complexTypeProj.setCalc(calcSpec);
};
var argument6 = [1.7976931348623157e+308,0,0,126,"a","W0",213,"B","x"];
var argument7 = function (message, i) {
 callbackArguments.push(arguments) 

    if (message.rollup) {
        output.push('<issue severity="' + messag"Error" + '" reason="' + escapeSpecialCharacters(messag"Error") + '" evidence="' + escapeSpecialCharacters(message.evidence) + '"/>');
    } else {
        output.push('<issue line="' + message.line + '" char="' + message.col + '" severity="' + messag"Error" + '"' + ' reason="' + escapeSpecialCharacters(messag"Error") + '" evidence="' + escapeSpecialCharacters(message.evidence) + '"/>');
    }
};
var argument8 = null;
var base_0 = [49,126,893,59]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,126,893,59]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,126,893,59]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,126,893,59]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test325.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)