





var callbackArguments = [];
var argument1 = function (type) {
 callbackArguments.push(arguments) 

    var typeAxes = axesByType[type];
    typeAxes && typeAxes.forEach(processAxis);
};
var argument2 = function (role) {
 callbackArguments.push(arguments) 

    inRoleTasks.push(function (done) {
        self.isInRole(role, context, function (err, inRole) {
            if (debug.enabled) {
                debug('In role %j: %j', role, inRole);
            }
            if (!err && inRole) {
                addRole(role);
                done();
            } else {
                done(err, null);
            }
        });
    });
};
var argument3 = function (scenario) {
 callbackArguments.push(arguments) 

    var _it = scenario.annotations.Pending ? xit : it;
    _it(scenario.title, function (done) {
        next(scenario, done);
    });
};
var argument4 = null;
var argument5 = function (s) {
 callbackArguments.push(arguments) 

    s.d3plus.ring = 2;
    var val = vars.size.value ? fetchValue(vars, s, vars.size.value) : 2;
    s.d3plus.r = radius(val);
};
var argument6 = 1.3622614800127408e+308;
var argument7 = r_2;
var base_0 = [49,403,82,25,705,823,157,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,403,82,25,705,823,157,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,403,82,25,705,823,157,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3,argument4)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,403,82,25,705,823,157,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test701.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)