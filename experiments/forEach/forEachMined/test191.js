





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    if (angular.isDefined(attr[key]))
        options[key] = attr[key];
};
var argument2 = function (name) {
 callbackArguments.push(arguments) 

    el.classList.add(name);
};
var argument3 = function (v, i) {
 callbackArguments.push(arguments) 

    v.x = generateTargetX(x[i], t.id, i);
};
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    attr[key] && attr.$observe(key, function (newValue, oldValue) {
        scope[key] = $sce.trustAsHtml(newValue);
    });
};
var base_0 = ["V2","%","qg","My","n","g`","JD","?","d"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["V2","%","qg","My","n","g`","JD","?","d"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["V2","%","qg","My","n","g`","JD","?","d"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["V2","%","qg","My","n","g`","JD","?","d"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test191.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)