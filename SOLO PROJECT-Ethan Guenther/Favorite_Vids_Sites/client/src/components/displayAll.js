import {useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const DisplayAll = () => {

    const [favoritesList, setFavoritesList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/favorites/")
        .then((getFavorites) => {
            console.log(getFavorites)
            console.log(getFavorites.data)
            setFavoritesList(getFavorites.data)
        })
        .catch((err) => {
            console.log("Error grabbing all URL's", err)
        })
    }, []);




  return (
    <div>
        <h1>Favorite URL</h1>

        <h2>Table of contents</h2>
        <table>
            <thead>
                <tr>
                    <th>URL's</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    favoritesList.map((favorite, index) => {
                        return(
                            <tr key={favorite._id}>
                                <td onClick={() => window.open(`${favorite.url}`, "_blank")}>{favorite.url}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  );
}

export default DisplayAll;