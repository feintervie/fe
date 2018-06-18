


add(2)(3)(4);

function add(a){
    function x(b){
        a*=b;
        return x;
    }
    x.toString=function(){return a;}
    return x;
}
