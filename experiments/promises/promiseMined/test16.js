/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument2 = true;
var argument3 = ["n","{ "," ","_g","uD","YSgn*","lT","Ei",");"];
var argument4 = [714,25,122];
var argument5 = function (error) {
 callbackArguments.push(arguments) 

    $('.warn').slideDown('slow');
    $('.warn span').text('Log-in failed - Token is invalid');
    setTimeout(function () {
        $('.warn').slideUp();
    }, 2500);
};
var argument6 = null;
var argument7 = function (values) {
 callbackArguments.push(arguments) 

    return dst;
};
var argument8 = ["S8>","|#","hg_O{","y","]","DPL:","?","fd","$G","i"];
var argument9 = false;
var argument10 = function (listOfDocsToPersist) {
 callbackArguments.push(arguments) 

    var docsToPersist = [];
    listOfDocsToPersist.forEach(function (docList) {
        docsToPersist = docsToPersist.concat(docList);
    });
    lastSeqDoc.seq = seq;
    docsToPersist.push(lastSeqDoc);
    return view.db.bulkDocs({ docs: docsToPersist });
};
var argument11 = false;
var base_0 = p2
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
r_2 = base_2.then(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test16.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)