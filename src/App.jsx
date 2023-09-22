import {BrowserRouter} from "react-router-dom"

import './SASS/index.scss';

//components
import { TestingPage as PageOne } from "./ROUTES/01-PageOne";


function App() {
 

  return (
   <BrowserRouter>
      <PageOne></PageOne>
   </BrowserRouter>
  )
}

export default App