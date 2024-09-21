import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProductList from './ProductList'

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(() => { getData() }, [])

    let getData = async () => {
        try {
            let res = await fetch('https://api-dev.wogom.com/v1/retailer/fresharrivals', {
                method: 'POST',
                headers: {
                    'x-userid': '7185',
                    'x-random': 'xyz',
                    'xyz': '754ad38082d761943b6c95670a38c6ca',
                    'x-deviceinfo': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    retailerid: 349, // Include necessary body data
                    categoryid: 0
                }),
            })
            let res1 = await res.json()
            // console.log(res1.data)
            setProducts(res1.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return (

        <div className='col-12 mb-2'>
            <div className="row mb-3">
            {products.map((product, i) =>
                    <div className='row'>
                        <div className='col-3 mb-2'>
                            <div className='card'>
                                <img className="card-img-top" height={230} src={product.productimg} />
                                <div className="card-body">
                                    <h4 className="card-title">{product.sellerproductid}</h4>
                                    <p className="card-text">{product.sku}</p>
                                    <p className="card-text">${product.mrp}</p>
                                    <p className="card-text">{product.markerprice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                </div>
        </div>
    )
}

export default Product
