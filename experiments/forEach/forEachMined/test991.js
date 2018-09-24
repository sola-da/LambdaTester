





var callbackArguments = [];
var argument1 = function (optKey) {
 callbackArguments.push(arguments) 

    delete subOpts[optKey];
};
var argument2 = ["ZKI",":B","e","$$j6`n","n","+","5",")","M$","xu"];
var argument3 = r_0;
var argument4 = function (pollFn) {
 callbackArguments.push(arguments) 

    pollFn();
};
var argument5 = function (expression) {
 callbackArguments.push(arguments) 

    var watcher = viewScope.$watch(expression, function () {
            step.ncyBreadcrumbLabel = interpolationFunction(viewScope);
        });
    labelWatcherArray.push(watcher);
};
var argument6 = {"843":"Lx","3.9049470464820584e+307":627,":U#":"","2.906840298110317e+307":"9g=PJ[","2.3189906211508394e+307":7.502840951648477e+307,"I@lt":82};
var argument7 = function _forEach(item, i) {
 callbackArguments.push(arguments) 

    fn.call(self, self, item, i);
};
var argument8 = true;
var base_0 = [893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test991.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)