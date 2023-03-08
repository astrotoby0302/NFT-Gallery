import {
    Container,
    Row,
    Col,
    Form
} from 'react-bootstrap';
import './style.scss';
import NFTCard from '../NFTCard';
import { useEffect } from 'react';
import { getNfts } from '../../utils/helper';
import { useNfts } from '../../hook';
import { NFTProps } from '../../utils/constants/interfaces';

const Board = () => {
    const { nfts, loading, error } = useNfts('0xe4bBCbFf51e61D0D95FcC5016609aC8354B177C4');
    useEffect(() => {
        (async () => {
            const { nfts } = await getNfts('0xe4bBCbFf51e61D0D95FcC5016609aC8354B177C4'); //0xbc4ca0eda7647a8ab7c2061c23118a18a936f13d
            console.log(nfts);
        })();
    })
    return (
        <Container className='board'>
            <Row className='mt-5'>
                <Col lg="12" md="12" sm="12" xs="12" className='text-center'>
                    <Form.Text className='board-title'>NFT Viewer</Form.Text>
                </Col>
                {
                    nfts.map((item: NFTProps, index: number)=> {
                        return (
                            <NFTCard data={item} key={index} />
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Board;