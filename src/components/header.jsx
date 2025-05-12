import './header.css'
import { useTheme } from '../context/ThemeContext'

function Header() {
  const {darkMode} = useTheme()
  console.log("darkMode: ", darkMode)
  return (
    <div className='container'>
        <h1>Food App</h1>
    </div>
  )
}

export default Header