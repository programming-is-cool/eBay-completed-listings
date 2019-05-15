import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Modal from 'react-bootstrap/Modal'
import AppIDWindow from '../initial_window/app_id_window'
require('../../assets/css/bootstrap.min.css');

function ChangeAppID(props) {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
        setShowModal(true);
    }

    const handleModalClose = () => {
        setShowModal(false);
    }
    
    const appID = props.appID;
    const tempAppID = props.tempAppID;
    const appIDChange = props.appIDChange;
    const tempAppIDChange = props.tempAppIDChange;
    const dashHistory = props.dashHistory;

    return(
        <div>
            <Button variant="warning" onClick={ handleModalOpen }>Change API Key</Button>
            <Modal show={ showModal } onHide={ handleModalClose }>
                <Modal.Body>
                    <AppIDWindow 
                        appID={ appID } 
                        tempAppID={ tempAppID }
                        appIDChange={ appIDChange } 
                        tempAppIDChange={ tempAppIDChange }
                        dashHistory={ dashHistory }
                        closeModal={ handleModalClose }
                    />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ChangeAppID;