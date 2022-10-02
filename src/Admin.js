import {React, useState} from 'react'

function Admin  (){
    const[name, setName] = useState("")
    const[image, setImage] = useState("")
    const[price, setPrice] = useState("")
    const[detail, setDetails] = useState("")
    const [type, setProductType] = useState(" ")

    const handleSumbmit = (e) =>{
        e.preventDefault()
    

        fetch ("http://localhost:3000/Inventory",{
            method: "POST",
            headers: {
                "content-type": "application/json",
            }, body: JSON.stringify({
                "name": name,
                "image": image,
                "price": price,
                "detail": detail,
                "type": type
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        
        setName(" ")
        setImage(" ")
        setPrice(" ")
        setDetails(" ")
        setProductType(" ")
    }


  return (
    <div className='form'>
        <form className="formy" onSubmit={handleSumbmit}>
            <input value={name}
                type="text"
                className="form-control"
                placeholder="Name.."
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                value={image} 
                src=''  
                className="form-control"
                placeholder="image Url"
                onChange={(e) => setImage(e.target.value)}
            />
            <input
                 value={price} 
                 type="price" 
                 className="form-control" 
                 placeholder="price"
                 onChange={(e) => setPrice(e.target.value)}
            />
            <input
                value={type}
                type="text"
                className="form-control"
                placeholder="Type of product"
                onChange={(e) => setProductType(e.target.value)}
            />
            <input 
                value={detail}
                type="detail"  
                className="form-control" 
                placeholder="detail"
                onChange={(e) => setDetails(e.target.value)}
            />
            
            <input type="submit" className="button" value="Submit"/>
        </form>
    </div>
  )
}
export default Admin
