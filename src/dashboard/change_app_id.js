import React from 'react'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Modal from 'react-bootstrap/Modal'
import AppIDWindow from '../initial_window/app_id_window'
require('../../assets/css/bootstrap.min.css');

class ChangeAppID extends React.Component {
    constructor(props) {
        super(props);
        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.state = {
            showModal: false
        };
    }

    handleModalOpen() {
        this.setState({
            showModal: true
        });
    }

    handleModalClose() {
        this.setState({
            showModal: false
        });
    }
    
    render() {
        return(
            <div>
                <Button variant="warning" onClick={ this.handleModalOpen }>Change API Key</Button>
                <Modal show={ this.state.showModal } onHide={ this.handleModalClose }>
                    <Modal.Body>
                        <AppIDWindow 
                            appID={ this.props.appID } 
                            appIDChange={ this.props.appIDChange } 
                            appIDVerify={ this.props.appIDVerify }
                            closeModal={ this.handleModalClose }
                            history={ this.props.history }
                        />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default ChangeAppID;