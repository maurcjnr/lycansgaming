import React from 'react'

export default props => {
  return (
    <div className="home">
      <div className="home__coming-soon">Novidades em breve...</div>
      <div className="home__image"></div>
      <div className="home__loader"></div>
      <div className="home__social">
        <a className="home__social__instagram" href="https://www.instagram.com/lyc.oficial" target="_blank"></a>
        <a className="home__social__twitch" href="https://www.twitch.tv/maurcjnr" target="_blank"></a>
        <a className="home__social__twitter" href="https://www.twitter.com/lycansoficial" target="_blank"></a>
      </div>
      <div className="home__contact">
        <p>E-mail para contato:</p>
        <p>contato@lycansgaming.com.br</p>
      </div>
    </div >
  )
}