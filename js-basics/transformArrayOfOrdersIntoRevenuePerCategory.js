// 5. **Transform array of orders into revenue per category**
//     - Input:
        
//         ```jsx
        // [
        //   { id: 1, category: "electronics", price: 100 },
        //   { id: 2, category: "clothes", price: 50 },
        //   { id: 3, category: "electronics", price: 200 }
        // ]
        
//         ```
        
//     - Output:
        
//         ```jsx
//         { electronics: 300, clothes: 50 }
//         ```

function transformArrayOfOrdersIntoRevenuePerCategory(input){
    let obj = {};
    for(const ele of input){
        obj[ele.category] = 0;
    }
    for(const ele of input){
        obj[ele.category] += ele.price;
    }
    return obj;
}

const output = transformArrayOfOrdersIntoRevenuePerCategory([
          { id: 1, category: "electronics", price: 100 },
          { id: 2, category: "clothes", price: 50 },
          { id: 3, category: "electronics", price: 200 }
        ]);
console.log(output)