





var callbackArguments = [];
var argument1 = function Pending_eachObserver(observer) {
 callbackArguments.push(arguments) 

    asap(function Pending_setEstimate_eachObserver_task() {
        observer.call(void 0, estimate);
    });
};
var argument2 = "^";
var argument3 = function (o, i) {
 callbackArguments.push(arguments) 

    testAL[i] = o;
};
var argument4 = null;
var argument5 = "!";
var argument6 = function (settingExt) {
 callbackArguments.push(arguments) 

    typeNames.push(settingExt.name);
};
var argument7 = false;
var argument8 = true;
var argument9 = function (fold) {
 callbackArguments.push(arguments) 

    fold.start.row += shift;
    fold.end.row += shift;
};
var argument10 = [25,627,843,655,213,5e-324,655,823];
var argument11 = null;
var base_0 = [607,595,607,618,627,-100,122]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [607,595,607,618,627,-100,122]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [607,595,607,618,627,-100,122]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = [607,595,607,618,627,-100,122]
var r_3= undefined
try {
r_3 = base_3.forEach(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test86.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)