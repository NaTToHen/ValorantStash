function CardArma(props) {
   return (
      <div className="cardArma">
         <img className="fotoArmaCard" src="https://valostashimg.s3.sa-east-1.amazonaws.com/armas/spectrePrime.svg" alt="arma"/>
         <div className="dadosCard">
            <img className="nivelSkinCard" src="https://valostashimg.s3.sa-east-1.amazonaws.com/assets/premium.svg" alt="arma"/>
            <div className="valorSkin">
               <img className="imgValorantPoints" src="https://valostashimg.s3.sa-east-1.amazonaws.com/assets/valorantPoint.png" alt="arma"/>
               <p className="valorSkinCard">1,775</p>
            </div>
         </div>
      </div>     
   )
}

export default CardArma