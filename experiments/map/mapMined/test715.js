





var callbackArguments = [];
var argument1 = function (n, i) {
 callbackArguments.push(arguments) 

    var j = 0, $this = n.first(), attrOrdataL = $this.attr('href') !== undefined ? 'attr' : 'data';
    if (attrOrdataL === 'data') {
        hashs2[j] = $this[attrOrdataL]('href');
        j++;
    }
};
var argument2 = function (predicate) {
 callbackArguments.push(arguments) 

    var descending = false, get = predicate || identity;
    if (isString(predicate)) {
        if (predicate.charAt(0) == '+' || predicate.charAt(0) == '-') {
            descending = predicate.charAt(0) == '-';
            predicate = predicate.substring(1);
        }
        get = $parse(predicate);
    }
    return reverseComparator(function (a, b) {
        return compare(get(a), get(b));
    }, descending);
};
var argument3 = null;
var argument4 = null;
var argument5 = function (i) {
 callbackArguments.push(arguments) 

    return 'this._shape' + i;
};
var argument6 = {"59":"'J","627":"","":1.3952514026713953e+308,"8.786623196418602e+307":"","1.4157886272800431e+308":"","ke4Yth":"","G":"Sm","1.2013829955713626e+308":"^"};
var argument7 = function (t, e) {
 callbackArguments.push(arguments) 

    return s.call(U(e.parentNode), function (t) {
        return t !== e;
    });
};
var argument8 = null;
var argument9 = false;
var base_0 = [460,403]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [460,403]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [460,403]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [460,403]
var r_3= undefined
try {
r_3 = base_3.map(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test715.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)