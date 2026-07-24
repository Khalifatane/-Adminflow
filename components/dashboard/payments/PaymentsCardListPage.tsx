import styled from "styled-components";
import { ArrowLeft, ChevronSmallDown, FilterIcon, PlusIcon, SearchIcon, SunIcon } from "../../Icons";
import { SupplierPage } from "../supplier/SupplierPage";

const Wrapper = styled.section`
  display: grid;
  gap: 16px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const TopLeft = styled.div`
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

const TopTitle = styled.div`
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

const TopRight = styled.div`
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

const Section = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
`;

const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
`;

const AddButton = styled.button`
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Tabs = styled.div`
  display: inline-flex;
  background: #f7f8fc;
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 4px;
  gap: 6px;
`;

const Tab = styled.button<{ active?: boolean }>`
  border: none;
  background: ${({ active }) => (active ? "#ffffff" : "transparent")};
  color: ${({ active }) => (active ? "#3a3a44" : "#8c8c9a")};
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 8px;
  box-shadow: ${({ active }) => (active ? "0 3px 8px rgba(18,18,32,0.08)" : "none")};
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Search = styled.label`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 180px;
  color: #9a9aac;

  input {
    border: none;
    outline: none;
    font-size: 12px;
    flex: 1;
    background: transparent;
  }
`;

const GhostButton = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  color: #5a5a6b;
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 12px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 12px;
  display: grid;
  gap: 8px;
`;

const CardHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #3a3a44;
`;

const BrandLogo = styled.div<{ tone?: "green" | "blue" | "orange" }>`
  width: 34px;
  height: 24px;
  border-radius: 6px;
  background: ${({ tone }) => (tone === "green" ? "#b1f26d" : tone === "blue" ? "#e6efff" : "#ffe7d6")};
  color: ${({ tone }) => (tone === "green" ? "#1a1a1a" : tone === "blue" ? "#1d4ed8" : "#f97316")};
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 12px;
`;

const DetailsButton = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  color: #6f6f7e;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 10px;
`;

const Amount = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #1f1f28;
`;

const Meta = styled.div`
  display: grid;
  gap: 4px;
  font-size: 11px;
  color: #8c8c9a;

  strong {
    color: #3a3a44;
  }
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #8c8c9a;
  margin-top: 12px;
`;

const PageSpacer = styled.span`
  margin-left: auto;
`;

const PageButton = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 11px;
  color: #6f6f7e;
`;

const BarSection = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const BarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const Bars = styled.div`
  display: grid;
  gap: 10px;
  font-size: 11px;
  color: #8c8c9a;
`;

const BarRow = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 10px;
  align-items: center;
`;

const Bar = styled.div`
  height: 6px;
  background: #eef0f6;
  border-radius: 999px;
  position: relative;
`;

const BarFill = styled.span<{ color: string; width: string }>`
  display: block;
  height: 100%;
  width: ${({ width }) => width};
  background: ${({ color }) => color};
  border-radius: 999px;
`;

const Tooltip = styled.div`
  position: absolute;
  right: 20%;
  top: -28px;
  background: #1f1f28;
  color: #ffffff;
  font-size: 10px;
  padding: 4px 6px;
  border-radius: 6px;
`;

export function PaymentsCardListPage() {
  return <SupplierPage />;
}
