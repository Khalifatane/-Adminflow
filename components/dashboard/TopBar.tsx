import styled from "styled-components";
import {
  ArrowLeft,
  ChevronSmallDown,
  SearchIcon,
  SunIcon
} from "../Icons";

const Bar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
`;

const TitleWrap = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const BackButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e2e3ef;
  background: #ffffff;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const TitleBlock = styled.div`
  h1 {
    font-size: 18px;
    margin: 0;
    color: #1f1f28;
  }

  p {
    margin: 4px 0 0;
    font-size: 12px;
    color: #8c8c9a;
  }
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid #e2e3ef;
  background: #ffffff;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: #70708a;
`;

const MarketSelect = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #e2e3ef;
  background: #ffffff;
  padding: 8px 12px;
  border-radius: 12px;
  cursor: pointer;
  min-width: 190px;
  justify-content: space-between;
`;

const MarketInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;

  div {
    font-size: 12px;
    font-weight: 600;
    color: #2a2a34;
  }

  span {
    display: block;
    font-size: 11px;
    color: #9a9aac;
    font-weight: 400;
  }
`;

const MarketIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: #fff3e8;
  display: grid;
  place-items: center;
  color: #ff8a2a;
`;

export function TopBar() {
  return (
    <Bar>
      <TitleWrap>
        <BackButton type="button">
          <ArrowLeft />
        </BackButton>
        <TitleBlock>
          <h1>Products</h1>
          <p>All tech products across your stores - add new items, track inventory, and control visibility in just a few clicks.</p>
        </TitleBlock>
      </TitleWrap>
      <RightControls>
        <IconButton type="button">
          <SearchIcon />
        </IconButton>
        <MarketSelect type="button">
          <MarketInfo>
            <MarketIcon>
              <SunIcon />
            </MarketIcon>
            <div>
              Market Name
              <span>Euclid Avenu,CA</span>
            </div>
          </MarketInfo>
          <ChevronSmallDown />
        </MarketSelect>
      </RightControls>
    </Bar>
  );
}
