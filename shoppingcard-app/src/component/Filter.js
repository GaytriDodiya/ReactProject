import { Button, Form } from "react-bootstrap";
import Rating from './Rating';
import { CartState } from "../context/context";


const Filter = () => {
//  const[rate,setRate] =useState(2)
  const {
   productState: { byStock, byFastDelivery, sort, byRating, },productDispatch} = CartState();

  // console.log(byStock, byFastDelivery, sort, byRating,searchQuery)
  // searchQuery
  
  return (
    <div className='filters'>
        <span className="title">Filter Products</span>
        <span>
            <Form.Check 
                inline
                label="Asceding"
                name="groupl"
                type="radio"
                id={`inline-1`}
                onChange={()=>productDispatch({
                  type:"SORT_BY_PRICE",
                  payload:"lowToHigh",
                })
                }
                checked = {sort === 'lowToHigh' ? true: false}
                />
               </span>
      <span>
      <Form.Check 
                inline
                label="Decrending"
                name="groupl"
                type="radio"
                id={`inline-2`}
                onChange={()=>productDispatch({
                  type:"SORT_BY_PRICE",
                  payload:"highToLow",
                })
                }
                checked = {sort === 'highToLow' ? true: false}/>
     
      </span>
      <span>
      <Form.Check 
                inline
                label="include out of stock"
                name="groupl"
                type="checkbox"
                id={`inline-3`}
                onChange={()=>productDispatch({
                  type:"FILTER_BY_STOCK",
                })
                }
                checked = {byStock}
                />
     
      </span>
      <span>
      <Form.Check 
                inline
                label="fast delivry"
                name="groupl"
                type="checkbox"
                id={`inline-4`}
                onChange={()=>productDispatch({
                  type:"FILTER_BY_DELIVERY",
                })
                }
                checked = {byFastDelivery}/>
     
      </span>
          <span>
           <label style={{paddingRight:10}}> Rating:</label>
           <Rating rating={byRating} onClick={(i)=>productDispatch({
            type:"FILTER_BY_RATING",
            payload:i+1,
           })} style={{cursor:"pointer"}}/>
           </span>
           <Button variant='light' 
           onClick={()=>productDispatch({
            type:"CLEAR_FILTERS",})}
            >Clear Filter</Button>
    </div>
  )
}

export default Filter
