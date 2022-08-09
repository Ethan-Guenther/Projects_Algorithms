import {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const CreateFavorite = () => {

    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/favorites', {
            url,
            description
        })
        .then((createUrl) => {
            console.log(createUrl)
            console.log(createUrl.data)
            navigate("/");
        })
        .catch((err) => {
            console.log(err);
            setErrors(err.response.data.errors);
            setUrl('');
            setDescription('');
        });
    }
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <label>URL:</label>
            <input type={'text'}
            name='url'
            value={url} onChange = {(e) => setUrl(e.target.value)}/>
            {/* Display Errors for URL validation */}
            {
                errors.url ?
                <p>{errors.url.message}</p> : null
            }
            <label>Description:</label>
            <input type={'text'}
            name='description'
            value={description} onChange = {(e) => setDescription(e.target.value)}/>
            {/* Display Errors for Desription Validation */}
            {
                errors.description ?
                <p>{errors.description.message}</p> : null
            }
            <button type='submit'>Submit</button>
            <button><Link to={'/'}>Cancel</Link></button>

        </form>
    </div>
  )
}

export default CreateFavorite