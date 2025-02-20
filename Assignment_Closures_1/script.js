
//counter 

function counterfunction(){
    var count=0;
    this.increment=function(){
        count++;
    console.log(count);
    }
    this.decrement=function(){
        count--;
    console.log(count);
    }
}
var counter=new counterfunction();
counter.increment();
counter.increment();
counter.decrement();


//febbonacci

function memoizedFibonacci(){
    var value={};
    this.fibonacci=function(n){
        if(n in value){
            return value[n];
        }
        if(n<=1){
            return n;
        }
        value[n]=this.fibonacci(n-2)+this.fibonacci(n-1);
        return value[n];
    };

};

const ans=new memoizedFibonacci();
console.log(ans.fibonacci(5));
console.log(ans.fibonacci(8));