





var callbackArguments = [];
var argument1 = function (message, i) {
 callbackArguments.push(arguments) 

    if (!message.rollup) {
        output.push('<error line="' + message.line + '" column="' + message.col + '" severity="' + messag"Error" + '"' + ' message="' + escapeSpecialCharacters(messag"Error") + '" source="' + generateSourc"Error".rule) + '"/>');
    }
};
var argument2 = 25;
var argument3 = function (prop) {
 callbackArguments.push(arguments) 

    prop._walk(visitor);
};
var argument4 = null;
var argument5 = function (a) {
 callbackArguments.push(arguments) 

    i++;
    arr.push(a + 3);
};
var argument6 = 1.1332863880279324e+308;
var argument7 = true;
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    d.task = db[d.name].apply(null, d.parameters);
};
var argument9 = r_3;
var base_0 = [0,49,969,595,126,714]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [0,49,969,595,126,714]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [0,49,969,595,126,714]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [0,49,969,595,126,714]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test976.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)