export function filterData(valueIn,allReslist){
    let filter =  allReslist.filter(function filterRes(res){
        console.log(res.data.name.toLowerCase())
        return res.data.name.toLowerCase().includes(valueIn.toLowerCase())
    })
    return filter;
}
// WE CANT USE Use state variable inside the function, so we need to custome hooks