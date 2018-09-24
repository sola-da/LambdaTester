





var callbackArguments = [];
var argument1 = function (fullViewName) {
 callbackArguments.push(arguments) 

    var parts = parseViewName(fullViewName);
    var designDocName = '_design/' + parts[0];
    var viewName = parts[1];
    docsToViews[designDocName] = docsToViews[designDocName] || {};
    docsToViews[designDocName][viewName] = true;
};
var argument2 = function (def) {
 callbackArguments.push(arguments) 

    def.mangle(options);
};
var argument3 = true;
var argument4 = function (value) {
 callbackArguments.push(arguments) 

    stats[valu"Error"]++;
};
var argument5 = function (node) {
 callbackArguments.push(arguments) 

    newP.appendChild(node);
};
var argument6 = {"0":1.6545453634612632e+308,"157":8.285222027030761e+307,"242":"","1.2854732441685844e+308":8.319315618409438e+307,"":1.0983518948175693e+308,"1,<":""};
var argument7 = 460;
var base_0 = ["$e","(","l","+vh?",">"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["$e","(","l","+vh?",">"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["$e","(","l","+vh?",">"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["$e","(","l","+vh?",">"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test40.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)