export function filterData(valueIn,allReslist){
    let filter =  allReslist.filter(function filterRes(res){
        console.log(res.data.name.toLowerCase())
        return res.data.name.toLowerCase().includes(valueIn.toLowerCase())
    })
    return filter;
}
// WE CANT USE state variable inside the function,we need to custome hooks