let pit: number| string=  "fdfd";

let apirequest : 'pending' | 'success' | 'error'='pending';
apirequest='success';

const arr=['34','34','56','48']
let ans:string | undefined;

for (let ar in arr){
    if(ar==='56'){
        ans=ar;
    }
}
console.log(ans);
