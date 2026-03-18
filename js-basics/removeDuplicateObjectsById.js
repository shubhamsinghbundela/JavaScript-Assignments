// 6. Remove duplicate objects by id
//     - Input:
        
//       
        // [
        //   { id: 1, name: "A" },
        //   { id: 2, name: "B" },
        //   { id: 1, name: "A" }
        // ]
        
//     - Output:
        
//         
//         [
//           { id: 1, name: "A" },
//           { id: 2, name: "B" }
//         ]

function removeDuplicateObjectsById(input){
    let arr = [];
    for(const ele of input){
        if(arr.length>0){
            if(arr.some(e=>e.id === ele.id)){
                continue;
            }else{
                arr.push(ele);
            }
        }else{
            // console.log('30')
            arr.push(ele);
        }
    }
    return arr;
}

const output = removeDuplicateObjectsById([
          { id: 1, name: "A" },
          { id: 2, name: "B" },
          { id: 1, name: "A" }
        ]);

console.log(output);