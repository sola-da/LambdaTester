





var callbackArguments = [];
var argument1 = function (user) {
 callbackArguments.push(arguments) 

    return '' + user.id;
};
var argument2 = function (photo) {
 callbackArguments.push(arguments) 

    var scale = new Transitionable([
            0.001,
            0.001,
            0.001
        ]);
    var opacity = new Transitionable(0);
    return _.extend(photo, {
        url: flickr.getPhotoUrl(photo),
        scale: scale,
        opacity: opacity
    });
};
var argument3 = true;
var argument4 = "V";
var argument5 = function (p, i) {
 callbackArguments.push(arguments) 

    return [
        i,
        Math.abs(p - median) / mad
    ];
};
var argument6 = 8.868271521073839e+307;
var argument7 = false;
var argument8 = function (i, cur) {
 callbackArguments.push(arguments) 

    while (cur && cur.ownerDocument && cur !== context) {
        if (pos ? pos.index(cur) > -1 : jQuery(cur).is(selectors)) {
            return cur;
        }
        cur = cur.parentNode;
    }
    return null;
};
var argument9 = true;
var base_0 = ["R","4$","bax","I","S9%+k",705,242]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test638.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)