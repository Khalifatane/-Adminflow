import styled from "styled-components";
import { ChevronSmallDown, SunIcon } from "../Icons";

const Wrap = styled.div`
  position: fixed;
  top: 18px;
  right: 28px;
  width: 220px;
  z-index: 15;
`;

const Selector = styled.div`
  border: 1px solid #e2e3ef;
  background: #ffffff;
  border-radius: 12px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  box-shadow: 0 6px 16px rgba(18, 18, 32, 0.08);
`;

const SelectorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

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

const IconBadge = styled.div<{ tint: string }>`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: ${({ tint }) => tint};
  display: grid;
  place-items: center;
  color: ${({ tint }) => (tint === "#e9f7ef" ? "#22b573" : "#ff8a2a")};
`;

const Menu = styled.div`
  margin-top: 8px;
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 6px;
  box-shadow: 0 10px 24px rgba(18, 18, 32, 0.12);
`;

const Item = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px;
  border-radius: 10px;
  background: ${({ active }) => (active ? "#f1edff" : "transparent")};
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    font-size: 12px;
    font-weight: 600;
    color: #2a2a34;
  }

  span {
    display: block;
    font-size: 10px;
    color: #9a9aac;
    font-weight: 400;
  }
`;

const Check = styled.span`
  font-size: 12px;
  color: #6f4df2;
  font-weight: 700;
`;

const CreateButton = styled.button`
  margin-top: 8px;
  width: 100%;
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: 0 6px 16px rgba(111, 77, 242, 0.25);
`;

const Plus = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.6);
  display: grid;
  place-items: center;
`;

export function MarketDropdown() {
  return (
    <Wrap>
      <Selector>
        <SelectorInfo>
          <IconBadge tint="#fff3e8">
            <SunIcon />
          </IconBadge>
          <div>
            Market Name
            <span>Euclid Avenu,CA</span>
          </div>
        </SelectorInfo>
        <ChevronSmallDown />
      </Selector>

      <Menu>
        <Item>
          <ItemInfo>
            <IconBadge tint="#e9f7ef">
              <SunIcon />
            </IconBadge>
            <div>
              Select All Markets
              <span>2 markets total</span>
            </div>
          </ItemInfo>
        </Item>
        <Item active>
          <ItemInfo>
            <IconBadge tint="#fff3e8">
              <SunIcon />
            </IconBadge>
            <div>
              Market Name
              <span>Euclid Avenu,CA</span>
            </div>
          </ItemInfo>
          <Check>&check;</Check>
        </Item>
        <Item>
          <ItemInfo>
            <IconBadge tint="#e9f7ef">
              <SunIcon />
            </IconBadge>
            <div>
              Market Name
              <span>Euclid Avenu,CA</span>
            </div>
          </ItemInfo>
        </Item>
        <CreateButton type="button">
          <Plus>+</Plus> Create new Store
        </CreateButton>
      </Menu>
    </Wrap>
  );
}
