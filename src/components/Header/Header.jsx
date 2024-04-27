import React from 'react'
import LinkComponent from '../LinkComponent'

const Header = () => {
  return (
    <header>
        <div className='container'>
          <div className="header__container">
            <div className='logo_class'>
              <LinkComponent path='/'>
                <b className='logo'>Star Wars</b>
              </LinkComponent>
            </div>
            <div style={{display: 'flex',justifyContent: 'center', gap: '30px', marginTop: '20px'}}>
                <LinkComponent clas='link' path='/characters'><img src="https://i.postimg.cc/wxsr0195/characters.png" alt="characters" /></LinkComponent>
                <LinkComponent clas='link' path='/planets'><img src="https://i.postimg.cc/NFxWgnJ8/planets.png" alt="PLANETS" /></LinkComponent>
                <LinkComponent clas='link' path='/starships'><img src="https://i.postimg.cc/ZqBtrVnZ/starships.png" alt="starships" /></LinkComponent>
                <LinkComponent clas='link' path='/films'><img src='https://i.postimg.cc/Bv99B2KK/films.png' alt='films'/></LinkComponent>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Header