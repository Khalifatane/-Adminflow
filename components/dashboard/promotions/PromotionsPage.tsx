import styled from "styled-components";
import { useMemo, useState } from "react";
import {
  AlertIcon,
  ArrowLeft,
  CalendarMiniIcon,
  ChevronSmallDown,
  DownloadIcon,
  DotsIcon,
  PlusIcon,
  SearchIcon,
  SunIcon,
  TagIcon
} from "../../Icons";
import { StatCard } from "../StatCard";

const Wrapper = styled.section`
  display: grid;
  gap: 16px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
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

const TitleBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 18px;
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
  min-width: 180px;
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

const Card = styled.section`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
`;

const CardTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
`;

const UpdateBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #8c8c9a;
  background: #fff6d9;
  border: 1px solid #f5e7b1;
  padding: 4px 8px;
  border-radius: 999px;
`;

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const ChartHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

const ChartTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
`;

const ChartValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #1f1f28;
  margin-top: 6px;
`;

const Delta = styled.span`
  font-size: 11px;
  color: #1d9b5c;
  background: #e8f7ee;
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: 8px;
`;

const Subtle = styled.span`
  font-size: 11px;
  color: #9a9aac;
  margin-left: 6px;
`;

const ChartFilters = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const Pill = styled.button`
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

const Legend = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 11px;
  color: #8c8c9a;
  margin-left: auto;
`;

const LegendItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const LegendDot = styled.span<{ color: string }>`
  width: 10px;
  height: 4px;
  border-radius: 999px;
  background: ${({ color }) => color};
