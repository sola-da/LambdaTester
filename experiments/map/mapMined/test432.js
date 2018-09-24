





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    return e[t];
};
var argument2 = {};
var argument3 = {"969":1.2027812935917822e+307,"2.2756013145654253e+307":82,"1.495245363496553e+306":"]=QHF6","1.7864881803224503e+308":"z`{","1.3117846078011863e+308":"","5.745424254985418e+307":460,"4.138432918334883e+307":1.1589720294522143e+308};
var argument4 = function (r) {
 callbackArguments.push(arguments) 

    if (r.rank === 10) {
        r.rank = 5;
    } else if (r.rank > 3 && r.rank < 10) {
        r.rank = 4;
    }
    return [
        r.name,
        r.rank
    ];
};
var argument5 = null;
var argument6 = function (word) {
 callbackArguments.push(arguments) 

    return {
        caption: word,
        value: word,
        score: wordScore[word],
        meta: 'local'
    };
};
var argument7 = null;
var argument8 = function () {
 callbackArguments.push(arguments) 

    var offsetParent = this.offsetParent || document.body;
    while (offsetParent && (!rroot.test(offsetParent.nodeName) && jQuery.css(offsetParent, 'position') === 'static')) {
        offsetParent = offsetParent.offsetParent;
    }
    return offsetParent;
};
var argument9 = 9.449352483060408e+307;
var base_0 = ["|","3","l","UXC"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","3","l","UXC"]
var r_1= undefined
try {
r_1 = base_1.map(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
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
require("fs").writeFileSync("./experiments/map/mapMined/test432.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)