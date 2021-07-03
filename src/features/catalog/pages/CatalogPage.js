import React, {useState} from 'react';
import {getListProduct} from "../api/CatApi";
import { useQuery } from 'react-query';
import {Card, Typography} from "@material-ui/core";
import {Link} from 'react-router-dom';

export function CatalogPage() {
    const [listProd,setlistProd] = useState([]);

    const { data,error,isLoading } = useQuery("products", async () => {
        const {data} = await getListProduct();
        setlistProd(data);
    });


  return (
    <div className="page"> Catalog's page
        {
            isLoading ? <div>Loading...</div> : error ? <div>{error.message}</div> : listProd.map((item) => (
                <div key={item.id}>{
                    <Card style={{width:'320px',margin:'10px',float:'left'}}>
                        <div style={{textAlign:'center'}}>
                            <Typography variant={"subtitle1"}>
                                {item.title}
                            </Typography>
                        </div>
                        <img width="320px" height="240px" src={item.photo} alt={{}}/>
                        <div style={{textAlign:'center'}}>
                            <Typography variant={"subtitle1"}>
                                Цена: {item.price} UAH
                            </Typography>
                            <Link to={`/info/product/${item.id}`}>
                                <button style={{width:'100%'}} >Детальней</button>
                            </Link>
                        </div>
                    </Card>
                }</div>
            ))
        }
    </div>
  );
}

