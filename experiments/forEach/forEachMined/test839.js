





var callbackArguments = [];
var argument1 = function (property) {
 callbackArguments.push(arguments) 

    update(value, property, callback);
};
var argument2 = function () {
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
var argument3 = function (side) {
 callbackArguments.push(arguments) 

    var value = 0, sideValue = this[side];
    null != sideValue && (value = 'number' == typeof sideValue ? sideValue : sideValue.resolve('left' === side || 'right' === side ? width : height));
    sides[side] = value;
};
var argument4 = function (name) {
 callbackArguments.push(arguments) 

    $.fn[name] = function (callback) {
        if (callback)
            this.bind(name, callback);
        else
            this.each(function () {
                try {
                    this[name]();
                } catch (e) {
                }
            });
        return this;
    };
};
var argument5 = true;
var argument6 = null;
var base_0 = ["GfR7","r#_t][I","P","P:"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["GfR7","r#_t][I","P","P:"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["GfR7","r#_t][I","P","P:"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["GfR7","r#_t][I","P","P:"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument4,argument5,argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test839.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)