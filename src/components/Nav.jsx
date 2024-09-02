import {Link} from 'react-router-dom'
import {NavStyle} from '../css/NavStyle'

const Nav =()=>{
    return(
        <NavStyle>
            <section className='nav'>
                <Link to='/' className='navlink'>Home</Link>
                <Link to='/Produtos' className='navlink'>Produtos</Link>
            </section>
        </NavStyle>
    )
}

export default Nav