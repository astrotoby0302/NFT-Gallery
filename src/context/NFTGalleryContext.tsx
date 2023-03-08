import { useState, createContext } from "react";
import { ContextProps, NFTProps } from "../utils/constants/interfaces";

export const NFTGalleryContext = createContext<ContextProps>({
    modalShow: false,
    selectedNFT: {
        blockchain: '',
        collectionName: '',
        contractAddress: '',
        contractType: '',
        imageUrl: '',
        name: '',
        symbol: '',
        tokenId: '',
        tokenUrl: ''
    },
    setModalShow: () => {},
    setSelectNFT: () => {},
});

export const NFTGalleryContextProvider = (props: any) => {
    const [ modalShow, setModalShow ] = useState<boolean>(false);
    const [ selectedNFT, setSelectNFT ] = useState<NFTProps>();

    return (
        <NFTGalleryContext.Provider value={{ modalShow, selectedNFT, setModalShow, setSelectNFT }}>
            {props.children}
        </NFTGalleryContext.Provider>
    )
}