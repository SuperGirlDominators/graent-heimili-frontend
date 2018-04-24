import React, { Component } from 'react';

class ChecklistStep extends Component {
    constructor(props) {
        super(props);
        // this.dataURL = this.makeDataURL.bind(this);
    }

    arrayBufferToBase64(ab){
        var dView = new Uint8Array(ab);   //Get a byte view        
        var arr = Array.prototype.slice.call(dView); //Create a normal array        
        var arr1 = arr.map(function(item){        
          return String.fromCharCode(item);    //Convert
        });
        return window.btoa(arr1.join(''));   //Form a string 
    }

    makeDataURL = (checklist_step) => {
        if ( !checklist_step ) {
            return;
        }

        return "data:image/png;base64, " + this.arrayBufferToBase64( checklist_step.checklistImage.data );
        
        return;
        var arrayBufferView = new Uint8Array( checklist_step.checklistImage ).reduce((data, byte) => data + String.fromCharCode(byte), '');
        var imageUrl = btoa(String.fromCharCode(...arrayBufferView));
        return imageUrl;
    }

    componentWillReceiveProps(props) {
        this.dataURL = this.makeDataURL(props.checklist_step);
    }
    
    render() {
        const { totalSteps, checklist_step } = this.props;
        let { currentStep } = this.props;
        currentStep = currentStep + 1;

        return (
            <div className="col-md-4">
                <p className="checklist_step">
                    Skref {currentStep} af {totalSteps}
                </p>
                <h1 className="checklist_name">
                    { checklist_step && checklist_step.checklistName }
                </h1>
                <p className="checklist_info">
                    { checklist_step && checklist_step.checklistInfo }
                </p>
                <div className="photoChecklist">
                    <div className="side">
                        <img src={this.dataURL} alt="photo of a home"/>
                    </div> 
                    <div className="side back" id="backside">Hægt er að kaupa ýmiskonar stærðir af tunnum í <strong>IKEA </strong>og í <strong> Rúmfatalagernum</strong>.
                        IKEA er einnig með góðar lausnir fyrir flokkun í lítið rými eins og undir vaska eða í lítilli geymslu.
                    </div>
                </div>   
            </div>
        );
    }
}

export default ChecklistStep;
