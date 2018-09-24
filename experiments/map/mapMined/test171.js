





var callbackArguments = [];
var argument1 = function (el, i) {
 callbackArguments.push(arguments) 

    return fn.call(el, i, el);
};
var argument2 = r_0;
var argument3 = function (pp) {
 callbackArguments.push(arguments) 

    return new OrderByItem(pp, isDesc);
};
var argument4 = r_0;
var argument5 = null;
var argument6 = function (i, cur) {
 callbackArguments.push(arguments) 

    while (cur && cur.ownerDocument && cur !== context) {
        if (pos ? pos.index(cur) > -1 : jQuery(cur).is(selectors)) {
            return cur;
        }
        cur = cur.parentNode;
    }
    return null;
};
var argument7 = function (parsed) {
 callbackArguments.push(arguments) 

    var classes = [
            '',
            'lsd'
        ];
    if (parsed.tag)
        classes.push(parsed.tag);
    if (parsed.id)
        classes.push('id-' + parsed.id);
    if (parsed.pseudos) {
        parsed.pseudos.each(function (pseudo) {
            classes.push(pseudo.key);
        });
    }
    ;
    return classes.join('.');
};
var base_0 = [705,-100]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [705,-100]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [705,-100]
var r_2= undefined
try {
r_2 = base_2.map(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [705,-100]
var r_3= undefined
try {
r_3 = base_3.map(argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test171.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)