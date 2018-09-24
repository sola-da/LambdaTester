





var callbackArguments = [];
var argument1 = function (leaf) {
 callbackArguments.push(arguments) 

    api.get(id, {
        rev: leaf,
        revs: opts.revs
    }, function (err, doc) {
        if (!err) {
            result.push({ ok: doc });
        } else {
            result.push({ missing: leaf });
        }
        count--;
        if (!count) {
            call(callback, null, result);
        }
    });
};
var argument2 = null;
var argument3 = function (aliasName) {
 callbackArguments.push(arguments) 

    self._commands[aliasName] = function (params) {
        a[aliasName].split(' && ').forEach(function (command) {
            self._commands[command](params);
        });
    };
};
var argument4 = r_0;
var argument5 = function (wire) {
 callbackArguments.push(arguments) 

    for (var i = 0; i < self.numPieces; ++i) {
        self.pieces[i] += wire.peerPieces.get(i);
    }
};
var argument6 = r_0;
var argument7 = function (y) {
 callbackArguments.push(arguments) 

    if (vars.data.nested[y]) {
        returnData = returnData.concat(vars.data.nested[y][vars.id.value]);
    } else
        missing.push(y);
};
var base_0 = [595,82,595]
var r_0= undefined
try {
r_0 = base_0.forEach(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,82,595]
var r_1= undefined
try {
r_1 = base_1.forEach(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,82,595]
var r_2= undefined
try {
r_2 = base_2.forEach(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,82,595]
var r_3= undefined
try {
r_3 = base_3.forEach(argument7)
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
require("fs").writeFileSync("./experiments/forEach/forEachMined/test679.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)