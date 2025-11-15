import React, { useContext } from 'react'
import { my_asset } from '../assets/assets'
import { MyContext } from '../context/ContextProvider'
import { Link } from 'react-router-dom'

const Grid = () => {

    const { productData , RemoveProduct, UpdateFun , updateCategory , setUpdateCategory ,updateType , setUpdateType, updateDesc , setUpdateDesc, updatePrice , setUpdatePrice,  updatePreviewImg , UpdateImageFun  , UpdateSubmitFun} = useContext(MyContext)
  return (
    <>

    <div className='container'>
        <Link to={"/"} className='fs-5'>Add Products</Link>
        
    </div>
        <div className='container my-5'>
            
            <table className='table table-primary text-center algin-middle'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>desc</th>
                        <th>price</th>
                        <th>Edit</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productData.length=== 0
                        ?
                        <tr>
                            <td className='tex-danger' colSpan={7}>no products added</td>
                             </tr>
                             :
                             productData.map((value , index) => {
                                return(
                                    <tr key={index}>
                                         <td><img src={value.img} alt='' height={60} /></td>
                                         <td>{value.category}</td>
                                         <td>{value.type}</td>
                                         <td>{value.desc}</td>
                                         <td>₹{value.price}</td>
                                         <td><button className='btn btn-primary' data-bs-toggle ="modal" data-bs-target="#mymodal" onClick={() => UpdateFun(value._id)}>update</button></td>
                                         <td><span className='fs-4 text-danger' onClick={() => RemoveProduct(value._id)}>&times;</span></td>
                                    </tr>
                                )
                             })
                    }
                </tbody>
            </table>

            <div className='modal fade' id='mymodal'>
                <div className='modal-dialog modal-lg'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h4>Update Product</h4>
                            <button className='btn-close' data-bs-dismiss="modal"></button>

                        </div>
                        <div className='modal-body'>
                            <form className='container' onSubmit={UpdateSubmitFun}>
                                  <input type='file' id='updateImage' hidden onChange={UpdateImageFun} />
                                  <label htmlFor='updateImage'>
                                    <img src={ updatePreviewImg ? updatePreviewImg : my_asset.upload} height={200}/>
                                  </label>

                                  <select className='form-control my-3' value={updateCategory} onChange={e => setUpdateCategory(e.target.value)}>
                                    
                                    <option>Bedroom</option>
                                    <option>livingRoom</option>
                                  </select>

                                  <input type='text' className='form-control my-3' value={updateType} onChange={e => setUpdateType(e.target.value)} />
                                  <input type='text' className='form-control my-3' value={updateDesc} onChange={e => setUpdateDesc(e.target.value)} />
                                  <input type='number' className='form-control my-3' value={updatePrice} onChange={e => setUpdatePrice(e.target.value)}/>
                                  <input type='submit' className='btn btn-primary w-100' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Grid