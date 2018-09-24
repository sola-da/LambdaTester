





var callbackArguments = [];
var argument1 = function (chunk, i) {
 callbackArguments.push(arguments) 

    if (!chunk) {
        chunks[i] = '';
    } else {
        chunks[i] = (literal ? applyLiteral : applyPattern)(chunk.replace(/''/g, '\''));
        literal = !literal;
    }
};
var argument2 = true;
var argument3 = null;
var argument4 = function (fold) {
 callbackArguments.push(arguments) 

    this.addFold(fold);
};
var argument5 = true;
var argument6 = "r";
var argument7 = function (e) {
 callbackArguments.push(arguments) 

    h(t, e, n, i).forEach(function (e) {
        delete s[o][e.i], 'removeEventListener' in t && t.removeEventListener(g(e.e), e.proxy, m(e, r));
    });
};
var argument8 = true;
var argument9 = true;
var argument10 = function (prompt) {
 callbackArguments.push(arguments) 

    prompt.message = chalk.stripColor(prompt.message);
};
var argument11 = 1.7285695815143917e+308;
var argument12 = null;
var base_0 = ["l^",";b","15X","Ov",":N+","_R<","2&j|W","}nl","["]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["l^",";b","15X","Ov",":N+","_R<","2&j|W","}nl","["]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["l^",";b","15X","Ov",":N+","_R<","2&j|W","}nl","["]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["l^",";b","15X","Ov",":N+","_R<","2&j|W","}nl","["]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test176.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)