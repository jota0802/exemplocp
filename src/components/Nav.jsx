import {Link} from 'react-router-dom'

const Nav =()=>{
    return(
        
        <section className='nav'>

            <Link to='/' className='link'>Home</Link>
            <Link to='/Produtos' className='link'>Produtos</Link>

        </section>
    )
}

export default Nav