





var callbackArguments = [];
var argument1 = function (e) {
 callbackArguments.push(arguments) 

    if (e.entityAspect.entityManager !== em) {
        throw new Error('Only entities in this entityManager may be saved');
    }
    return !e.entityAspect.entityState.isDetached();
};
var argument2 = function (a) {
 callbackArguments.push(arguments) 

    i++;
    if (i <= 4) {
        arr.push(a + 3);
    }
    return true;
};
var argument3 = "{A1C";
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    if (tmp.indexOf(item.id) === -1) {
        tmp.push(item.id);
        return item;
    }
};
var argument5 = [0,607,5e-324,-1];
var argument6 = 618;
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d.depth == 0;
};
var argument8 = null;
var base_0 = ["B","@6>","f`$u6={","l&-$","%B&LJ|","b","|+","wY","-","VZ"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["B","@6>","f`$u6={","l&-$","%B&LJ|","b","|+","wY","-","VZ"]
var r_1= undefined
try {
r_1 = base_1.filter(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["B","@6>","f`$u6={","l&-$","%B&LJ|","b","|+","wY","-","VZ"]
var r_2= undefined
try {
r_2 = base_2.filter(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["B","@6>","f`$u6={","l&-$","%B&LJ|","b","|+","wY","-","VZ"]
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test847.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)