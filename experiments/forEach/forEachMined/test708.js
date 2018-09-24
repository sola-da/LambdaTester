





var callbackArguments = [];
var argument1 = function (x) {
 callbackArguments.push(arguments) 

    loadSnippetFile('ace/mode/' + x);
};
var argument2 = function (dep, index) {
 callbackArguments.push(arguments) 

    return depMap[dep] = $__0[index];
};
var argument3 = function (chunk, i) {
 callbackArguments.push(arguments) 

    if (!chunk) {
        chunks[i] = '';
    } else {
        chunks[i] = (literal ? applyLiteral : applyPattern)(chunk.replace(/''/g, '\''));
        literal = !literal;
    }
};
var argument4 = function (n) {
 callbackArguments.push(arguments) 

    self.attachButtonBehavior(n, self.playBtnClass, self.playFunc);
};
var base_0 = ["vS","4ie","|J","eN<W","]p","x"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["vS","4ie","|J","eN<W","]p","x"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["vS","4ie","|J","eN<W","]p","x"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["vS","4ie","|J","eN<W","]p","x"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test708.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)