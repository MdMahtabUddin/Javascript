// 29-2 Apply Search includes, indexOf, startswith, endswith

const products =['dell laptop 264GB', 'macbook Laptop 512GB', 'hp laptop 128GB', 'mobile phone one plus'];

const searching='laptop'

const output= [];

// using includes()
for(const product of products){
    if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
        output.push(product)
    }
}
// console.log(output)

// using indexOf()

for(const product of products){
    if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1){
        output.push(product)
    }
}
console.log(output)

