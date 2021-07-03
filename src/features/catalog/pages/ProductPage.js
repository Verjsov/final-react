import React from 'react';
import { useParams } from "react-router";
import { useQuery } from "react-query";
import {getProduct} from "../api/CatApi";
import {Card, CardContent, Typography} from "@material-ui/core";


export function ProductPage() {
    const {id} = useParams();

    const { data, error, isLoading } = useQuery(["products", id], async () => {
        const {data} = await getProduct(id);
        return data;
    });


  return (
    <div className="page"> Product  page
        {
            isLoading ? <div>Loading...</div> : error ? <div>{error.message}</div> :
                <Card style={{width:'95%',margin:'auto',textAlign: 'center'}}>
                    <img width="50%" height="50%" src={data.photo} alt={{}}/>
                    <CardContent>
                        <Typography variant={"subtitle1"}>
                            {data.title}
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            {data.description}
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            Цена: {data.price} UAH
                        </Typography>
                    </CardContent>
                </Card>
        }
    </div>
  );
}

