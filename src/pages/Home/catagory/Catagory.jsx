import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../newsCard/NewsCard";

const Catagory =()=>{
    const {id} = useParams()
    const catagoryNews = useLoaderData();
    return(
        <div>
           {id &&  <h3>It's:{catagoryNews.length}</h3>}
            {
                catagoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
        </div>
    )
}

export default Catagory;