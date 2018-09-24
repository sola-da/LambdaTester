





var callbackArguments = [];
var argument1 = function (hookName) {
 callbackArguments.push(arguments) 

    exports[hookName] = LoaderHooks[hookName];
};
var argument2 = r_0;
var argument3 = null;
var argument4 = function () {
 callbackArguments.push(arguments) 

    stream.end();
    that.callback();
};
var argument5 = [618,823,655,969,843,213];
var argument6 = function (mutation) {
 callbackArguments.push(arguments) 

    if (mutation.addedNodes.length > 0) {
        base.execute(mutation.addedNodes);
    } else if (mutation.attributeName === 'data-src') {
        base.execute(mutation.target);
    }
};
var argument7 = 705;
var argument8 = false;
var argument9 = function Pending_eachObserver(observer) {
 callbackArguments.push(arguments) 

    asap(function Pending_setEstimate_eachObserver_task() {
        observer.call(void 0, estimate);
    });
};
var base_0 = [82,627,213,1.7976931348623157e+308,-1,627,0]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [82,627,213,1.7976931348623157e+308,-1,627,0]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [82,627,213,1.7976931348623157e+308,-1,627,0]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [82,627,213,1.7976931348623157e+308,-1,627,0]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test390.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)