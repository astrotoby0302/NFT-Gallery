export interface ContextProps {
    modalShow: boolean | undefined,
    selectedNFT: NFTProps | undefined,
    setModalShow: (modalShow: boolean) => void | undefined,
    setSelectNFT: (selectedNFT: NFTProps) => void | undefined
}

export interface ModalProps {
    modalShow: boolean | undefined,
    setModalShow: (modalShow: boolean) => void | undefined
}

export interface NFTProps {
    blockchain: string | undefined,
    collectionName: string | undefined,
    contractAddress: string | undefined,
    contractType: string | undefined,
    imageUrl: string | undefined,
    name: string | undefined,
    symbol: string | undefined,
    tokenId: string | undefined,
    tokenUrl: string | undefined,
}