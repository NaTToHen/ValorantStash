import '../../global/global.css';

import Header from '../header';
import CardArma from '../../CardArma';

function Home(props) {
  return (
    <main className="containerHome">
      <Header/>

      <section className='secDestaques'>
        <h1 className='h1Destaques'>DESTAQUES</h1>
        <div className='containerArmas'>
          <CardArma />
        </div>
      </section>
    </main>
  )
}

export default Home