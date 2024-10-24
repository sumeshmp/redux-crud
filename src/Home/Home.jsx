import React from 'react'
import Header from './Header'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { delet } from '../redux/productSlice';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

function Home() {
  const product = useSelector((state) => state.productReducer)
  console.log(product)
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const handleDelete = (id) => {
  //   dispatch(delet)
  //   navigate(0)
  //   console.log(id)
  // }
  return (
    <>
      <Header />
      <div id='home' className=' d-flex justify-content-center align-items-center'>
        <div className='container border border-info shadow pt-3 rounded-4'>
          <Link to={'/add'} className='btn btn-info my-4'>
            <span className='fs-5'>+</span> Add Product
          </Link>


          <div>
            {
              product?.length > 0 ?
                <Table striped bordered hover responsive='sm'>
                  <thead>
                    <tr className='row1'>
                      <th className='text-primary text-center p-3'>ID</th>
                      <th className='text-primary text-center p-3'>Name</th>
                      <th className='text-primary text-center p-3'>Category</th>
                      <th className='text-primary text-center p-3'>Price</th>
                      <th className='text-primary text-center p-3'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      product?.map((item, index) => (
                        <tr key={index} className='row2'>
                          <td className='text-primary text-center p-3'>{item?.id}</td>
                          <td className='text-primary text-center p-3'>{item?.name}</td>
                          <td className='text-primary text-center p-3'>{item?.cat}</td>
                          <td className='text-primary text-center p-3'>
                            <i className="fa-solid fa-indian-rupee-sign" />{item?.price}
                          </td>
                          <td className='text-primary text-center p-3'>
                            <Link to={`edit/${item.id}`} className='btn btn-secondary mt-1 me-2'>
                              <i className="fa-solid fa-pen-to-square" style={{ color: "#00007A", }} />
                            </Link>
                            <button className='btn btn-secondary mt-1 me-2' onClick={() => { dispatch(delet({ id: item.id })) }}>
                              <i className="fa-solid fa-trash" style={{ color: "#900101", }} />
                            </button>
                          </td>
                        </tr>
                      ))
                    }

                  </tbody>
                </Table>
                :

                <h3>No products yet!!</h3>

            }

          </div>

        </div>
      </div>
    </>
  )
}

export default Home