`;

const ChartWrap = styled.div`
  position: relative;
  height: 170px;
  margin-top: 10px;
  background: linear-gradient(#f1f2f7 1px, transparent 1px) 0 0 / 100% 30px;
`;

const HighlightLine = styled.div`
  position: absolute;
  top: 12px;
  bottom: 16px;
  left: 63%;
  width: 1px;
  background: repeating-linear-gradient(
    to bottom,
    #6f4df2,
    #6f4df2 4px,
    transparent 4px,
    transparent 8px
  );
`;

const HighlightDot = styled.div`
  position: absolute;
  top: 64px;
  left: calc(63% - 5px);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid #6f4df2;
`;

const Tooltip = styled.div`
  position: absolute;
  top: 44px;
  left: calc(63% - 36px);
  background: #1f1f28;
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 10px;
`;

const XLabels = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 10px;
  color: #a0a0b0;
  margin-top: 6px;
`;

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const Search = styled.label`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 200px;
  color: #9a9aac;

  input {
    border: none;
    outline: none;
    font-size: 12px;
    flex: 1;
    background: transparent;
  }
`;

const PrimaryButton = styled.button`
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 6px 16px rgba(111, 77, 242, 0.25);
`;

const GhostButton = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  color: #6f6f7e;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const TableWrap = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  overflow-x: auto;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 980px;
`;

const Th = styled.th`
  text-align: left;
  font-size: 11px;
  color: #8c8c9a;
  font-weight: 500;
  padding: 12px 14px;
  background: #fafbfe;
  border-bottom: 1px solid #ececf3;
`;

const Td = styled.td`
  font-size: 12px;
  color: #3a3a44;
  padding: 12px 14px;
  border-bottom: 1px solid #f0f1f5;
`;

const Check = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: 1px solid #d6d6e3;
  background: #ffffff;
`;

const Tag = styled.span<{ tone?: "active" | "scheduled" }>`
  font-size: 10px;
  border-radius: 999px;
  padding: 3px 8px;
  background: ${({ tone }) => (tone === "scheduled" ? "#fff3e0" : "#e8f7ee")};
  color: ${({ tone }) => (tone === "scheduled" ? "#f97316" : "#1d9b5c")};
`;

const TypePill = styled.span`
  font-size: 10px;
  border-radius: 999px;
  padding: 3px 8px;
  background: #f1f2f7;
  color: #6f6f7e;
`;

const Actions = styled.button`
  border: none;
const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 20, 30, 0.45);
  display: grid;
  place-items: center;
  z-index: 50;
`;
const MenuWrap = styled.div`
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  right: 0;
  top: 26px;
  width: 160px;
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 10px;
  box-shadow: 0 10px 18px rgba(18, 18, 32, 0.08);
  padding: 6px;
  display: grid;
  gap: 2px;
  z-index: 5;
`;

const MenuItem = styled.button<{ tone?: "danger" }>`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: ${({ tone }) => (tone === "danger" ? "#e05555" : "#4a4a58")};
  padding: 8px 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #f4f5fb;
  }
`;

const Modal = styled.div`
  width: 420px;
  max-width: 92vw;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid #f0f1f5;
`;

const ModalTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  color: #9a9aac;
  font-size: 16px;
  cursor: pointer;
`;

const ModalBody = styled.div`
  padding: 12px 16px 14px;
  max-height: 74vh;
  overflow: auto;
`;

const FormSection = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 12px;
  margin-bottom: 12px;
  background: #ffffff;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #3a3a44;
  margin-bottom: 2px;
`;

const SectionSub = styled.div`
  font-size: 11px;
  color: #9a9aac;
  margin-bottom: 10px;
`;

const Field = styled.label`
  display: grid;
  gap: 6px;
  font-size: 11px;
  color: #7c7c8c;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: 1px solid #ececf3;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 12px;
  color: #3a3a44;
  background: #ffffff;
`;

const TextArea = styled.textarea`
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 12px;
  color: #3a3a44;
  min-height: 90px;
  resize: none;
`;

const InlineRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const Select = styled.div`
  border: 1px solid #ececf3;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 12px;
  color: #9a9aac;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
`;

const AddMore = styled.button`
  border: 1px dashed #e2e3ef;
  background: #f7f8fc;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 11px;
  color: #6f6f7e;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  justify-content: center;
`;
const ChipRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  background: #f1f2f7;
  color: #5f5f6f;
  font-size: 11px;
`;

const ChipClose = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #dfe1ec;
  display: grid;
  place-items: center;
  font-size: 10px;
  color: #8c8c9a;
`;

const PriceRangeCard = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 10px;
  background: #ffffff;
  margin-bottom: 8px;
`;

const PriceRangeHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #3a3a44;
  font-weight: 600;
  margin-bottom: 8px;
`;

const AddInline = styled.button`
  border: none;
  background: transparent;
  color: #7a57f2;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const PriceTable = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  overflow: hidden;
  font-size: 11px;
  color: #8c8c9a;
`;

const PriceHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 10px;
  background: #fafbfe;
  border-bottom: 1px solid #ececf3;
  font-weight: 600;
`;

const PriceEmpty = styled.div`
  padding: 18px 10px;
  text-align: center;
  color: #9a9aac;
`;
const PriceRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 24px;
  gap: 8px;
  padding: 8px 10px;
  font-size: 11px;
  color: #3a3a44;
  border-top: 1px solid #ececf3;
`;

const OptionList = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff;
  margin-top: 10px;
`;

const OptionItem = styled.button`
  border: none;
  background: #ffffff;
  padding: 10px 12px;
  font-size: 11px;
  color: #4a4a58;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  border-bottom: 1px solid #f0f1f5;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;

const Refine = styled.span`
  font-size: 10px;
  color: #7a57f2;
  margin-left: auto;
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 12px 16px 14px;
  border-top: 1px solid #f0f1f5;
`;

const GhostWide = styled.button`
  border: 1px solid #ececf3;
  background: #f7f7fc;
  color: #6d6d7e;
  border-radius: 10px;
  height: 36px;
  font-size: 11px;
`;

const PrimaryWide = styled.button`
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  height: 36px;
  font-size: 11px;
`;
const MiniModal = styled.div`
  position: fixed;
  width: 300px;
  max-width: 90vw;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 16px 30px rgba(18, 18, 32, 0.18);
  left: calc(50% - 360px);
  top: 60%;
  transform: translateY(-50%);
  z-index: 60;
  overflow: hidden;

  @media (max-width: 1100px) {
    left: 8%;
  }

  @media (max-width: 720px) {
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const MiniHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-bottom: 1px solid #f0f1f5;
  font-size: 12px;
  font-weight: 600;
  color: #1f1f28;
`;

const MiniBody = styled.div`
  padding: 12px 14px 14px;
  display: grid;
  gap: 10px;
`;

const InfoBox = styled.div`
  background: #f5f6fb;
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 10px;
  color: #6f6f7e;
`;

const MiniRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
`;

const MiniField = styled.label`
  display: grid;
  gap: 6px;
  font-size: 10px;
  color: #7c7c8c;
`;

const MiniInput = styled.input`
  border: 1px solid #ececf3;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 11px;
  color: #3a3a44;
`;

const SliderWrap = styled.div`
  display: grid;
  gap: 6px;
  font-size: 10px;
  color: #7c7c8c;
`;

const SliderTrack = styled.div`
  height: 6px;
  border-radius: 999px;
  background: #ede7ff;
  position: relative;
`;

const SliderFill = styled.div`
  position: absolute;
  inset: 0 30% 0 0;
  background: #6f4df2;
  border-radius: 999px;
`;

const SliderThumb = styled.div`
  position: absolute;
  top: 50%;
  right: 30%;
  transform: translate(50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid #6f4df2;
`;

const SliderValue = styled.span`
  font-size: 10px;
  color: #ffffff;
  background: #1f1f28;
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: auto;
`;

const MiniButton = styled.button`
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  height: 34px;
  font-size: 11px;
`;
  background: transparent;
  color: #b3b3c2;
`;

export function PromotionsPage() {
  const [search, setSearch] = useState("");
  const promotions = [
    {
      id: "#29RKASJ",
      name: "Summer Tech Sale",
      type: "20% Discount",
      status: "active",
      items: "Laptops",
      date: "July 1 - July 15"
    },
    {
      id: "#29RKASJ",
      name: "Buy 1 Get 1 Free",
      type: "Buy X Get Y",
      status: "scheduled",
      items: "Phone Accessories",
      date: "May 5 - May 10"
    },
    {
      id: "#29RKASJ",
      name: "Flash Deal",
      type: "Fixed Amount Discount",
      status: "active",
      items: "Laptops",
      date: "July 1 - July 15"
    }
  ];

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return promotions;
    return promotions.filter((promo) =>
      [promo.id, promo.name, promo.type, promo.items].some((field) =>
        field.toLowerCase().includes(query)
      )
    );
  }, [search, promotions]);

  return (
    <Wrapper>
      <TopBar>
        <TopLeft>
          <BackButton type="button">
            <ArrowLeft />
          </BackButton>
          <TitleBlock>
            <h1>Promotions</h1>
            <p>Monitor active promotions across your stores. Boost visibility, apply discounts, and increase conversions.</p>
          </TitleBlock>
        </TopLeft>
        <TopRight>
          <IconButton type="button">
            <SearchIcon />
          </IconButton>
          <MarketSelect type="button">
            <MarketInfo>
              <MarketIcon>
                <SunIcon />
              </MarketIcon>
              <div>
                Store Name
                <span>Euclid Avenu,CA</span>
              </div>
            </MarketInfo>
            <ChevronSmallDown />
          </MarketSelect>
        </TopRight>
      </TopBar>

      <Card>
        <CardHeader>
          <CardTitle>Promotions Overview</CardTitle>
          <UpdateBadge>
            <AlertIcon /> Last Updated a minute ago
          </UpdateBadge>
        </CardHeader>
        <OverviewGrid>
          <StatCard
            title="Total Sales From Promotions"
            value="$34,200"
            delta="+12%"
            sub="Vs 400 last month"
            accent
            icon={<TagIcon />}
          />
          <StatCard
            title="Promo Code Uses"
            value="1,430"
            delta="+12%"
            sub="Vs 40% last month"
          />
          <StatCard
            title="Active Promotions"
            value="4 Active"
            delta="+12%"
            sub="Vs 400 last month"
          />
        </OverviewGrid>
      </Card>

      <Card>
        <ChartHeader>
          <div>
            <ChartTitle>Promotions vs Organic</ChartTitle>
            <ChartValue>
              +194,12%
              <Subtle>vs last Week</Subtle>
            </ChartValue>
          </div>
          <ChartFilters>
            <Pill>
              Last 7 days <ChevronSmallDown />
            </Pill>
            <Pill>
              <CalendarMiniIcon /> Oct 16 - Oct 22 2025
            </Pill>
          </ChartFilters>
        </ChartHeader>
        <Legend>
          <LegendItem>
            <LegendDot color="#6f4df2" />
            Promotion
          </LegendItem>
          <LegendItem>
            <LegendDot color="#cfd2e0" />
            Organic
          </LegendItem>
        </Legend>
        <ChartWrap>
          <svg width="100%" height="170" viewBox="0 0 700 170" preserveAspectRatio="none">
            <path
              d="M10 110 L60 90 L110 95 L160 70 L210 80 L260 95 L310 88 L360 112 L410 85 L460 70 L510 88 L560 96 L620 120 L690 102"
              fill="none"
              stroke="#6f4df2"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path
              d="M10 118 L60 105 L110 112 L160 86 L210 96 L260 108 L310 102 L360 122 L410 98 L460 86 L510 100 L560 108 L620 130 L690 112"
              fill="none"
              stroke="#cfd2e0"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
          <HighlightLine />
          <Tooltip>Oct 19 $48k</Tooltip>
          <HighlightDot />
        </ChartWrap>
        <XLabels>
          <span>Oct 16</span>
          <span>Oct 17</span>
          <span>Oct 18</span>
          <span>Oct 19</span>
          <span>Oct 20</span>
          <span>Oct 21</span>
          <span>Oct 22</span>
        </XLabels>
      </Card>

      <section>
        <CardTitle>Promotions List</CardTitle>
        <TableHeader>
          <Search>
            <SearchIcon />
            <input
              placeholder="Search..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </Search>
          <div style={{ display: "flex", gap: 8 }}>
            <GhostButton type="button">
              <DownloadIcon /> Export
            </GhostButton>
            <PrimaryButton type="button">
              <PlusIcon /> Create Promotion
            </PrimaryButton>
          </div>
        </TableHeader>
        <TableWrap>
          <Table>
            <thead>
              <tr>
                <Th />
                <Th>Promotion ID</Th>
                <Th>Promotion name</Th>
                <Th>Promotion Type</Th>
                <Th>Status</Th>
                <Th>Linked Items</Th>
                <Th>Start Date - End Date</Th>
                <Th />
              </tr>
            </thead>
            <tbody>
              {filtered.map((promo, index) => (
                <tr key={`${promo.id}-${index}`}>
                  <Td>
                    <Check />
                  </Td>
                  <Td>{promo.id}</Td>
                  <Td>{promo.name}</Td>
                  <Td>
                    <TypePill>{promo.type}</TypePill>
                  </Td>
                  <Td>
                    <Tag tone={promo.status as "active" | "scheduled"}>
                      {promo.status === "scheduled" ? "Scheduled" : "Active"}
                    </Tag>
                  </Td>
                  <Td>{promo.items}</Td>
                  <Td>{promo.date}</Td>
                                    <Td>
                    <MenuWrap>
                      <Actions aria-label="Row actions">
                        <DotsIcon />
                      </Actions>
                      <Menu>
                        <MenuItem type="button">Edit Promotion</MenuItem>
                        <MenuItem type="button">Duplicate Promotion</MenuItem>
                        <MenuItem type="button" tone="danger">Remove Promotion</MenuItem>
                      </Menu>
                    </MenuWrap>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableWrap>
      </section>\n\n    </Wrapper>
  );
}


