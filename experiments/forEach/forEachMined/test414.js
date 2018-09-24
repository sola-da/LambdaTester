





var callbackArguments = [];
var argument1 = function (obj, index) {
 callbackArguments.push(arguments) 

    actual[index] = obj;
};
var argument2 = function (node) {
 callbackArguments.push(arguments) 

    node.innerHTML = content;
};
var argument3 = false;
var argument4 = false;
var argument5 = function (range) {
 callbackArguments.push(arguments) 

    if (!range.markerId)
        range.markerId = session.addMarker(range, 'ace_snippet-marker', 'text');
};
var argument6 = function (n) {
 callbackArguments.push(arguments) 

    self.attachButtonBehavior(n, self.nextBtnClass, self.nextFunc);
};
var argument7 = false;
var argument8 = false;
var base_0 = [893,460,595,157,-1,403]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,460,595,157,-1,403]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,460,595,157,-1,403]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,460,595,157,-1,403]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test414.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)