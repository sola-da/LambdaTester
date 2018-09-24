





var callbackArguments = [];
var argument1 = function (methodName) {
 callbackArguments.push(arguments) 

    self[methodName] = function () {
        throw Error('Method \'' + methodName + '\' is not implemented in the TzDate mock');
    };
};
var argument2 = ["(TG"];
var argument3 = r_0;
var argument4 = function Pending_become_eachMessag"Error") {
 callbackArguments.push(arguments) 

    asap(function Pending_become_eachMessage_task() {
        var handler = Q_getHandler(promise);
        handler.dispatch.apply(handler, message);
    });
};
var argument5 = function (node) {
 callbackArguments.push(arguments) 

    var registrations = registrationsTable.get(node);
    if (!registrations)
        return;
    registrations.forEach(function (registration) {
        if (registration.observer === observer)
            registration.removeTransientObservers();
    });
};
var argument6 = function (r) {
 callbackArguments.push(arguments) 

    result[r.id] = r.topics;
};
var argument7 = 82;
var base_0 = [126,714,"ob",618,"?",",F+",783,607,157,618]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [126,714,"ob",618,"?",",F+",783,607,157,618]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [126,714,"ob",618,"?",",F+",783,607,157,618]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [126,714,"ob",618,"?",",F+",783,607,157,618]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test804.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)