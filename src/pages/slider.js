import React from 'react';
import Slider from 'react-slick';

const NFTCollection = ({ name, nfts }) => {
 const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      <button onClick={connectWallet} disabled={connected}>
        Connect Wallet
      </button>

      {connected && nftCollections.length > 0 ? (
        nftCollections.map((collection) => (
          <div key={collection.address}>
            <h3>{collection.name}</h3>
            {collection.nfts.length > 0 ? (
              <Slider {...sliderSettings}>
                {renderNfts(collection.nfts)}
              </Slider>
            ) : (
              <p>No NFTs found for this collection</p>
            )}
          </div>
        ))
      ) : (
        <p>Please connect your wallet to view the NFTs</p>
      )}
    </div>
  );
};


export default NFTCollection;
