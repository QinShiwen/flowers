import styled, { keyframes } from "styled-components";
import { useFlowerContext } from "../../context/useFlowerContext";
import { useRef, useEffect, useState } from "react";
import HKMap from "../../assets/map.gif";
import shining from "../../assets/shining.png";

export function Garden() {
  const { tran } = useFlowerContext();
  const gifRef = useRef(null);
  const mapRef = useRef(null);
  const [showShining, setShowShining] = useState(false);

  function pauseGif() {
    console.log("pauseGif");
    gifRef.current.style.visibility = "hidden"; // 隐藏 GIF 元素
    gifRef.current.style.animationPlayState = "paused"; // 暂停动画
  }

  useEffect(() => {
    setTimeout(() => {
      pauseGif();
      setShowShining(true);
    }, 7880);
  }, []);

  useEffect(() => {
    if (showShining) {
      const mapWidth = mapRef.current.offsetWidth;
      const mapHeight = mapRef.current.offsetHeight;
      const randomX = Math.floor(Math.random() * (mapWidth - 100)); // 在图片宽度范围内生成随机X坐标
      const randomY = Math.floor(Math.random() * (mapHeight - 100)); // 在图片高度范围内生成随机Y坐标
      mapRef.current.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
  }, [showShining]);

  return (
    <Container className="animate__animated animate__slideInLeft">
      <img className="trans" src={tran} alt="flower" loop="0" ref={gifRef} />
      <img className="map" src={HKMap} alt="map" />
      <img
        className={showShining ? "shining-t" : "shining-f"}
        ref={mapRef}
        src={shining}
        alt="shining"
      />
    </Container>
  );
}


// const moveAnimation = keyframes`
// 0% {
//   transform: translate(0, 0);
// }
// 100%{
//   transform: translate(${x}px, ${y}px);
// } 
// `;

const shiningAnimation = keyframes`
0% {
  opacity: 0;
}
30% {
  opacity: 1;
}
60% {
  opacity: 0;
}
100%{
  opacity: 1;
}
`;

const scaleAnimation = keyframes`
0% {
  transform: scale(1);
}
100%{
  transform: scale(0.2);
}
`;

const Container = styled.div`
  position: absolute;
  z-index: 200;
  width: 100vw;
  height: 100vh;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .trans {
    width: 100vw;
    height: 100vh;
    position: absolute;
  }

  .map {
    width: 100vw;
  }

  .shining-f {
    display: none;
  }

  .shining-t {
    position: absolute;
    z-index: 300;
    width: 300px;
    animation: ${scaleAnimation} 3s 1 forwards, ${shiningAnimation} 3s 1 forwards;
  }
`;