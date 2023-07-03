import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../App.css';
import Web3 from 'web3';
import Slider from 'react-slick';
import CommuiTeesABI from '../contracts/CommuniTeesABI.json';
import RoyalTeesABI from '../contracts/RoyalTeesABI.json';
import LifeStyleABI from '../contracts/LifeStyleABI.json';
import fwardrobe from '../images/Fantom Wardrobe.png';
import hwardrobe from '../images/Hedera Wardrobe.png';

const Mytees2 = () => {
  const [connected, setConnected] = useState(false);
  const [nftCollections, setNftCollections] = useState([]);
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request access to the user's MetaMask wallet
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setConnected(true);
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      }
    } else {
      console.error('MetaMask extension not detected');
    }
  };

  const fetchNftCollections = async () => {
    const web3 = new Web3(window.ethereum);

    // Replace with the contract addresses and names of your NFT collections
    const collections = [
      { address: '0x633763D9174d6B772676920b2309b39eE3A92a8a', name: 'CommuniTees Collection' },
      { address: '0x903efDA32f6d85ae074c1948C8d6B54F2421949f', name: 'RoyalTees Collection' },
      { address: '0xe010Ab037418431EeB65D59aAFB5059c13e8FAc2', name: 'LifeStyle Collection' },
    ];

    const collectionAddresses = collections.map((collection) => collection.address);
    const collectionABIs = [CommuiTeesABI, RoyalTeesABI, LifeStyleABI];

    setLoading(true);

    try {
      const nfts = await fetchNfts(web3, collectionAddresses, collectionABIs);

      const updatedCollections = collections.map((collection) => ({
        ...collection,
        nfts: nfts.filter((nft) => nft.collectionAddress === collection.address),
      }));

      setNftCollections(updatedCollections);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchNfts = async (web3, collectionAddresses, collectionABIs) => {
    const nfts = [];

    for (let i = 0; i < collectionAddresses.length; i++) {
      const collectionAddress = collectionAddresses[i];
      const collectionABI = collectionABIs[i];

      const contract = new web3.eth.Contract(collectionABI, collectionAddress);

      const accounts = await web3.eth.getAccounts();
      const ownerAddress = accounts[0]; // Assuming the user is the first account

      const nftCount = await contract.methods.balanceOf(ownerAddress).call();

      const uniqueNFTs = [];

      for (let j = 0; j < nftCount; j++) {
        const nftId = await contract.methods.tokenOfOwnerByIndex(ownerAddress, j).call();
        const nftMetadataUri = await contract.methods.tokenURI(nftId).call();


        const nftMetadataResponse = await fetch(nftMetadataUri);
        const nftMetadata = await nftMetadataResponse.json();


        const nftInfo = {
          id: nftId,
          image: nftMetadata.image,
          name: nftMetadata.name,
          collectionAddress: collectionAddress,
        };

        uniqueNFTs.push(nftInfo);
      }

      nfts.push(...uniqueNFTs);

    }

    return nfts;
  };

  useEffect(() => {
    if (connected) {
      fetchNftCollections();
    }
  }, [connected]);

  const renderNfts = (nfts) => {
    return nfts.map((nft) => (
      <div key={nft.id}>
        <img src={nft.image} alt={nft.name} className="nft-image" />
        <p>{nft.name}</p>
      </div>
    ));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="AppPage">
        <div className="background-container"></div>
        <Navbar />
      </div>
      <br />
      <br />
      <div>
        <div className="wardrobe-container">
  {!connected && (
    <>
      <br />
      <br />
      <p className="wardrobe-text">Click on a Wardrobe to view the NFTs in your wallet</p>
      <br />
      <br />
      <div className="wardrobe-items">
        <div className="wardrobe-item">
          <img src={fwardrobe} alt="Fantom Wardrobe" className="connect-wallet-button" onClick={connectWallet} />
        </div>
        <div className="wardrobe-item">
          <img src={hwardrobe} alt="Hedera Wardrobe" className="connect-wallet-button" />
        </div>
      </div>
    </>
  )}
</div>

{connected && loading && <p className="collection-title">Loading...</p>}

    {connected && !loading && nftCollections.length > 0 ? (
          nftCollections.map((collection) => (
            <div key={collection.address}>
              <h3 className="collection-title">{collection.name}</h3>
              {collection.nfts.length > 0 && (
                <div className="nft-carousel-container">
                  {collection.nfts.length > 1 && (
                    <Slider
                      key={`slider-${collection.address}`}
                      dots={true}
                      infinite={false}
                      speed={500}
                      slidesToShow={4}
                      slidesToScroll={1}
                      responsive={[
                        {
                          breakpoint: 768,
                          settings: {
                            slidesToShow: 2,
                          },
                        },
                        {
                          breakpoint: 480,
                          settings: {
                            slidesToShow: 1,
                          },
                        },
                      ]}
                      className="nft-carousel"
                    >
                      {renderNfts(collection.nfts)}
                    </Slider>
                  )}
                  {collection.nfts.length === 1 && renderNfts(collection.nfts)}
                </div>
              )}
              {collection.nfts.length === 0 && <p className="no-nfts">No NFTs found for this collection</p>}
            </div>
          ))
        ) : (
          <p className="wardrobe-text"></p>
        )}
      </div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Mytees2;
