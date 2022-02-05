import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from '../components/Searchbar';
import ImageList from '../components/ImageList';
import logo from '../pixabaylogo.png';

const ImgPage = () => {
    const [images,setImages] = useState([]);
    const Apikey = process.env.REACT_APP_PIXABAY_APIKEY;
    const onSearchSubmit = async(term) => {
          try{
            const params={
                key: Apikey,
                q: term,
            };
            const response= await axios.get("https://pixabay.com/api/", { params });
            setImages(response.data.hits);
            if(response.data.total==0){
              window.alert('お探しの画像はありません。');
            }
          } catch {
            window.alert('写真の取得に失敗しました。');
          }
      };

    return (
        <div>
            <Link to="/">Back Home</Link><br></br>
            <img src={logo} alt='pixabay-logo' className='pixabay-logo' />
            <SearchBar onSubmit={onSearchSubmit}/>
            <ImageList images={images} />
        </div>
    );
};

export default ImgPage;