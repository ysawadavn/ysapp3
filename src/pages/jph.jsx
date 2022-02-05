import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import jsonplaceholder from '../apis/jsonplaceholder';
import Buttonjps from '../components/Buttonjps';
import Resources from '../components/Resources';

const JPHpage = () => {
    const [resources, setResources] = useState([])
    const getPosts = async () => {
        try {
          const posts = await jsonplaceholder.get('/posts');
          setResources(posts.data);
        } catch (err) {
          console.log(err);
        }
      };        
    const getAlbums = async () => {
        try {
          const Albums = await jsonplaceholder.get('/Albums');
          setResources(Albums.data);
        } catch (err) {
          console.log(err);
        }
      };        
    return (
        <div className='ui container' style={{ marginTop: '30px' }}>
            <Link to="/">Back Home</Link><br></br>
            <Buttonjps onClick={getPosts} color='primary' text='posts' />
            <Buttonjps onClick={getAlbums} color='red' text='Albums' />
            <Resources resources={resources} />
        </div>
    );
};

export default JPHpage;