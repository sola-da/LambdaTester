





var callbackArguments = [];
var argument1 = function (fn) {
 callbackArguments.push(arguments) 

    try {
        fn(value);
    } catch (e) {
        $exceptionHandler(e);
    }
};
var argument2 = true;
var argument3 = function (link) {
 callbackArguments.push(arguments) 

    var value = traverse.get(args, link.from);
    traverse.set(args, link.to, value);
};
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    var message = fs.absolute(item.file) + ':' + c.colorize(item.line, 'COMMENT');
    if (item['function']) {
        message += ' in ' + c.colorize(item['function'], 'PARAMETER');
    }
    console.error('  ' + message);
};
var argument5 = r_0;
var argument6 = function (callback, event) {
 callbackArguments.push(arguments) 

    if (networkEvents.indexOf(String(event)) >= 0) {
        network.on(event, callback);
    }
};
var argument7 = r_2;
var argument8 = r_0;
var base_0 = [49,705,627,213,705,242,618,100,893]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [49,705,627,213,705,242,618,100,893]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [49,705,627,213,705,242,618,100,893]
var r_2= undefined
try {
r_2 = base_2.forEach(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [49,705,627,213,705,242,618,100,893]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test854.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)