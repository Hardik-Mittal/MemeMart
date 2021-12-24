import { Switch, Layout } from 'antd';
import React from 'react';
import '../../css/toggle.css';
const { Footer } = Layout;

class Toggle extends React.Component {

    constructor(props) {
        super(props);
    }

    changing = (checked) => {
        console.log(`switch to ${checked}`);
    }

    render() {
        return (

            <Footer style={{ textAlign: 'center', position: 'fixed', bottom: '0', right: '0', left: '0' }}>
                <div style={{ display: 'flex' }} className='row'>
                    <div className="col-5 flex-grow-1">Meme</div>
                    <Switch defaultChecked onChange={this.changing} className="col-2" style={{ 'max-width': '44px', textAlign: 'center' }} />
                    <div className="col-5 flex-grow-1">Template</div>
                </div>
            </Footer>

        );
    }
}

export default Toggle;