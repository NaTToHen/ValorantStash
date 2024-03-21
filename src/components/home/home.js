import { Link } from 'react-router-dom'

import '../../global/global.css';

import Header from '../header';
import CardArma from '../../CardArma';
import AdVertical from './AdVertical';
import AdHorizontal from './AdHorizontal';

function Home(props) {
  return (
    <main className="containerHome">
      <Header />

      <h1 className='h1Titulo'>DESTAQUES</h1>

      <section className='secDestaques'>
        <div className='containerArmas'>
          <CardArma />
          <CardArma />
          <CardArma />
          <CardArma />
          <CardArma />
          <CardArma />
          <CardArma />
          <CardArma />
        </div>

        <AdVertical
          dataAdSlot="1947963685"
        />

      </section>

      <h1 className='h1Titulo'>novas skins</h1>

      <section className='secNovos'>
        <img className='fotoBundle' src="https://valostashimg.s3.sa-east-1.amazonaws.com/banners/bundleGlitchpop.webp" alt="" />
        <div className='infoBundle'>
          <h1 className='bundleTitulo'>VCT x LOUD Capsule</h1>
          <div className='containerBundle'>
            <img className="nivelSkinBundle" src="https://valostashimg.s3.sa-east-1.amazonaws.com/assets/Exclusive.png" alt="arma" />

            <div className="valorBundle">
              <img className="imgValorantPoints" src="https://valostashimg.s3.sa-east-1.amazonaws.com/assets/valorantPoint.png" alt="arma" />
              <p className="valorSkinCard">1,775</p>
            </div>

          </div>
          <button className='btnVerMais'>VER MAIS</button>
        </div>
      </section>

      <AdHorizontal
        dataAdSlot="8346136485"
      />

      <section className='secBotoes'>
        <Link to="/rifles"><button>RIFLES</button></Link>
        <Link to="/facas"><button>FACAS</button></Link>
        <Link to="/pistolas"><button>PISTOLAS</button></Link>
        <Link to="/snipers"><button>SNIPERS</button></Link>
        <Link to="/sub-metraladoras"><button>SUB-METRALADORAS</button></Link>
        <Link to="/escopetas"><button>ESCOPETAS</button></Link>
      </section>

    </main>
  )
}

export default Home