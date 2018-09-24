/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (connection) {
 callbackArguments.push(arguments) 

    expect(conn.threadId).to.be.equal(connection.threadId);
    expect(cm.validate(conn)).to.be.ok;
    return cm.releaseConnection(connection);
};
var argument2 = [595,"{5*","V",627,49,"Hia","9","5"];
var argument3 = {"783":5.265573389402088e+307,"":"","6.751093319462878e+307":"","1.4544239022639332e+308":"","4y":"","`0:^":""};
var argument4 = p2;
var argument5 = function (response) {
 callbackArguments.push(arguments) 

    return response.data;
};
var argument6 = true;
var argument7 = r_1;
var argument8 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 4,
                end: 5
            },
            {
                start: 22,
                end: 23
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument9 = null;
var argument10 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument11 = "";
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
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
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test152.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)