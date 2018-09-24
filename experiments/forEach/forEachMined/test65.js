





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    var value = self.store[key];
    key = self.unmangle(key);
    cb(value, key);
};
var argument2 = false;
var argument3 = true;
var argument4 = function (dp) {
 callbackArguments.push(arguments) 

    var pn = dp.name;
    var nv = newValue.getProperty(pn);
    oldValue.setProperty(pn, nv);
};
var argument5 = true;
var argument6 = function (child) {
 callbackArguments.push(arguments) 

    child.set('selected', false);
};
var argument7 = null;
var argument8 = r_2;
var argument9 = function () {
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
var base_0 = ["d$;","R"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["d$;","R"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["d$;","R"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["d$;","R"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test65.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)