 window.addEventListener('DOMContentLoaded', getdata)
const butn = document.getElementById('btn')
butn.addEventListener('click', save) ;
async function save(e)
{
    try {
        e.preventDefault();
let chpr = document.getElementById('cp').value ;
let chdi = document.getElementById('cd').value;
let chtab = document.getElementById('ct').value;
// let id = e.target.id;
const obj = {
    chpr,chdi,chtab
}
let resp = await axios.post('https://crudcrud.com/api/5e5d966837734e0686ad806c4fed56ad/post' ,obj )
// window.location.reload()
getdata()

    } catch (err) {
        console.log(err) ;
    }
}

    async function getdata()
    {
        try {
            let res = await axios.get('https://crudcrud.com/api/5e5d966837734e0686ad806c4fed56ad/post')
            console.log(res.data)
            for(let i =0 ;i<res.data.length ;i++) {
                 showdata(res.data[i])
            
        }
    }
        catch(err){
            console.log(err)
        }
    }

    async function showdata(obj)
    {
        try {
                let newlist = document.createElement('li')
               
                
                newlist.textContent = obj.chpr + '-' +obj.chdi;
               
                
                //delete
                let dlt = document.createElement('input') ;
                dlt.type = 'button'
                dlt.id = obj._id ;
                dlt.value = 'delete'
                newlist.appendChild(dlt)
                dlt.onclick = (e) => {
                    let id= e.target.id
                    console.log(id)
                    axios.delete(`https://crudcrud.com/api/5e5d966837734e0686ad806c4fed56ad/post/${id}`)
                //  .then(window.location.reload()) ;
                    
               // newlist.appendChild(ulist) 
                }

                if(obj.chtab==='table 1' )
                {
                    let ulist = document.getElementById('t11')
                
            ulist.appendChild(newlist) ;
                }
                else if(obj.chtab==='table 2')
                {
                    let ulist = document.getElementById('t22')
                
                    ulist.appendChild(newlist) ;
                }
                else
                {
                    let ulist = document.getElementById('t33')
                
                    ulist.appendChild(newlist) ;
                }
        }
     
    catch(err){
        console.log(err)
    }
    
}
    