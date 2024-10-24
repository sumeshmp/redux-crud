import React,{useState} from 'react'
import { Link, useNavigate,useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {edit} from '../redux/productSlice'

function Edit() {
  const {id}=useParams()
  const product = useSelector((state) => state.productReducer)
  const existingProduct=product.find((item)=>item.id==id)
  const [uname, setName] = useState(existingProduct ? existingProduct.name : '')
  const [ucat, setCat] = useState(existingProduct ? existingProduct.cat : '')
  const [uprice, setPrice] = useState(existingProduct ? existingProduct.price : '')


  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleUpdate=(event)=>{
    event.preventDefault()
    dispatch(edit(
      {
        id:id,
        name:uname,
        cat:ucat,
        price:uprice
      }
    ))
    navigate('/')
  }
  return (

    <>
    
      <div className='edit-bg d-flex vh-100 justify-content-center align-items-center mt-5'>
        <div className='edit w-90 border p-5 shadow'>
          <h3 className='text-light'> Edit Product</h3>
          <form onSubmit={handleUpdate}>
            <div>
              <label htmlFor="name" className='text-primary'>Name:</label>
              <input value={uname} onChange={(e)=>setName(e.target.value)} type="text" name='name' className='form-control' placeholder='Enter Name' />
            </div>
            <div>
              <label htmlFor="category" className='text-primary'>Category:</label>
              <input value={ucat} onChange={(e)=>setCat(e.target.value)} type="text" name='cat' className='form-control' placeholder='Enter Category' />
            </div>
            <div>
              <label htmlFor="price" className='text-primary'>Price:</label>
              <input value={uprice} onChange={(e)=>setPrice(e.target.value)} type="text" name='price' className='form-control' placeholder='Enter Price'/>
            </div>
            <div className='d-flex justify-content-between mt-4'>
              <Link to={"/"} className='btn btn-danger '>Cancel</Link>
              <button className='btn btn-primary '>Update</button>
            </div>
          </form>
        </div>
      </div>   
       </>
  )
}

export default Edit