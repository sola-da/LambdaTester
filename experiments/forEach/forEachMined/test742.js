





var callbackArguments = [];
var argument1 = function (item, index) {
 callbackArguments.push(arguments) 

    var result;
    try {
        result = callback(item);
    } catch (exc) {
        oneDone();
        errors[index] = exc;
    }
    if (typeof result === 'object' && typeof result.then === 'function') {
        result.then(function (res) {
            results[index] = res;
            oneDone();
        }, function (error) {
            errors[index] = res;
            oneDone();
        });
    } else {
        oneDone();
        results[index] = result;
    }
};
var argument2 = {"49":"v>za","783":1.3394652871461588e+308,"6.788814314120647e+307":"%","":"X","7.669824667436231e+307":893};
var argument3 = false;
var argument4 = function (file) {
 callbackArguments.push(arguments) 

    loadingCalls.push(file.rootSrc);
};
var argument5 = "*W8 ?p";
var argument6 = function (item, i) {
 callbackArguments.push(arguments) 

    var a = $('<audio />').attr('data-text', item).attr('preload', 'auto');
    $('<source />').attr('src', 'audio/' + item + '.mp3').attr('type', 'audio/mpeg').appendTo(a);
    $('<source />').attr('src', 'audio/' + item + '.ogg').attr('type', 'audio/ogg').appendTo(a);
    a.appendTo('#audio');
};
var argument7 = "";
var argument8 = function (meth) {
 callbackArguments.push(arguments) 

    self[meth] = self[meth].bind(self);
};
var argument9 = r_0;
var argument10 = r_3;
var base_0 = [595,460,893,0,126,126,0,213]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,460,893,0,126,126,0,213]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,460,893,0,126,126,0,213]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,460,893,0,126,126,0,213]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test742.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)