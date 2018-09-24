





var callbackArguments = [];
var argument1 = function (combinator, method) {
 callbackArguments.push(arguments) 

    Element.implement(method, function (expression) {
        return this.getElements(injectCombinator(expression, combinator));
    });
};
var argument2 = function (i) {
 callbackArguments.push(arguments) 

    Mousetrap.bind([i.toString()], function () {
        return _this.seek(i * 10);
    });
};
var argument3 = function (wire) {
 callbackArguments.push(arguments) 

    for (var i = 0; i < self.numPieces; ++i) {
        self.pieces[i] += wire.peerPieces.get(i);
    }
};
var argument4 = null;
var argument5 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.destroy();
};
var argument6 = 1.1468315288977058e+308;
var argument7 = true;
var base_0 = [82,460,126,126,705,122,969,705,627]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,460,126,126,705,122,969,705,627]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,460,126,126,705,122,969,705,627]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,460,126,126,705,122,969,705,627]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test116.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)