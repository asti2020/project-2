import {React} from 'react'
import CardContainer from './CardContainer.js'
import { Search } from "./Search.js"

function Home (){
    // const [details, setDetails] = useState({})
    // useEffect (() =>{
    //     fetch("http://localhost:3000/Inventory")
    //     .then((res) => res.json())
    //     .then((data)=> {
    //         setDetails(data);
    //     })  
    //     .catch((err) => {
    //         console.log(err)
    //     })

    // },[])

    //          console.log(details)

  return (
    <div>
        <Search></Search>
        <CardContainer></CardContainer>
           
    </div>
  )
}


export default Home
