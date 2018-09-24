





var callbackArguments = [];
var argument1 = function (n, i) {
 callbackArguments.push(arguments) 

    var $thisLi = columnsObj.filter('.' + columnClassPref + n), sumx = 0;
    $thisLi.each(function () {
        var datax = +$(this).attr('data-x');
        sumx = parseInt(datax === 0 || !datax ? 1 : datax) > sumx ? parseInt(datax === 0 || !datax ? 1 : datax) : sumx;
    });
    $this.children().append('<li class="x' + sumx + '" data-column="' + n + '" data-x="' + sumx + '"><ul></ul></li>');
    $this.find('[data-column="' + n + '"]').children().append($thisLi.clone());
};
var argument2 = function (et) {
 callbackArguments.push(arguments) 

    if (et instanceof EntityType) {
        return groupMap[et.name];
    } else {
        throw new Error('The EntityManager.getChanges() \'entityTypes\' parameter must be either an entityType or an array of entityTypes or null');
    }
};
var argument3 = 1.0302428570304664e+308;
var argument4 = r_1;
var argument5 = function (elem, i) {
 callbackArguments.push(arguments) 

    return callback.call(elem, i, elem);
};
var argument6 = true;
var argument7 = r_2;
var argument8 = function (li, num) {
 callbackArguments.push(arguments) 

    return num !== index ? num : null;
};
var argument9 = "";
var base_0 = [893,-100,-100,618,627,714,460]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,-100,-100,618,627,714,460]
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,-100,-100,618,627,714,460]
var r_2= undefined
try {
r_2 = base_2.map(argument5,argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,-100,-100,618,627,714,460]
var r_3= undefined
try {
r_3 = base_3.map(argument8,argument9)
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
require("fs").writeFileSync("./experiments/map/mapMined/test445.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)