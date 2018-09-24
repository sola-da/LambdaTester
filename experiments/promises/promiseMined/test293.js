/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument2 = p1;
var argument3 = p1;
var argument4 = null;
var argument5 = function (status, _body, _mimeType, revision) {
 callbackArguments.push(arguments) 

    if (status === 200 || status === 201) {
        return revision;
    } else {
        throw 'Request (PUT ' + self.makePath(path) + ') failed with status: ' + status;
    }
};
var argument6 = {};
var argument7 = function (err) {
 callbackArguments.push(arguments) 

    delete pending[rev];
    console.log(err);
    return BPromise.reject(err);
};
var argument8 = r_1;
var argument9 = function (src_id) {
 callbackArguments.push(arguments) 

    return target.id().then(function (target_id) {
        var queryData = src_id + target_id + filterFun + JSON.stringify(opts.query_params) + opts.doc_ids;
        return utils.MD5(queryData).then(function (md5) {
            md5 = md5.replace(/\//g, '.').replace(/\+/g, '_');
            return '_local/' + md5;
        });
    });
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test293.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)