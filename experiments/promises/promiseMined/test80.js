/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    /permission/i.test(err.message).should.be.true;
};
var argument2 = r_0;
var argument3 = true;
var argument4 = function (content) {
 callbackArguments.push(arguments) 

    localFolder.createFileAsync(filename, Windows.Storage.CreationCollisionOption.replaceExisting).done(function (file) {
        Windows.Storage.FileIO.writeTextAsync(file, content);
    });
    return WinJS.Promise.as(content);
};
var argument5 = 3.8345245768185656e+306;
var argument6 = function () {
 callbackArguments.push(arguments) 

    var dbInfo = self._dbInfo;
    dbInfo.db.transaction(function (t) {
        t.executeSql('SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
            var result = results.rows.item(0).c;
            resolve(result);
        }, function (t, error) {
            reject(error);
        });
    });
};
var argument7 = 8.485046566562911e+307;
var argument8 = r_2;
var argument9 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument10 = [969,126,627];
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.catch(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test80.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)