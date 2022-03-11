import React, { useEffect, userEffect, useState } from 'react'
import { ethers } from "ethers";

import { contractABI, contractAddress } from '../utils/constants';


export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = ( ) => {

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract( contractAddress, contractABI, signer );


    return transactionContract;

}

export const TransactionProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState("");

    const [ formData, setFormData ] = useState( {

        addressTo : "",
        amount : "" ,
        keyword : "",
        message : ""

    } );

    const [isLoading, setIsLoading] = useState(false);

    
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));

    const [transactions, setTransactions] = useState([]);

    const getAllTranasctions = async () => {

        try {
            
            if( !ethereum ) return alert( "Please install metamask" );

            const transactionContract = getEthereumContract();

            const availableTransactions = await transactionContract.getAllTransactions();

            const structuredTransactions = availableTransactions.map( (transaction) => ({

                addressTo: transaction.receiver,
                addressFrom : transaction.from,
                timestamp : new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message : transaction.message,
                keyword : transaction.keyword,
                amount : parseInt( transaction.amount._hex ) / ( 10 ** 18 )

            }));

            setTransactions(structuredTransactions);

            console.log(structuredTransactions);

        } catch (error) {

            console.log(error);
            
        }

    }

    const handleChange = (e, name) => {

        //console.log( e.target,name );

        //setFormData( (prevState) => ({ ...prevState, [name]: e.target.value }));

        formData[ name ] = e.target.value; 

        //console.log( formData );
    };

    const checkIfWalletIsConnected = async () => {

        try {

            if( !ethereum ) return alert( "PLS install metamask" );
    
            const accounts = await ethereum.request( {method : 'eth_requestAccounts'} );
    
            if( accounts.length ){
    
                setCurrentAccount( accounts[0] );
    
                getAllTranasctions();
    
            } else {
    
                console.log("No accounts Found");
    
            }
    
            console.log( accounts );
        
        } catch (error) {
            
            console.log( error );

            throw new Error( "No ethereum object" );

        }
    

    }

    const checkIfTransactionsExist = async () => {

        try {

            const transactionContract = getEthereumContract();

            const transactionCount = await transactionContract.getTransactionsCount();

            window.localStorage.setItem( "transactionCount" , transactionCount );
            
        } catch (error) {
            console.log( error );

            throw new Error( "No ethereum object" );
        }

    }

    const connectWallet = async () =>{

        try {
            if (!ethereum) return alert("Please install MetaMask.");

            const accounts = await ethereum.request({ method: "eth_requestAccounts", });

            setCurrentAccount(accounts[0]);
            window.location.reload();
        } catch (error) {

            console.log( error );

            throw new Error( "No ethereum object" );
            
        }

    }

    const sendTransaction = async () =>{

        try {

            if (!ethereum) return alert("Please install MetaMask.");

            const { addressTo,amount, keyword,message} = formData;

            const transactionContract = getEthereumContract();

            const parsedAmount = ethers.utils.parseEther( amount );

            await ethereum.request({

                method : 'eth_sendTransaction' , 
                params : [{
                    from : currentAccount, 
                    to: addressTo,
                    gas : '0x5208', //hex 2100 GWEI
                    value : parsedAmount._hex, // 0.0001
                }]

            });

            const transactionHash = await transactionContract.addToBlockchain( addressTo, parsedAmount,message,keyword );

            setIsLoading( true );

            console.log( `Loading - ${ transactionHash.hash }` );
            
            await transactionHash.wait();
            setIsLoading( false );
            console.log( `Succes - ${ transactionHash.hash }` );

           const transactionCount = await transactionContract.getTransactionsCount();

           setTransactionCount( transactionCount.toNumber() );

           window.reload();
            
        } catch (error) {
            
            console.log( error ); 

            throw new Error( "No ethereum object" );

        }

    }

    useEffect( () =>{

        checkIfWalletIsConnected();

        checkIfTransactionsExist();

    } , []);

    return(

        <TransactionContext.Provider value={{transactions,connectWallet, currentAccount, formData,setFormData,handleChange ,sendTransaction,isLoading}}>

            {children}

        </TransactionContext.Provider>

    )

};