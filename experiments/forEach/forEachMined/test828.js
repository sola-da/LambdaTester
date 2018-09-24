





var callbackArguments = [];
var argument1 = function (cell) {
 callbackArguments.push(arguments) 

    if (typeof cell['openStates'] != 'undefined') {
        if (identity in cell.openStates) {
            delete cell.openStates[identity];
        }
    }
};
var argument2 = null;
var argument3 = function (wire) {
 callbackArguments.push(arguments) 

    for (var i = 0; i < self.numPieces; ++i) {
        self.pieces[i] += wire.peerPieces.get(i);
    }
};
var argument4 = true;
var argument5 = function (item) {
 callbackArguments.push(arguments) 

    if (typeof pending[item.rev] !== 'undefined') {
        pending[item.rev].resolve({ rev: item.rev });
        delete pending[item.rev];
    } else {
        bufferChange(item.rev);
    }
};
var argument6 = null;
var argument7 = function (prop) {
 callbackArguments.push(arguments) 

    Object.defineProperty(enchant.gl.Mesh.prototype, prop, {
        get: function () {
            return this['_' + prop]._array;
        },
        set: function (array) {
            this['_' + prop]._array = array;
            if (this._appear) {
                this['_' + prop]._bufferData();
            }
        }
    });
};
var argument8 = 1.7700036361861486e+308;
var base_0 = ["7",242,"{"]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7",242,"{"]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7",242,"{"]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7",242,"{"]
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test828.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)