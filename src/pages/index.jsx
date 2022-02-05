import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button';

const MainPage = () => {
    return (
        <div>
            <center>
            <h1>YSapps</h1>
            <big>This is the Main Page. Select apps down there.<br></br><br></br><br></br></big>
            <div class="ui compact segment">
            <h4 class="ui horizontal divider header">
            <Button title='Users' component={Link} to="/users" /><br></br><br></br>
            </h4>
            <big>It just show you a list of users.<br></br><br></br></big>
            <h4 class="ui horizontal divider header">
            <Button title='Counter' component={Link} to="/counterpage" /><br></br><br></br>
            </h4>
            <big>Simple conter that never ends.<br></br><br></br></big>

            <h4 class="ui horizontal divider header">
            <Button title='JPH' component={Link} to="/jph" /><br></br><br></br>
            </h4>
            <big>You can check the data coming from JSONPlaceholder via API.<br></br><br></br></big>

            <h4 class="ui horizontal divider header">
            <Button title='Imgsearch' component={Link} to="/imgsearch" /><br></br><br></br>
            </h4>
            <big>You can search images coming from 
                <Link to = "https://pixabay.com/"> pixabay.com </Link>via API.<br></br><br></br></big>

            <h4 class="ui horizontal divider header">
            <Button title='About' component={Link} to="/about" /><br></br><br></br>
            </h4>
            <big>You'll see what is all about.<br></br><br></br></big>
            </div>
            </center>
        </div>
    );
};

export default MainPage;