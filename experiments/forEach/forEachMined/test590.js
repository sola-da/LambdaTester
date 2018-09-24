





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    if (_.indexOf(propsToPop, key) === -1) {
        return all.push(_this[key]);
    }
};
var argument2 = function (user) {
 callbackArguments.push(arguments) 

    usersList.push('<div>', Y.Escape.html(user), '</div>');
};
var argument3 = function (e) {
 callbackArguments.push(arguments) 

    assert.ok(spec.metric(d.center(), e) > spec.clusterDistance);
};
var argument4 = function (engine) {
 callbackArguments.push(arguments) 

    files.push({
        cwd: './engines/' + engine + '/app/javascripts',
        src: '**',
        dest: 'tmp/requirejs',
        expand: true
    });
};
var argument5 = false;
var argument6 = 714;
var base_0 = [403,0,783,157,893,25,893,213,49,242]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [403,0,783,157,893,25,893,213,49,242]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2)
}
catch(e) {
r_1= "Error"
}
var base_2 = [403,0,783,157,893,25,893,213,49,242]
var r_2= undefined
try {
r_2 = base_2.forEach(argument3)
}
catch(e) {
r_2= "Error"
}
var base_3 = [403,0,783,157,893,25,893,213,49,242]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test590.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)