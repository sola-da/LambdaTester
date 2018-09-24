





var callbackArguments = [];
var argument1 = function (item) {
 callbackArguments.push(arguments) 

    slots.push(me.createSlot(item, days, months, years));
};
var argument2 = false;
var argument3 = "wN";
var argument4 = function (o) {
 callbackArguments.push(arguments) 

    return ret.push(d3plus.util.copy(o));
};
var argument5 = function (wire) {
 callbackArguments.push(arguments) 

    for (var i = 0; i < self.numPieces; ++i) {
        self.pieces[i] += wire.peerPieces.get(i);
    }
};
var argument6 = function (field) {
 callbackArguments.push(arguments) 

    var serializer = serializers[field];
    if (typeof serializer !== 'function') {
        throw new TypeError(format('invalid serializer for "%s" field: must be a function', field));
    } else {
        self.serializers[field] = serializer;
    }
};
var base_0 = [893,705,100,"%",714,"gt",82]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,705,100,"%",714,"gt",82]
var r_1= undefined
try {
r_1 = base_1.forEach(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,705,100,"%",714,"gt",82]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,705,100,"%",714,"gt",82]
var r_3= undefined
try {
r_3 = base_3.forEach(argument6)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test741.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)