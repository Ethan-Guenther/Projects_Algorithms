import axios from 'axios';
import {useEffect, useState} from 'react'
import {useNavigate, Link, useParams} from 'react-router-dom';

const EditFavorite = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/favorites/${id}`)
        .then((idData) => {
            console.log(idData)
            console.log(idData.data)
            setUrl(idData.data.url)
            setDescription(idData.data.description)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/favorites/${id}`,{
            url,
            description
        })
        .then((inputData) => {
            console.log(inputData)
            console.log(inputData.data)
            navigate('/')
        })
        .catch((err) => {
            console.log(err)
            setErrors(err.response.data.error.errors)
        });
    }
  return (
    <div>
        EditFavorite
        <form onSubmit={onSubmitHandler}>
            <label>URL:</label>
            <input type={'text'}
            name={"url"}
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

export default EditFavorite