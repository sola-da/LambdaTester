





var callbackArguments = [];
var argument1 = function (tab) {
 callbackArguments.push(arguments) 

    tab.active = false;
};
var argument2 = r_0;
var argument3 = function (node) {
 callbackArguments.push(arguments) 

    this.selected.push(node.innerHTML);
};
var argument4 = r_0;
var argument5 = function (n) {
 callbackArguments.push(arguments) 

    self.attachButtonBehavior(n, self.nextBtnClass, self.nextFunc);
};
var argument6 = function (i) {
 callbackArguments.push(arguments) 

    obj.dependencies[i] = '*';
};
var base_0 = ["(","(","^>","oD",";r"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["(","(","^>","oD",";r"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["(","(","^>","oD",";r"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["(","(","^>","oD",";r"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test185.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)