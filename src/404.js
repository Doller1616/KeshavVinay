import React from 'react'

export default function NotFound404() {
    return ( <div style={{textAlign: 'center', paddingTop: '2rem',background: 'whitesmoke'}}>
            <img src="https://static-mh.content.disney.io/matterhorn/assets/logos/disney_logo_dark-baa807690db7.png" alt="Disney " height="34" width="83"></img>
        <div style={{ minHeight: '80vh', display:'flex', gap: 5, alignItems: 'center', justifyContent:'center', flexWrap: 'wrap'}} >
            <div style={{width: '10rem'}}>
            <div class="rich_text_image top_align"> 
            <img src="https://lumiere-a.akamaihd.net/v1/images/error-500_aa3dde6a.png?region=0%2C0%2C164%2C228" alt=""/> 
            </div>  
            </div>  
            <div style={{width: '30rem'}}> 
            <h1>Oops! Page Not Found.</h1> 
            <h2>You must have picked the wrong door because I haven't been able to lay my eye on the page you've been searching for.</h2> 
            <form id="error_search" action="" method="GET"> 
            <div class="search-field"> 
            <h1>404</h1>
            </div> 
            </form>  
            <div class="button-container"> 
             <a class="button blue large cta-button ada-el-focus" href="https://www.disney.in">BACK TO HOME</a> 
             </div>  
             </div> 
             </div>
             </div> )
}
