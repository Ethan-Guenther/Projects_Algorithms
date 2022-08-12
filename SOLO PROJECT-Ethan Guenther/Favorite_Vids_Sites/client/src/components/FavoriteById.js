import {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useNavigate, Link} from 'react-router-dom';

const FavoriteById = () => {

    const [favById, setFavById] = useState({});
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/favorites/${id}`)
        .then((faveById) => {

            console.log(faveById);
            console.log(faveById.data);
            setFavById(faveById.data);
        })
        .catch((err) => {
            console.log("Error grabbing URL by ID", err)
        })
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/favorites/${id}`)
        .then((res) => {
            console.log(res)
            console.log(res.data)
            navigate('/')
        })
        .catch((err) => {
            console.log("There was an issue deleting URL", err)
        })
    }
  return (
    <div className='description-page'>
        <div>
            <Link to={"/"}>Back To Home</Link>
        </div>
        <div>
            <h2>URL:</h2>
            <p onClick={() => window.open(`${favById.url}`, "_blank")}><span>{favById.url}</span></p>
        </div>
        <div>
            <h2>Description:</h2>
            <p>{favById.description}</p>
        </div>
        <div>
            <button onClick={handleDelete}>Delete</button>

        </div>
    </div>


  )
}

export default FavoriteById;