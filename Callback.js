
function fun1(fun2){
    let Sandwich=[];
    Sandwich.push("Bread");
    console.log("Sandwich so far",Sandwich);
    fun2(Sandwich,fun3);
}
function fun2(Sandwich, fun3){
    Sandwich.push("Veggies");
    console.log("Sandwich so far",Sandwich);
    fun3(Sandwich,true,fun4);
    
}
function fun3(Sandwich, cheese, fun4){
    if(cheese){
        Sandwich.push("Cheese");
        console.log("Sandwich so far",Sandwich);
    }
    fun4(Sandwich,true,fun5);
}

function fun4(Sandwich,toast,fun5){
    if(toast){
        Sandwich.push("Toasted");
        console.log("Sandwich so far",Sandwich);
        fun5(Sandwich,"Salt and pepper");
    }else{
        Sandwich.push("Not Toasted");
        serve();
    }
}

function fun5(Sandwich,toppings){
    Sandwich.push(toppings);
    console.log("Sandwich so far:",Sandwich);
    serve(Sandwich);
}
function serve(Sandwich){
    console.log("Sandwich is served");
}

fun1(fun2);