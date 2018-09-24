





var callbackArguments = [];
var argument1 = function (l) {
 callbackArguments.push(arguments) 

    return google.maps.event.removeListener(l);
};
var argument2 = 242;
var argument3 = function (ts) {
 callbackArguments.push(arguments) 

    ts.length = 0;
};
var argument4 = true;
var argument5 = "";
var argument6 = function (observer) {
 callbackArguments.push(arguments) 

    var queue = observer.takeRecords();
    removeTransientObserversFor(observer);
    if (queue.length) {
        observer.callback_(queue, observer);
        anyNonEmpty = true;
    }
};
var argument7 = true;
var argument8 = function (pos) {
 callbackArguments.push(arguments) 

    start_positions[pos.n] = {
        'x': (pos.p[0] + 30) / phys_scale,
        'y': (pos.p[1] + 30) / phys_scale,
        'angle': pos.a
    };
};
var argument9 = true;
var argument10 = 8.585811667582848e+307;
var base_0 = ["W","Y","?"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["W","Y","?"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["W","Y","?"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["W","Y","?"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test962.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)