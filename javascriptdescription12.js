// CRUD 
let users=[
    {id:1,year:1981,name:'Jasurbek Otelbayev'},
    {id:2,year:1982,name:'Alisher Navoiy'},
    {id:3,year:1983,name:'boltaboy Teshaboyev'},
    {id:4,year:1985,name:'Sasha Sergeev'},
    {id:5,year:1988,name:'Shovkat Sharipov'},
]

// C-CREATE///
// there we can use spread operator(...,) and distructure
// let newUser={id:12,name:"eshmat"}
// const addUser=()=>{
//     let res=[...users]
//     users.push(newUser)
//     console.log(res);
// }
// addUser()
// the reason why we are using the spread operator here (...) here because if we don't use it there 
// will be two arrays where the users are in both of them and the information which is added is in the first array 
// and outside of the second one 



// R-READ///
// there we can use filter ,sort , includes,find
// const filter =(res)=>{
//   let r= users.filter((vl)=>vl.name.includes(res))
//   console.log(r);
// }
// filter('ev')
// const  sort=(inp)=>{
//     let r= users.sort((a,b)=>{a.name.localeCompare(b.name)})
//     console.log(r);
//   }
//   sort()
// const  find=(id)=>{
//  let r= users.find((vl)=>vl.id===id)
//  console.log(r);
//  }

//  find(5)




// U-UPDATE////
//filter and find
// 5

// D-DELETE////
// const  del=(id)=>{
//  let r= users.filter((vl)=>vl.id !== id)
//   console.log(r);
//  }
//  del(3)
// filter,splice