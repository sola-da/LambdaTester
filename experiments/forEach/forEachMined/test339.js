





var callbackArguments = [];
var argument1 = function (key) {
 callbackArguments.push(arguments) 

    pending++;
    put(store, path.concat([key]), value[key], cb);
};
var argument2 = {"100":6.084336789206041e+307};
var argument3 = null;
var argument4 = function (answerP) {
 callbackArguments.push(arguments) 

    Q(answerP).then(deferred.resolve, deferred.reject);
};
var argument5 = false;
var argument6 = true;
var argument7 = function (child) {
 callbackArguments.push(arguments) 

    var s = child.domStyles;
    s['-webkit-box-sizing'] = 'border-box';
    s.position = 'absolute';
    s.margin = 0;
    if (child.size !== undefined) {
        s.width = child.size + 'px';
    }
};
var argument8 = null;
var argument9 = "2";
var argument10 = function (e) {
 callbackArguments.push(arguments) 

    exported[e] = true;
};
var argument11 = r_2;
var base_0 = ["EOd;7G"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["EOd;7G"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["EOd;7G"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument7,argument8,argument9)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["EOd;7G"]
var r_3= undefined
try {
r_3 = base_3.forEach(argument10,argument11)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test339.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)