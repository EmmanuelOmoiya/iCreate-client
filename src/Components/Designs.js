import uploadIcon from '../Assets/document-uploadupload.svg';
import comingSoon from '../Assets/coming-soon-logo.svg';

const Designs = () => {
    return (  
        <div className="designs">
            <h2 className="designs-title">Designs</h2>
            <div className="designs-main">
                <div className="designs-ginger">
                    <div className="designs-box"></div>
                    <div className="designs-box"></div>
                    <div className="designs-box">
                        <div className="designs-box-inf">
                            <div className="designs-inf-top">
                                <img src={uploadIcon} alt="" className='designs-upload-icon' />
                                <p className="uploadicon-tit">
                                    Upload Image
                                </p>
                            </div>
                            <p className="designs-box-note">
                                Maximum size of the image should be 10MB
                            </p>
                        </div>
                    </div>
                </div>
                <div className="designs-coming">
                    <img src={comingSoon} alt="" className='designs-coming-logo' />
                    <h3 className="designs-coming-prompt">Design Editor Coming Soon</h3>
                </div>
            </div>
        </div>
    );
}
 
export default Designs;