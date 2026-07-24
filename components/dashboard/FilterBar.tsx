import styled from "styled-components";
import { CalendarIcon, ChevronSmallDown, FilterIcon, PlusIcon, SearchIcon } from "../Icons";

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  margin: 16px 0;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const Pill = styled.button<{ active?: boolean }>`
  border: 1px solid ${({ active }) => (active ? "#d8d8f5" : "#ececf3")};
  background: ${({ active }) => (active ? "#f2edff" : "#ffffff")};
  color: ${({ active }) => (active ? "#6f4df2" : "#7a7a88")};
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const SearchField = styled.div`
  display: flex;
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
    color: #3a3a44;
  }
`;

const FilterButton = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 11px;
  color: #6f6f7e;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const AddButton = styled.button`
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(111, 77, 242, 0.25);
`;

export function FilterBar() {
  return (
    <Bar>
      <Left>
        <Pill active>Today</Pill>
        <Pill>
          Last 7 days <ChevronSmallDown />
        </Pill>
        <Pill>
          <CalendarIcon /> Aug 04 - Aug 11 2023
        </Pill>
      </Left>
      <Right>
        <SearchField>
          <SearchIcon />
          <input placeholder="Search..." />
        </SearchField>
        <FilterButton>
          <FilterIcon /> Filter
        </FilterButton>
        <AddButton>
          <PlusIcon /> Add new category
        </AddButton>
      </Right>
    </Bar>
  );
}
