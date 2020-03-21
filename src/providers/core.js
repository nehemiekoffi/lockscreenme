import htmlToImage from 'html-to-image';

class Core{
    static AppUrl = "https://nehemiekoffi.github.io/lockscreenme"
    static defaultColor = "#8d199c"
    static PreviewScreenRatio = 0.7
    static PreviewHeight = 853
    static PreviewWidth = 480
    static SavetoJpeg(node, width, height){

        var htmlNode = document.getElementById(node);
        this.OptimizePicture(htmlNode, width, height)

        htmlToImage.toJpeg(document.getElementById(node), { quality: 1 })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = `lockscreen_${String(Date.now())}.jpeg`;
            link.href = dataUrl;
            link.click();

            Core.ResetPreviewNode(htmlNode)
            
        });

    }

    static OptimizePicture(node, width, height){
        node.style.width = width + 'px';
        node.style.height = height + 'px';
        document.getElementById('previewIndicator').style.visibility = 'hidden';
        document.getElementById('previewDateTime').style.visibility = 'hidden';
    }

    static ResetPreviewNode(node){
        node.style.width = Core.PreviewWidth * Core.PreviewScreenRatio + 'px';
        node.style.height = Core.PreviewHeight * Core.PreviewScreenRatio + 'px';
        document.getElementById('previewIndicator').style.visibility = 'visible';
        document.getElementById('previewDateTime').style.visibility = 'visible';
    }


}



export default Core;