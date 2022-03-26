import ImageEditor from '@toast-ui/react-image-editor';
import 'tui-image-editor/dist/tui-image-editor.css';
const theme = {
    "common.bisize.width": "50px",
    "common.bisize.height": "50px",
    "common.backgroundColor": "#ccc",
    "common.border": "0px",
};

const ImageEDitor = ({picture}) => {
    return (  
        <ImageEditor
            includeUI={{
                loadImage: {
                    path: picture,
                    name: "CampaignImage",
                },
                theme,
                menu: ["shape", "filter", "text", 'mask', "icon", "draw", "crop", "flip", "rotate"],
                initMenu: "Loading image",
                uiSize:{
                    width: "70%",
                    height: "60vh",
                },
                menuBarPosition: "bottom",
            }}
            cssMaxHeight={400}
            cssMaxWidth={600}
            selectionStyle={{
                cornerSize: 20,
                rotatingPointOffset: 70,
            }}
            usageStatistics={true}
        />
    );
}
 
export default ImageEDitor;