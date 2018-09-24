





var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var elem = this;
    while (elem.firstElementChild) {
        elem = elem.firstElementChild;
    }
    return elem;
};
var argument2 = true;
var argument3 = function (m, j) {
 callbackArguments.push(arguments) 

    if (m === n)
        i++;
};
var argument4 = null;
var argument5 = function (y, i2) {
 callbackArguments.push(arguments) 

    return resultSelector(x, y, i, i2);
};
var argument6 = null;
var argument7 = function (n, i) {
 callbackArguments.push(arguments) 

    var j = 0, $this = n.first(), attrOrdataL = $this.attr('href') !== undefined ? 'attr' : 'data';
    if (attrOrdataL === 'data') {
        hashs2[j] = $this[attrOrdataL]('href');
        j++;
    }
};
var argument8 = ["xk","D#","|","h"];
var base_0 = [59,595,823,843,-100,49,893,59,5e-324]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,595,823,843,-100,49,893,59,5e-324]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test841.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)