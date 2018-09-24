





var callbackArguments = [];
var argument1 = function (c) {
 callbackArguments.push(arguments) 

    c.property = fns.kill_boring(c.property);
    Object.keys(c.property).forEach(function (key2) {
        if (c.property[key2].valuetype == 'object') {
            c.property[key2].values = c.property[key2].values.map(function (s) {
                s.property = [
                    key,
                    key2
                ];
                return s;
            });
            out = out.concat(c.property[key2].values);
        }
    });
};
var argument2 = false;
var argument3 = null;
var argument4 = function (key) {
 callbackArguments.push(arguments) 

    var err = new AssertionError(null, key);
    if (err.message.indexOf(components[key]) < 0) {
        throw new Error('Expected error of type \'' + components[key] + '\'');
    }
};
var argument5 = function (text) {
 callbackArguments.push(arguments) 

    bayes.train(text, 'notspam');
};
var argument6 = false;
var argument7 = null;
var argument8 = function (c) {
 callbackArguments.push(arguments) 

    c._getDatumsOnRect(datumMap, rect, ka);
};
var argument9 = null;
var argument10 = false;
var base_0 = ["x"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["x"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["x"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["x"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test748.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)