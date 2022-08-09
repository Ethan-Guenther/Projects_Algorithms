import {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const CreateFavorite = () => {

    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:api/favorites', {
            url,
            description
        })
        .then((createUrl) => {
            console.log(createUrl)
            console.log(createUrl.data)
            navigate("/")
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
        })
    }
  return (
    <div>
        <Link to={'/'}>Back To Home</Link>

        <form onSubmit={onSubmitHandler}>
            <label>URL:</label>
            <input type={'text'}
            name='url'
            value={url} onChange = {(e) => setUrl(e.target.value)}/>

        </form>
    </div>
  )
}

export default CreateFavorite