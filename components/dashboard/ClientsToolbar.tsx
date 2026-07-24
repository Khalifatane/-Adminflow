import styled from "styled-components";
import { DownloadIcon, FilterIcon, PlusIcon, SearchIcon, ChevronSmallDown } from "../Icons";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 0 8px;
`;

const TitleBlock = styled.div`
  h3 {
    margin: 0 0 4px;
    font-size: 14px;
    color: #1f1f28;
  }

  p {
    margin: 0;
    font-size: 11px;
    color: #9a9aac;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const GhostButton = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  color: #6d6d7e;
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const PrimaryButton = styled.button`
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 6px 16px rgba(111, 77, 242, 0.25);
`;

const Tabs = styled.div`
  display: inline-flex;
  gap: 6px;
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 4px;
  background: #ffffff;
`;

const Tab = styled.button<{ active?: boolean }>`
  border: none;
  background: ${({ active }) => (active ? "#f1edff" : "transparent")};
  color: ${({ active }) => (active ? "#6f4df2" : "#7d7d8c")};
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 11px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 10px 0 8px;
`;

const Search = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  min-width: 200px;
  color: #a0a0b0;

  input {
    border: none;
    outline: none;
    font-size: 12px;
    flex: 1;
  }
`;

const RightControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SmallButton = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 11px;
  color: #6f6f7e;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export function ClientsToolbar() {
  return (
    <>
      <Wrap>
        <TitleBlock>
          <h3>Clients list</h3>
          <p>View all your clients information.</p>
        </TitleBlock>
        <Actions>
          <GhostButton type="button">
            <DownloadIcon /> Export
          </GhostButton>
          <PrimaryButton type="button">
            <PlusIcon /> Add new Client
          </PrimaryButton>
        </Actions>
      </Wrap>

      <Controls>
        <Tabs>
          <Tab active>All</Tab>
          <Tab>Basic</Tab>
          <Tab>Premium</Tab>
        </Tabs>
        <RightControls>
          <Search>
            <SearchIcon />
            <input placeholder="Search..." />
          </Search>
          <SmallButton>
            <FilterIcon /> Filter
          </SmallButton>
          <SmallButton>
            Sort by <ChevronSmallDown />
          </SmallButton>
        </RightControls>
      </Controls>
    </>
  );
}
