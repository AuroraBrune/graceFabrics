import { React, useState, useEffect } from 'react';
import axios from 'axios';

export default function Service(props) {
    let [newImage, setNewImage] = useState('')
    let [preview, setPreview] = useState(false)
    let [images, setImages] = useState([]);
    let [defaultMsg, setDefaultMsg] = useState('');

    let handleNewImage = e => {
        setNewImage(e.target.files[0])
        setPreview(true)
    }
    let handleSubmit = async (image) => {
        let fd = new FormData()
        fd.append('image', image)
        const config = {
            headers:{
                'Content-Type': 'multipart/form-data'
            }
        }
        try{
            const res = await axios.post('/api/upload', fd, config)
            console.log(res.data)
        } catch(err){
            console.log(err)
        }
        console.log(newImage)
    }
    let getImages = async () => {
        try {
            let res = await axios.get('/api/images');
            console.log(res)
            if (!res.data.files) {
                setDefaultMsg(res.data.msg);
                return;
            }
            else {
                setImages(res.data.files);
            }
        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getImages();
    }, [])
    console.log(images)

    return (
        <div>
            {preview ?
                <>
                    <button onClick={() => { setImages(''); setPreview(false);}}>X</button>
                    <img src={URL.createObjectURL(newImage)} alt="preview" />
                    <button onClick={() =>{handleSubmit(newImage)}}>Upload!</button>
                </>
            :
            <>
                <input type="file" onChange={handleNewImage} accept="png jpg jpeg" />
            </>
            }
            <div id="container">
                {images.length > 0 ? (
                    images.map(image => {
                        return (<img src={"https://gracefabrics.herokuapp.com/" + image} key={image} alt={image} />)
                    })
                ) :
                    <h1>{defaultMsg}</h1>
                }
            </div>
        </div>
    )
    // return (
    //     <div>
    //         <h1 className="main">{props.name}</h1>
    //         <p className="blurb">Ad sint aute tempor consequat ipsum eiusmod exercitation deserunt mollit. Laboris pariatur esse adipisicing tempor fugiat duis tempor fugiat dolor reprehenderit nulla duis fugiat. Occaecat sit magna exercitation velit aute enim non culpa. Ea proident minim elit laborum nisi cupidatat ea mollit mollit esse elit in nulla. Velit ut cupidatat qui dolor enim ullamco enim occaecat sunt eu consectetur quis et.</p>
    //     </div>
    // )
}