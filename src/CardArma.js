function CardArma(props) {
   return (
      <div className="cardArma">
         <img className="fotoArmaCard" src={props.fotoURL} alt="arma"/>
         <p className="nomeArmaCard">{props.nome}</p>
         <div className="dadosCard">
            <img className="nivelSkinCard" src={props.nivelURL} alt="arma"/>
            <div className="valorSkin">
               <img className="imgValorantPoints" src="https://valostashimg.s3.sa-east-1.amazonaws.com/assets/valorantPoint.png" alt="arma"/>
               <p className="valorSkinCard">{props.valor}</p>
            </div>
         </div>
      </div>   
   )
}

export default CardArma