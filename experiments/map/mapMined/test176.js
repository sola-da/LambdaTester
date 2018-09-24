





var callbackArguments = [];
var argument1 = function (d) {
 callbackArguments.push(arguments) 

    return d.key;
};
var argument2 = function (word) {
 callbackArguments.push(arguments) 

    return {
        name: word,
        value: word,
        score: 0,
        meta: 'keyword'
    };
};
var argument3 = [122,126,843,59,403,-100,213,82];
var argument4 = function (item) {
 callbackArguments.push(arguments) 

    item['title'] = item['name'];
    for (var i = 0; i < locations.length; i++) {
        if (item.current_location !== null && item.current_location.id === locations[i].page_id) {
            $.extend(item.current_location, locations[i]);
        }
        if (item.hometown_location !== null && item.hometown_location.id === locations[i].page_id) {
            $.extend(item.hometown_location, locations[i]);
        }
    }
    return item;
};
var argument5 = "5ky";
var argument6 = function () {
 callbackArguments.push(arguments) 

    var elem = this, isWin = !elem.nodeName || $.inArray(elem.nodeName.toLowerCase(), [
            'iframe',
            '#document',
            'html',
            'body'
        ]) != -1;
    if (!isWin)
        return elem;
    var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;
    return /webkit/i.test(navigator.userAgent) || doc.compatMode == 'BackCompat' ? doc.body : doc.documentElement;
};
var argument7 = r_0;
var base_0 = ["o","s","ztc","Hsf$p","Y"]
var r_0= undefined
try {
r_0 = base_0.map(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.map(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["o","s","ztc","Hsf$p","Y"]
var r_2= undefined
try {
r_2 = base_2.map(argument4,argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test176.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)