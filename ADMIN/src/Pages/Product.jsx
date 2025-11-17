import React, { useContext } from 'react'
import { my_asset } from '../assets/assets'
import { MyContext } from '../context/ContextProvider'
import { Link } from 'react-router-dom'

const Product = () => {

  const { category , setCategory , type ,setType , desc , setDesc , price , setPrice , ImageFun , previewImg , ProductSubmitFun } = useContext(MyContext)
  return (
    
    <>
    <div className='container'>
     <Link to={"/grid"}>View Added Products</Link>
     <Link to={"/user"}>View user Lists</Link>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col'>
           <form onSubmit={ProductSubmitFun}>
            <input type='file' id='Image' hidden onChange={ImageFun}/>
            <label htmlFor='Image'>
                <img src={ previewImg ? previewImg : my_asset.upload} height={200} width={200}/>
            </label>
            <br />

            <select className='form-control' value={category} onChange={e => setCategory(e.target.value)}>
                <option hidden>choose</option>
                <option>livingRoom</option>
                <option>BedRoom</option>
                <option>Decor</option>
                <option>DiningRoom</option>
            </select>
            <input type='text' className='form-control' placeholder='Enter product type...' value={type} onChange={e => setType(e.target.value)}/>
            <input type='text' className='form-control' placeholder='Enter product desc...' value={desc} onChange={e => setDesc(e.target.value)}/>
            <input type='number' className='form-control' placeholder='Enter product price...'value={price} onChange={e => setPrice(e.target.value)}/>

            <input type='submit' className='btn btn-primary w-100' />
            </form> 
             </div>
      </div>
    </div>
    </>
  )
}

export default Product