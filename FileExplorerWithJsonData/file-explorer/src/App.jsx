import React, { useState } from 'react';
import explorer from './data/folderdata'
import Folder from './component/Folder.jsx';

function App() {
  const[explorerData,setExplorerData] = useState(explorer);
  return (
    <div>
    <Folder explorer={explorerData}></Folder>
    </div>
  )
}

export default App