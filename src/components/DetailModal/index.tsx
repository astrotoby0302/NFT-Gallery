import { useContext } from 'react';
import {
    Modal,
    Button,
    Form,
    OverlayTrigger,
    Tooltip
} from 'react-bootstrap';
import { NFTGalleryContext } from '../../context/NFTGalleryContext';
import { ContextProps } from '../../utils/constants/interfaces';
import './style.scss';


const DetailModal = () => {
    const { modalShow, selectedNFT, setModalShow } = useContext<ContextProps>(NFTGalleryContext);
    const handleClose = () => {
        setModalShow(false);
    }
    const handleBuyNFT = () => {
        window.open(`https://opensea.io/assets/ethereum/${selectedNFT?.contractAddress}/${selectedNFT?.tokenId}`,'_blank');
        setModalShow(false);
    }

    return (
        <Modal show={modalShow} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header>
                <Modal.Title className='d-flex justify-content-between align-items-center w-100'>
                    <Form.Text className='nft-title'>{selectedNFT?.name}</Form.Text>
                    {
                        selectedNFT?.blockchain === "eth" ? 
                         <img src="https://alturanft.com/_next/image?url=%2Fchains%2Fethereum.svg&w=48&q=75" alt='' width="30" /> :
                        ''
                    }
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={selectedNFT?.imageUrl} alt='' width="100%" height="400px" />
                <Form.Text className='nft-desc mt-4'>{selectedNFT?.collectionName}</Form.Text>
                <Form.Text className='nft-owner mt-3 d-flex align-items-center gap-4'>Owner: 
                    <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-top`}>
                                {selectedNFT?.contractAddress}
                            </Tooltip>
                        }
                    >
                        <Form.Text style={{cursor: 'pointer'}}>{selectedNFT?.contractAddress?.replace(/(.{6}).*(.{6})/, "$1.....$2")}</Form.Text>
                    </OverlayTrigger>
                </Form.Text>
            </Modal.Body>
            <Modal.Footer>
                <Button className='btn-buy' onClick={handleBuyNFT}>
                    Buy NFT
                </Button>
                <Button variant='secondary' onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DetailModal;