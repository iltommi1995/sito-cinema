/*
* Author    :   Tomàs Avila - Allan Nava
* Modified  :   Tomàs Avila - Allan Nava  
* Created   :   07/01/2020
* Updated   :   07/01/2020
*/
/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
//
import React, { useState } from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Col} from 'reactstrap';
//
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
            <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className} external={externalCloseBtn}>
                <ModalHeader >Scheda del film</ModalHeader>
                <ModalBody>
                    <div style={{height: '250px'}}>
                        <img src={immagine} style={{width: '150px', float: 'left'}}></img>
                        <div style={{float: 'right', width: '300px'}}>
                            <b>{nomeFilm}</b><br /> <br/>
                            <p><b>Regia:</b> {regista}</p>
                            <p><b>Genere:</b> {genere}</p>
                            <p><b>Durata:</b> {durata}</p>
                            <p><b>Cast:</b> {cast}</p>
                        </div>
                    </div>
                    <br/>
                    <p>{sinossi}</p>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Chiudi</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalExample;