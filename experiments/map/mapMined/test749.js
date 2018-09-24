





var callbackArguments = [];
var argument1 = function (itemA) {
 callbackArguments.push(arguments) 

    var matcher, findMatch, items;
    matcher = {};
    matcher[idProp] = itemA[idProp];
    findMatch = partial(findWhere, matcher);
    items = [
        {},
        itemA
    ].concat(collections.map(findMatch));
    return merge.apply(null, items);
};
var argument2 = true;
var argument3 = function (file) {
 callbackArguments.push(arguments) 

    expect(cacheStub.size()).to.be.equal(0);
    done();
};
var argument4 = null;
var argument5 = function (op) {
 callbackArguments.push(arguments) 

    if (Op.isRetain(op)) {
        return op;
    } else if (Op.isInsert(op)) {
        return op;
    } else {
        throw new Error('Creating delta with invalid op. Expecting an insert or retain.');
    }
};
var argument6 = r_1;
var argument7 = null;
var argument8 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var base_0 = ["%"]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["%"]
var r_1= undefined
try {
r_1 = base_1.map(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["%"]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["%"]
var r_3= undefined
try {
r_3 = base_3.map(argument8)
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
require("fs").writeFileSync("./experiments/map/mapMined/test749.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)