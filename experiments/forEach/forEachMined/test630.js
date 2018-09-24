





var callbackArguments = [];
var argument1 = function (property) {
 callbackArguments.push(arguments) 

    update(value, property, callback);
};
var argument2 = true;
var argument3 = function () {
 callbackArguments.push(arguments) 

    var manager = new neuron.JobManager({ cache: true });
    manager.addJob('test-job', { work: helpers.waitAndRespond(100) });
    manager.on('finish', function (job, worker) {
        results.push(worker);
        if (worker.id === '9') {
            that.callback(null, results);
        }
    });
    manager.load();
};
var argument4 = 1.0298554608631395e+308;
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    tmp = tmp.concat(_createPart(item, boundary));
};
var argument6 = [969,1.7976931348623157e+308,893,5e-324,595,25,403,893,969];
var argument7 = function (player) {
 callbackArguments.push(arguments) 

    player.fullName = player.firstName + (player.lastName ? ' ' + player.lastName : '');
};
var base_0 = [783,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [783,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [783,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [783,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test630.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)