





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    nodeNameCache[name].each(fn);
};
var argument2 = false;
var argument3 = r_0;
var argument4 = function (letter) {
 callbackArguments.push(arguments) 

    expect(XRegExp('\\P{L}').test(letter)).toBe(false);
    expect(XRegExp('\\P{Letter}').test(letter)).toBe(false);
    expect(XRegExp('\\PL').test(letter)).toBe(false);
    expect(XRegExp('\\p{^L}').test(letter)).toBe(false);
    expect(XRegExp('\\p{^Letter}').test(letter)).toBe(false);
};
var argument5 = false;
var argument6 = [0,122,0,0,0,607,705];
var argument7 = function (depth, i) {
 callbackArguments.push(arguments) 

    var nestingDepth = vars.id.nesting.slice(0, i + 1);
    vars.data.nested.all[depth] = dataNest(vars, vars.data.value, nestingDepth);
};
var argument8 = {"893":893,"9.749235519940835e+307":0,"'42vm":1.0251186506679127e+308,"d2":"8T","C0":1.2280664471628206e+308,"":403,"J|":"*","3.547374553268178e+305":""};
var argument9 = "";
var argument10 = function (c) {
 callbackArguments.push(arguments) 

    var method = c.method;
    delete c.method;
    changesObject[method] = c;
};
var argument11 = false;
var base_0 = [" ","Q,","qv","-I","Hy@:",":&","mr"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [" ","Q,","qv","-I","Hy@:",":&","mr"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [" ","Q,","qv","-I","Hy@:",":&","mr"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = [" ","Q,","qv","-I","Hy@:",":&","mr"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test518.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)