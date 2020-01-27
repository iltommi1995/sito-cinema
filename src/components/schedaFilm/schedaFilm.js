import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Col} from 'reactstrap';
import "../../css/components/schedaFilm/schedaFilm.css";

const ModalExample = (props) => {
    const {
        buttonLabel,
        className,
        nomeFilm,
        regista,
        durata,
        genere,
        cast,
        sinossi,
        immagine
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const externalCloseBtn = <button className="close btn-sdv" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
    return (
        <div>
            <Button className="btn-sdv" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
                <ModalHeader className="bg-modal" style={{"borderBottomColor":"#983232"}}>
                    <h2 className="titolo-film-scheda-film">{nomeFilm}</h2>
                </ModalHeader>
                <ModalBody className="bg-modal">
                    <div style={{height: '250px'}}>
                        <img src={immagine} alt="immagine locandina" className="img-scheda-film"></img>
                        <div style={{float: 'right', width: '250px'}} className="testo-modal">
                            <br/>
                            <p><b>Regia:</b> {regista}</p>
                            <p><b>Genere:</b> {genere}</p>
                            <p><b>Durata:</b> {durata}</p>
                            <p><b>Cast:</b> {cast}</p>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <p>{sinossi}</p>
                </ModalBody>
                <ModalFooter className="bg-modal" style={{"borderTopColor":"#983232"}}>
                    <Button className="btn-sdv" onClick={toggle}>Chiudi</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;