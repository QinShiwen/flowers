import styled from "styled-components";
import HKMap from "../../assets/map.gif";
export function BrowserPage() {
  return (
    <Container>
      <img className="map" src={HKMap} alt="map" />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .map {
    height: 100vh;
  }
`;
