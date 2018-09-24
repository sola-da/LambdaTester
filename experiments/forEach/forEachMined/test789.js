





var callbackArguments = [];
var argument1 = function (binding) {
 callbackArguments.push(arguments) 

    if (!util.none(binding.key)) {
        binding.key = new RegExp('^' + binding.key + '$');
    } else if (Array.isArray(binding.regex)) {
        binding.key = new RegExp('^' + binding.regex[1] + '$');
        binding.regex = new RegExp(binding.regex.join('') + '$');
    } else {
        binding.regex = new RegExp(binding.regex + '$');
    }
};
var argument2 = true;
var argument3 = function (id) {
 callbackArguments.push(arguments) 

    if (this.globals[id].activate) {
        _counter[id]--;
        if (_counter[id] == 0) {
            this.globals[id].deactivate();
        }
    }
};
var argument4 = function (prop) {
 callbackArguments.push(arguments) 

    if (typeof src[prop] !== 'undefined')
        target[prop] = compiler.aup(src[prop], target[prop]);
};
var argument5 = r_2;
var argument6 = 2.805713293545061e+307;
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    if (doc._deleted) {
        delete doc._attachments;
    }
};
var base_0 = [157,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [157,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [157,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [157,-1]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test789.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)