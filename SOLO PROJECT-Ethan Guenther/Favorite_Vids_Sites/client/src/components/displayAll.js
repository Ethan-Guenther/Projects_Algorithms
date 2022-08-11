import {useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const DisplayAll = () => {

    const [favoritesList, setFavoritesList] = useState([]);
    const navigate = useNavigate()

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
    <div className='html-container'>
        <div className='header'>
            <div>
                <h1>Favorite URL's</h1>
                <button className='button-create' onClick={ () => navigate('/new/create')}><span>Add Url</span></button>
            </div>

        </div>
        <div className='sub-header'>
            <h2>Table of contents</h2>
        </div>
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
                                <td>
                                     <button className= 'space-button' onClick={() => navigate(`${favorite._id}/description`)}>Details</button>
                                    <button className='space-button' onClick={() => navigate(`edit/${favorite._id}`)}>Edit</button>
                                </td>
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