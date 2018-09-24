





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([
        1,
        7
    ], ids, 'Searching when min>max condition(ZREVRANGEBYSCORE) with limit is invalid.');
    t.done();
};
var argument2 = function (subView) {
 callbackArguments.push(arguments) 

    return subView.tabId !== undefined;
};
var argument3 = r_1;
var argument4 = r_1;
var argument5 = function (err, docs) {
 callbackArguments.push(arguments) 

    assert.isNull(err);
    docs.length.should.equal(3);
    _.pluck(docs, 'somedata').should.contain('ok');
    _.pluck(docs, 'somedata').should.contain('another');
    _.find(docs, function (d) {
        return d.somedata === 'another';
    }).plus.should.equal('additional data');
    _.pluck(docs, 'somedata').should.contain('again');
    return cb();
};
var argument6 = true;
var argument7 = {"25":"G","59":"","122":"&7","705":"O<*{|","1.608377125191976e+308":618,"1.320530153270747e+308":"Nb","":4.651687201076221e+307,"X":"V","1.5471128757002982e+308":2.254425808519562e+307,"9.94707290710536e+307":9.674640083203658e+307};
var argument8 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === _doc1._id;
};
var argument9 = r_2;
var argument10 = {"x":122};
var base_0 = ["|","Sl","B`","t","#"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["|","Sl","B`","t","#"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["|","Sl","B`","t","#"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["|","Sl","B`","t","#"]
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
require("fs").writeFileSync("./experiments/find/findMined/test600.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)