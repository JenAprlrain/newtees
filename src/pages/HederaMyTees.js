import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import '../App.css';
import Slider from 'react-slick';
import { Client, ContractId, ContractLogInfoQuery } from "@hashgraph/sdk";
import { HashConnect } from 'hashconnect';

const HederaMyTees = () => {
  const [connected, setConnected] = useState(false);
  const [nftCollections, setNftCollections] = useState([]);
  const [hashConnect, setHashConnect] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    const hashConnect = new HashConnect(true);
    setHashConnect(hashConnect);

    hashConnect.pairingEvent.once((pairingData) => {
      // Pairing completed, do something with pairing data
      setConnected(true);
      setWalletAddress(pairingData.accountIds[0]);
    });

    await hashConnect.init({
      name: 'MyTees2',
      description: 'NFT Viewer',
      icon: 'https://example.com/icon.png',
    }, 'mainnet', false);

    hashConnect.connectToLocalWallet();
  };

  const fetchNftCollections = async () => {
    const client = Client.forMainnet();

    const collections = [
      { contractId: "0.0.3001875", name: "Hedera Yacht Club Polo" },
      { contractId: "0.0.1463510", name: "Hedera Holiday Sweater" }
    ];

    try {
      const updatedCollections = await Promise.all(
        collections.map(async (collection) => {
          const contract = ContractId.fromString(collection.contractId);

          // Create a query to retrieve NFTs from the contract
          const query = new ContractLogInfoQuery()
            .setContractId(contract)
            .setTopics([`0x${walletAddress}`]) // Filter by wallet address
            .setStartTime(0);

          // Execute the query and retrieve the logs
          const logs = await query.execute(client);

          // Extract the NFTs from the logs
          const nfts = logs
            .flatMap((log) => log.getNonEmptyStringArray(1)) // Assumes the NFT data is stored in log index 1
            .map((nft) => JSON.parse(nft))
            .map((nft) => ({
              id: nft.id,
              image: nft.image,
              name: nft.name,
            }));

          return {
            ...collection,
            nfts,
          };
        })
      );

      setNftCollections(updatedCollections);
    } catch (error) {
      console.error('Error fetching NFT collections:', error);
    }
  };

  useEffect(() => {
    if (connected) {
      fetchNftCollections();
    }
  }, [connected, walletAddress]);

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
      <div>
        <br />
        <br />
        <br />
        <br />

        {!connected && (
          <button className="connect-wallet-button" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
        {connected && nftCollections.length > 0 ? (
          nftCollections.map((collection) => (
            <div key={collection.contractId}>
              <h3 className="collection-title">{collection.name}</h3>
              {collection.nfts.length > 0 && (
                <div className="nft-carousel-container">
                  {collection.nfts.length > 1 && (
                    <Slider
                      key={`slider-${collection.contractId}`}
                      {...sliderSettings}
                      className="nft-carousel"
                    >
                      {renderNfts(collection.nfts)}
                    </Slider>
                  )}
                  {collection.nfts.length === 1 && renderNfts(collection.nfts)}
                </div>
              )}
              {collection.nfts.length === 0 && (
                <p className="no-nfts">No NFTs found for this collection</p>
              )}
            </div>
          ))
        ) : (
          <p className="wardrobe-text">Click on a Wardrobe to view the NFTs in your wallet</p>
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

export default HederaMyTees;
