import React from 'react';
// import { Link} from 'react-router-dom';
import NewNoteInput from './components/NewNoteInput';
import './styles.scss';

const App: React.FC = () => (
    <div className="wrapper">
        {/* <h1>React 17 and TypeScript 4 App!🚀</h1><br/>
        <div>
            <ul>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/topics'>Topics</Link></li>
                <li><Link to='/settings'>Settings</Link></li>
            </ul>
        <hr />
      </div>    */}
        <NewNoteInput addNote={alert} />
        <hr />
        <ul>
            <li>Some note</li>
        </ul>
    </div>
);

export default App;