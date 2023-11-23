import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditorsInsight from "../EditorsInsight/EditorsInsight";
const News = () => {
    const news = useLoaderData();
    console.log(news);
    const { title, details, image_url, total_view, author, rating, category_id } = news;
    console.log(category_id);
    return (
        <div>
            <Card className="p-2">
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/catagory/${category_id}`}><Button variant="danger">All news category</Button></Link>
                </Card.Body>
            </Card>
            <EditorsInsight></EditorsInsight>
        </div>
    )
}

export default News;