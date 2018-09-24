





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    loadSnippetFile('ace/mode/' + x);
};
var argument2 = true;
var argument3 = null;
var argument4 = function (v) {
 callbackArguments.push(arguments) 

    if (isObject(v)) {
        v = toJson(v);
    }
    parts.push(encodeUriQuery(key) + '=' + encodeUriQuery(v));
};
var argument5 = "q";
var argument6 = {"403":1.545499818989827e+308,"627":"N","843":607,"893":122,"1.1263332910886178e+308":1.2975605381860708e+308,"":1.7976931348623157e+308,"6.752001666510189e+307":403,"-1":403,"p] ":6.090480675172689e+306};
var argument7 = function (sectionShapeForEach) {
 callbackArguments.push(arguments) 

    sectionShapeForEach.setTransLate(translate);
};
var argument8 = true;
var argument9 = null;
var argument10 = function (stmt, i) {
 callbackArguments.push(arguments) 

    if (!(stmt instanceof AST_EmptyStatement)) {
        output.indent();
        stmt.print(output);
        if (!(i == last && is_toplevel)) {
            output.newline();
            if (is_toplevel)
                output.newline();
        }
    }
};
var base_0 = [969,823,122,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [969,823,122,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [969,823,122,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [969,823,122,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test849.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)