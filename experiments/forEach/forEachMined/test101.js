





var callbackArguments = [];
var argument1 = function (item, i) {
 callbackArguments.push(arguments) 

    var a = $('<audio />').attr('data-text', item).attr('preload', 'auto');
    $('<source />').attr('src', 'audio/' + item + '.mp3').attr('type', 'audio/mpeg').appendTo(a);
    $('<source />').attr('src', 'audio/' + item + '.ogg').attr('type', 'audio/ogg').appendTo(a);
    a.appendTo('#audio');
};
var argument2 = function (pollFn) {
 callbackArguments.push(arguments) 

    pollFn();
};
var argument3 = null;
var argument4 = null;
var argument5 = function (c) {
 callbackArguments.push(arguments) 

    pt1 = [
        c.p[0] / phys_scale,
        c.p[1] / phys_scale
    ];
    pt2 = [
        (c.p[0] + 280) / phys_scale,
        (c.p[1] + 280) / phys_scale
    ];
    ;
    checkpoints[c.n] = {
        'pt1': pt1,
        'pt2': pt2,
        'width': pt2[0] - pt1[0],
        'height': pt2[1] - pt1[1],
        'center': [
            (pt1[0] + pt2[0]) / 2,
            (pt1[1] + pt2[1]) / 2
        ]
    };
};
var argument6 = true;
var argument7 = function (method) {
 callbackArguments.push(arguments) 

    CookieJar.prototype[method + 'Sync'] = syncWrap(method);
};
var argument8 = true;
var base_0 = [242,"H",627,843,"z",82,-100,-1]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [242,"H",627,843,"z",82,-100,-1]
var r_1= undefined
try {
r_1 = base_1.forEach(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [242,"H",627,843,"z",82,-100,-1]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [242,"H",627,843,"z",82,-100,-1]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7,argument8)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test101.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)