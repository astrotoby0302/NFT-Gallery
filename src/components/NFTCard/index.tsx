import {
    Col,
    Form,
    Button,
} from 'react-bootstrap';
import './style.scss'
import { useContext } from 'react';
import DetailModal from '../DetailModal';
import { NFTGalleryContext } from '../../context/NFTGalleryContext';
import { ContextProps } from '../../utils/constants/interfaces';

const NFTCard = (props: any) => {
    const { data } = props;
    const { setModalShow, setSelectNFT } = useContext<ContextProps>(NFTGalleryContext);
    const handleModal = () => {
        setModalShow(true);
        setSelectNFT(data);
    }
    return (
        <Col lg="4" md="4" sm={6} xs={12} className='mt-5 px-4'>
            <div className='card'>
                <div className='text-center'>
                    <img src={data.imageUrl} alt='' width="240px" height="240px" />
                </div>
                <Form.Text className='nft-title'>{data.name}</Form.Text>
                <Button className='btn-detail mt-4' onClick={() => handleModal()}>See Detail</Button>
            </div>
            <DetailModal />
        </Col>
    )
}

export default NFTCard;