





var callbackArguments = [];
var argument1 = function (line, num) {
 callbackArguments.push(arguments) 

    num++;
    if (data[num] === 0) {
        ret.misses++;
        ret.sloc++;
    } else if (data[num] !== undefined) {
        ret.hits++;
        ret.sloc++;
    }
    ret.source[num] = {
        source: line,
        coverage: data[num] === undefined ? '' : data[num]
    };
};
var argument2 = function (t) {
 callbackArguments.push(arguments) 

    if (__data_types[t.id] === type) {
        has = true;
    }
    if (!(t.id in __data_types) && type === 'line') {
        has = true;
    }
};
var argument3 = null;
var argument4 = {"607":"","":59,"R":" y]","1.0217356273296604e+308":5.122795157089233e+307,"g":25,"Y":"7I;","^ ":"o","8.942033545152817e+307":"x"};
var argument5 = function (k) {
 callbackArguments.push(arguments) 

    copy[k] = obj[k];
};
var argument6 = false;
var argument7 = true;
var argument8 = function (k, callback) {
 callbackArguments.push(arguments) 

    tasks[k](function (err) {
        var args = Array.prototype.slice.call(arguments, 1);
        if (args.length <= 1) {
            args = args[0];
        }
        results[k] = args;
        callback(err);
    });
};
var argument9 = false;
var base_0 = ["v-= H","[8k"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["v-= H","[8k"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["v-= H","[8k"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["v-= H","[8k"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test187.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)