import '../../global/global.css';

import Header from '../header';
import CardArma from '../../CardArma';
import AdVertical from './AdVertical';

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
    </main>
  )
}

export default Home