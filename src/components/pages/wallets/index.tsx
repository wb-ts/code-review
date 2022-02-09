import * as React from 'react';
import './index.scss';

import Modal from '../../shared/Modal';
import Loader from '../../shared/Loader';

type WalletType = {
    id: string,
    currency: string,
    hold: string,
    pending_balance: string,
    balance: string,
    name: string,
    type: string,
    deposit: boolean,
    payout: boolean,
    imgURL: string
}

const Wallets = () => {
    const [modalStatus , setModalStatus] = React.useState<boolean>(false);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [wallets , setWallets] = React.useState<WalletType []>([]);

    const getWallets = async () => {
        await fetch("http://localhost:3090/accounts")
        .then(
            res => res.json()
        )
        .then(
            result => setWallets(result)
        )
        .catch(

        );
    }

    React.useEffect(() => {
        const getWalletsInfo = async() => {
            setIsLoading(true);
            await getWallets();
            setIsLoading(false);
        }
        getWalletsInfo();
    }, [])

    return <>
        <div className='header'>
            <h2>Wallets</h2>
            {!isLoading ? <span onClick={()=>setModalStatus(true)}>+ Add new wallet</span> : ""}
        </div>
        <div className='content'>
            {
                isLoading ? 
                <div className='loader'>
                    <Loader
                        size={54}
                        width={6}
                    /> 
                </div>
                : ""
            }
            {wallets.length ? wallets.map((wallet,item)=>{
                return <div 
                    key={item} 
                    className='card'
                    >
                        <div className='token-type'>
                            <img src={wallet.imgURL} alt="Error!" />
                            <p className='name'>{wallet.name}</p>
                        </div>
                        <div className='balance'>
                            {
                                wallet.currency === "NGN" ? 
                                    <p>₦ { wallet.balance }</p>
                                    :
                                    <p> { wallet.balance } { wallet.currency } </p>
                            }
                        </div>
                </div>
            }) : "" }
        </div>
        <Modal isOpen={modalStatus} >
            <div className='modal'>
                <div className='header'>
                    <h3>Add new Wallet</h3>
                    <button onClick={() => setModalStatus(false) }>&times;</button>
                </div>
                <p>The crypto wallet will be created instantly and be available in your list of wallets.</p>

            </div>
        </Modal>
    </>
}

export default Wallets;



