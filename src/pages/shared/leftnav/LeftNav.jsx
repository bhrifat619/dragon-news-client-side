import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h2>All catagories</h2>
            {
                catagories.map(catagoriy => <p key={catagoriy.id}>
                    <Link to={`/catagory/${catagoriy.id}`} className="text-black text-decoration-none">{catagoriy.name}</Link>
                </p>)
            }
        </div>
    )
}
export default LeftNav; 