import { Provider } from 'react-redux'
import './App.css'
import Navbar from './components/Navbar'
import Page from './pages/Page'
import { store } from './redux/Store'

function App() {

  return (
    <Provider store={store}>
      <Navbar />
      <Page />
    </Provider>
  )
}

export default App
