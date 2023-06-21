import styled from "styled-components"
import FlowerDownload from "../../assets/flower-download.png"
import FlowerShare from "../../assets/flower-share.png"

export function ShowFlower() {

    function dowloadFlower(){

    }

    function shareFlower(){

    }
    
    return (
        <Container>
            <img className = "download-box" src={FlowerDownload} alt="flower-download" />
            <div className = "show-flower">

            </div>
            <div className="share-box">
                <img src={FlowerShare} alt="flower-share" />
                <div>Share to garden</div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background: #ffffff;

    .download-box{
        position: absolute;
        top: 10px;
        right: 10px;
        width: 80px;
    }

    .show-flower{

    }

    .share-box{
        width: 100vw;
        text-align: center;
        position: fixed;
        bottom: 30px;
        font-size: 1rem;
        img{
            width: 80px;
        }
    }
`;