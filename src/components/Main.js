import React, {useState, useEffect} from 'react'
import instagramLogo from '../assets/owner/instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import moreIcon from '../assets/owner/more.png';
import './Main.css';

const Main = ({selectedPunk, punkListData}) => {
  const [activePunk, setActivePunk] = useState(punkListData[0])

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk])
  }, [selectedPunk, punkListData])

  return (
    <div className='main'>
       <div className="main_content">
         <div className="punk_highlight">
            <div className="punk_container">
              <img className='selected_punk' src={activePunk.image_original_url} alt="punk" />
            </div>
         </div>

         <div className="punk_details" style={{ color: '#fff' }}>
           <div className="title">
             { activePunk.name }
             <span  span className="item_number">·#{ activePunk.token_id }</span>
            </div>
          <div className="owner">
            <div className="owner_image_container">
              <img src={activePunk.owner.profile_img_url} alt="owner" />
            </div>
            <div className="owner_details">
              <div className="owner_name_and_handle">
                <div>{ activePunk.owner.address }</div>
                <div className="owner_handle">shreeshjha</div>
              </div>
              <div className="owner_link"><img src={instagramLogo} alt="" /></div>
              <div className="owner_link"><img src={twitterLogo} alt="" /></div>
              <div className="owner_link"><img src={moreIcon} alt="" /></div>
            </div>
          </div>
         </div>

       </div>
    </div>
  )
}

export default Main
