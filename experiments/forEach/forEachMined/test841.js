





var callbackArguments = [];
var argument1 = function (bundleLocations) {
 callbackArguments.push(arguments) 

    preloaded = preloaded.then(function () {
        return Promise.all(bundleLocations.map(function (bundleLocation) {
            load(bundleLocation);
            return getDefinition(bundleLocation).promise;
        }));
    });
};
var argument2 = false;
var argument3 = function (element) {
 callbackArguments.push(arguments) 

    element = angular.element(element);
    var data = element.data(NG_ANIMATE_STATE);
    if (data) {
        cancelAnimations(data.animations);
        cleanup(element);
    }
};
var argument4 = false;
var argument5 = {"705":"7","969":25,"":893,"V":"l"};
var argument6 = function (m) {
 callbackArguments.push(arguments) 

    theme = this.addMixin(theme, elementType, m);
};
var argument7 = "";
var argument8 = null;
var argument9 = function (x) {
 callbackArguments.push(arguments) 

    mouseHandler[x] = this[x];
};
var argument10 = false;
var base_0 = [122,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [122,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [122,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [122,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test841.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)