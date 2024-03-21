import React, { useEffect } from 'react';

const AdHorizontal = (props) => {

   useEffect(() => {
      try {
         (window.adsbygoogle = window.adsbygoogle || []).push({})
      }
      catch (e) {
      }
   }, []);

   return (
      <>
         <ins class="adsbygoogle horizontal"
            style={{ display:"block" }}
            data-ad-client="ca-pub-3472920569845227"
            data-ad-slot={props.dataAdSlot}
            data-ad-format="auto"
            data-full-width-responsive="true">
         </ins>
      </>
   )
}

export default AdHorizontal