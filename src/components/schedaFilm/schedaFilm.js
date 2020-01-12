
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

    const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;
    return (
        <div>
            <Button id="bottoneApriSchedaFilm" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn} id="bellazio">
                <ModalHeader className="headerModal" style={{"borderBottomColor":"#983232"}}>
                    <h2 className="acca2 titoloFilmSchedaFilm">{nomeFilm}</h2>
                </ModalHeader>
                <ModalBody className="bodyModal">
                    <div style={{height: '250px'}}>
                        <img src={immagine} alt="immagine locandina" className="imgSchedaFilm"></img>
                        <div style={{float: 'right', width: '300px'}}>
                            <br/>
                            <p><b>Regia:</b> {regista}</p>
                            <p><b>Genere:</b> {genere}</p>
                            <p><b>Durata:</b> {durata}</p>
                            <p><b>Cast:</b> {cast}</p>
                        </div>
                    </div>
                    <br/>
                    <p>{sinossi}</p>
                </ModalBody>
                <ModalFooter className="footerModal" style={{"borderTopColor":"#983232"}}>
                    <Button id="bottoneSchedaFilm" onClick={toggle}>Chiudi</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;