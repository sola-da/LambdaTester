/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function (src_id) {
 callbackArguments.push(arguments) 

    return target.id().then(function (target_id) {
        var queryData = src_id + target_id + filterFun + JSON.stringify(opts.query_params) + opts.doc_ids;
        return utils.MD5(queryData).then(function (md5) {
            md5 = md5.replace(/\//g, '.').replace(/\+/g, '_');
            return '_local/' + md5;
        });
    });
};
var argument3 = true;
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    delete pending[rev];
    console.log(err);
    return BPromise.reject(err);
};
var argument5 = 783;
var argument6 = null;
var argument7 = null;
var argument8 = function () {
 callbackArguments.push(arguments) 

    var dbInfo = self._dbInfo;
    dbInfo.db.transaction(function (t) {
        t.executeSql('SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
            var result = results.rows.length ? results.rows.item(0).value : null;
            if (result) {
                result = serializer.deserialize(result);
            }
            resolve(result);
        }, function (t, error) {
            reject(error);
        });
    });
};
var argument9 = p1;
var argument10 = r_1;
var argument11 = function success() {
 callbackArguments.push(arguments) 

    finalizeTransition(reload);
    transitionCompleted(fromState, toState);
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument10,argument11)
}
catch(e) {
r_3= e.message
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test787.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)