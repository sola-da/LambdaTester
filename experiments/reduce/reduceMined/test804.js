





var callbackArguments = [];
var argument1 = function (u, elem) {
 callbackArguments.push(arguments) 

    if (u.indexOf(elem) < 0) {
        u.push(elem);
    }
    return u;
};
var argument2 = {"":618,"4.462397186278306e+307":49,"R9":"^?"};
var argument3 = r_0;
var argument4 = function (a, b) {
 callbackArguments.push(arguments) 

    if (a)
        visited[a] = true;
    if (b)
        visited[b] = true;
    return 0;
};
var argument5 = function (prev, cur) {
 callbackArguments.push(arguments) 

    return prev || cur(entity);
};
var argument6 = true;
var argument7 = null;
var argument8 = function (ret, set) {
 callbackArguments.push(arguments) 

    var name = downcaseFirst(set.name);
    ret[name] = collectify(jsifyHeaders(set.headers), set.rowSet);
    return ret;
};
var argument9 = false;
var argument10 = null;
var base_0 = ["vi8","j2","xM]Ha*","?","]"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["vi8","j2","xM]Ha*","?","]"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["vi8","j2","xM]Ha*","?","]"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["vi8","j2","xM]Ha*","?","]"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test804.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)