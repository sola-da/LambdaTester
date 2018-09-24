





var callbackArguments = [];
var argument1 = function (scope) {
 callbackArguments.push(arguments) 

    type = _.reduce(parts || [], function (memo, val) {
        return memo ? memo[val] : undefined;
    }, scope);
    if (type && type !== scope) {
        return true;
    }
};
var argument2 = {"49":"v>za","783":1.3394652871461588e+308,"6.788814314120647e+307":"%","":"X","7.669824667436231e+307":893};
var argument3 = false;
var argument4 = function (err, docs) {
 callbackArguments.push(arguments) 

    docs.sort(function (a, b) {
        return a.a - b.a;
    });
    docs.length.should.equal(3);
    _.isEqual(docs[0], {
        _id: doc1._id,
        a: 1,
        hello: 'changed'
    }).should.equal(true);
    _.isEqual(docs[1], {
        _id: doc2._id,
        a: 2,
        hello: 'changed'
    }).should.equal(true);
    _.isEqual(docs[2], {
        _id: doc3._id,
        a: 5,
        hello: 'pluton'
    }).should.equal(true);
    done();
};
var argument5 = "*W8 ?p";
var argument6 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same(ids, [
        2,
        3,
        8
    ], 'Invalid or parseAble find options caused wrong search results.');
    t.done();
};
var argument7 = "";
var argument8 = function (obj2) {
 callbackArguments.push(arguments) 

    if (comparison != null) {
        return comparison(obj1, obj2);
    } else {
        return _.isEqual(obj1, obj2);
    }
};
var argument9 = r_0;
var argument10 = r_3;
var base_0 = [595,460,893,0,126,126,0,213]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [595,460,893,0,126,126,0,213]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [595,460,893,0,126,126,0,213]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [595,460,893,0,126,126,0,213]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test742.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)