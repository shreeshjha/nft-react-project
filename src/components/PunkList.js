import React from 'react';
import CollectionCard from './CollectionCard';
import './PunkList.css';

const PunkList = ({punkListData, setSelectedPunk}) => {
  return (
    <div className='punk_list'>
      {
        punkListData.map(punk => (
          <div onClick={() => setSelectedPunk(punk.token_id)} key={punk.token_id}>
            <CollectionCard

              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_original_url}
            />
          </div>
        ))
      }
    </div>
  )
}

export default PunkList
