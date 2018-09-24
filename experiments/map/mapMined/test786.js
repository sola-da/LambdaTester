





var callbackArguments = [];
var argument1 = function (a) {
 callbackArguments.push(arguments) 

    return {
        name: a.name,
        value: a.value.eval(env)
    };
};
var argument2 = "";
var argument3 = {"0":25,"25":"","122":"","655":59,"":783,":%w":"","p":"","^mH":"k:","7.201740767400223e+307":1.5934492197340131e+308,"ib":"n)"};
var argument4 = function (x) {
 callbackArguments.push(arguments) 

    x = x.clone();
    if (x.start.row == oldStart.row)
        x.start.column += collDiff;
    if (x.end.row == oldStart.row)
        x.end.column += collDiff;
    x.start.row += rowDiff;
    x.end.row += rowDiff;
    return x;
};
var argument5 = "";
var argument6 = ["D","p","A0 "];
var argument7 = function (pred) {
 callbackArguments.push(arguments) 

    return Predicate(pred);
};
var argument8 = "n";
var argument9 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var base_0 = [403,157,-1,783,823,823]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,157,-1,783,823,823]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,157,-1,783,823,823]
var r_2= undefined
try {
r_2 = base_2.map(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,157,-1,783,823,823]
var r_3= undefined
try {
r_3 = base_3.map(argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test786.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)