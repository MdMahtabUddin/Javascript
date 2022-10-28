// 29-8 Different types of Error object and explore Try-catch
// ??
// LWS 47
let x =12;
try{
    // regular code , ekhane lekha kono code error dekha dile
    //  catch e pathiye de
    if(x=='') throw 'empty'
    if(isNaN(x)) throw 'not a number';
    x=Number(x)
    if(x < 5) throw 'to low'
    if( x > 8 ) throw 'to high'
} catch(err){
    console.log(err)
    }


    // finaly statement 

