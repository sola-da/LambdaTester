/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = "[UM";
var argument2 = function () {
 callbackArguments.push(arguments) 

    ajax({
        headers: host.headers,
        method: 'POST',
        url: genDBUrl(host, '_bulk_docs'),
        body: req
    }, function (err, results) {
        if (err) {
            return callback(err);
        }
        results.forEach(function (result) {
            result.ok = true;
        });
        callback(null, results);
    });
};
var argument3 = false;
var argument4 = function _thenBypassUnless() {
 callbackArguments.push(arguments) 

    if (utils.isFunction(condition)) {
        condition = condition.call(this);
    }
    if (utils.isFalsy(condition)) {
        this.bypass(nb);
    }
};
var argument5 = ["$",783,893,"+",59,"w"];
var argument6 = false;
var argument7 = function (users) {
 callbackArguments.push(arguments) 

    users.length.should.be.above(0);
};
var argument8 = {"G":""};
var argument9 = function (response) {
 callbackArguments.push(arguments) 

    $scope.posting = false;
    $scope.error = response.data.errorMessage;
};
var argument10 = false;
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test998.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)