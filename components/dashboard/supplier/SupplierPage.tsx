import styled from "styled-components";
import {
  AlertIcon,
  ArrowLeft,
  ChevronSmallDown,
  DownloadIcon,
  FilterIcon,
  PlusIcon,
  SearchIcon,
  SunIcon,
} from "../../Icons";
import { StatCard } from "../StatCard";
import { SupplierDetailsModal } from "./SupplierDetailsModal";
import { AddSupplyModal } from "./AddSupplyModal";
import { BoxIcon, UsersIcon, TagIcon } from "../../Icons";

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

const OverviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  h3 {
    margin: 0 0 4px;
    font-size: 14px;
    color: #1f1f28;
  }

  p {
    margin: 0;
    font-size: 11px;
    color: #8c8c9a;
  }
`;

const UpdatedBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #9a8b52;
  background: #fff7e5;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid #f2e7c7;
`;

const UpdatedIcon = styled.span`
  color: #d2a84c;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 12px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const CardTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #1f1f28;
`;

const RevenueHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SupplyMeta = styled.div`
  font-size: 11px;
  color: #8c8c9a;
`;

const SupplyLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 10px;
  color: #8c8c9a;
`;

const Delta = styled.span`
  font-size: 10px;
  background: #e7f8ee;
  color: #1d9b5c;
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: 8px;
`;

const LineLegend = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 10px;
  color: #8c8c9a;
`;

const BarChart = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 8px;
  align-items: end;
  height: 140px;
  margin-top: 10px;
`;

const Bar = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  border-radius: 10px;
  background: #e8e1ff;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60%;
    border-radius: 10px;
    background: #6f4df2;
  }
`;

const MapCard = styled.div`
  height: 200px;
  border-radius: 12px;
  border: 1px solid #ececf3;
  background: radial-gradient(circle at 20% 20%, #e8ecf7, #f7f8fb);
  position: relative;
  overflow: hidden;
`;

const TableCard = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  padding: 12px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const TableHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
`;

const TableHeaderMeta = styled.div`
  font-size: 11px;
  color: #8c8c9a;
  margin: 4px 0 0;
`;

const TableHeaderActions = styled.div`
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

const ExportButton = styled.button`
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

const PrimaryButton = styled.button`
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  font-size: 11px;
  color: #8c8c9a;
  font-weight: 500;
  padding: 10px 8px;
`;

const ThSort = styled.span`
  margin-left: 6px;
  color: #b3b3c2;
  font-size: 10px;
`;

const Td = styled.td`
  font-size: 11px;
  color: #3a3a44;
  padding: 10px 8px;
  border-top: 1px solid #f0f1f5;
`;

const RowCheck = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: 1px solid #d6d6e3;
  background: #ffffff;
`;

const Status = styled.span<{ tone?: "progress" | "complete" | "failed" }>`
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 8px;
  background: ${({ tone }) =>
    tone === "complete"
      ? "#e7f8ee"
      : tone === "failed"
        ? "#ffe7ec"
        : "#fff3e0"};
  color: ${({ tone }) =>
    tone === "complete"
      ? "#1d9b5c"
      : tone === "failed"
        ? "#e05555"
        : "#ff9f43"};
`;

const MenuWrap = styled.div`
  position: relative;
`;

const MenuButton = styled.button`
  border: none;
  background: transparent;
  color: #b3b3c2;
  font-size: 16px;
`;

const Menu = styled.div`
  position: absolute;
  right: 0;
  top: 18px;
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

const MenuItem = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #4a4a58;
  padding: 6px 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #f4f5fb;
  }
`;

const FilterPopover = styled.div`
  position: absolute;
  right: 20px;
  top: 540px;
  width: 220px;
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(18, 18, 32, 0.12);
  padding: 12px;
  display: grid;
  gap: 8px;
  z-index: 12;
`;

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #3a3a44;
  font-weight: 600;
`;

const FilterField = styled.div`
  display: grid;
  gap: 6px;
  font-size: 11px;
  color: #7c7c8c;
`;

const FilterInput = styled.div`
  border: 1px solid #ececf3;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 11px;
  color: #9a9aac;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Range = styled.div`
  height: 4px;
  background: #eef0f6;
  border-radius: 999px;
  position: relative;
  margin: 6px 0 4px;
`;

const RangeFill = styled.div`
  width: 70%;
  height: 100%;
  background: #6f4df2;
  border-radius: 999px;
`;

const RangeThumb = styled.div`
  position: absolute;
  right: 20%;
  top: -4px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #6f4df2;
`;

const RangeValues = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
`;

const RangeInput = styled.div`
  border: 1px solid #ececf3;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 11px;
  color: #4a4a58;
  text-align: center;
`;

const FilterFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 4px;
`;

const FilterButton = styled.button<{ primary?: boolean }>`
  border: 1px solid #ececf3;
  background: ${({ primary }) => (primary ? "#6f4df2" : "#f7f8fc")};
  color: ${({ primary }) => (primary ? "#ffffff" : "#6d6d7e")};
  border-radius: 8px;
  height: 30px;
  font-size: 11px;
`;

const ContactCell = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd1d1, #ffc48a);
`;

const ContactInfo = styled.div`
  font-size: 11px;
  color: #3a3a44;

  span {
    display: block;
    font-size: 10px;
    color: #9a9aac;
  }
`;

export function SupplierPage() {
  return (
    <Wrapper>
      <TopBar>
        <TopLeft>
          <BackButton type="button">
            <ArrowLeft />
          </BackButton>
          <TopTitle>
            <h1>Supplier</h1>
            <p>
              Manage all product categories and their nested subcategories from
              one place.
            </p>
          </TopTitle>
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
                Market Name
                <span>Euclid Avenu,CA</span>
              </div>
            </MarketInfo>
            <ChevronSmallDown />
          </MarketSelect>
        </TopRight>
      </TopBar>

      <OverviewHeader>
        <div>
          <h3>Products Overview</h3>
          <p>Break down lengthy texts into concise summaries to grasp.</p>
        </div>
        <UpdatedBadge>
          <UpdatedIcon>
            <AlertIcon />
          </UpdatedIcon>
          Last Updated a minute ago
        </UpdatedBadge>
      </OverviewHeader>

      <StatsGrid>
        <StatCard
          accent
          title="Products Supplied"
          value="22,020"
          delta="+12%"
          sub="Vs 400 last month"
          icon={<BoxIcon />}
        />
        <StatCard
          title="Total Active Suppliest"
          value="2,200"
          delta="+12%"
          sub="Vs 40% last month"
          icon={<UsersIcon />}
        />
        <StatCard
          title="Out-of-Stock Items"
          value="61"
          delta="+12%"
          sub="Vs 40% last month"
          icon={<TagIcon />}
        />
      </StatsGrid>

      <ChartGrid>
        <Card>
          <RevenueHeader>
            <div>
              <CardTitle>Supply Volume</CardTitle>
              <SupplyMeta>
                4,127 supply <Delta>+12%</Delta> vs last Week
              </SupplyMeta>
            </div>
            <SupplyLegend>
              <span>Last 7 days</span>
              <span>Oct 16 - Oct 22 2025</span>
            </SupplyLegend>
          </RevenueHeader>
          <BarChart>
            {["80%", "90%", "55%", "85%", "35%", "35%", "40%", "50%"].map(
              (height, index) => (
                <Bar key={index} height={height} />
              ),
            )}
          </BarChart>
          <LineLegend
            style={{ justifyContent: "space-between", marginTop: 10 }}
          >
            <span>Oct 16</span>
            <span>Oct 17</span>
            <span>Oct 18</span>
            <span>Oct 19</span>
            <span>Oct 20</span>
            <span>Oct 21</span>
            <span>Oct 22</span>
          </LineLegend>
        </Card>

        <Card>
          <RevenueHeader>
            <CardTitle>Distribution</CardTitle>
            <GhostButton>
              Last Month <ChevronSmallDown />
            </GhostButton>
          </RevenueHeader>
          <MapCard />
        </Card>
      </ChartGrid>

      <TableCard>
        <TableHeader>
          <div>
            <CardTitle>Suppliers List</CardTitle>
            <TableHeaderMeta>
              View all your clients information.
            </TableHeaderMeta>
          </div>
          <TableHeaderActions>
            <Search>
              <SearchIcon />
              <input placeholder="Search..." />
            </Search>
            <ExportButton>
              <DownloadIcon /> Export
            </ExportButton>
            <GhostButton>
              <FilterIcon /> Filter
            </GhostButton>
            <PrimaryButton>
              <PlusIcon /> Add new supplier
            </PrimaryButton>
          </TableHeaderActions>
        </TableHeader>
        <Table>
          <thead>
            <tr>
              <Th />
              <Th>
                Supplier ID <ThSort>^</ThSort>
              </Th>
              <Th>
                Contact Person <ThSort>^</ThSort>
              </Th>
              <Th>
                Products <ThSort>^</ThSort>
              </Th>
              <Th>
                product category <ThSort>^</ThSort>
              </Th>
              <Th>
                Status <ThSort>^</ThSort>
              </Th>
              <Th>
                Last Order Date <ThSort>^</ThSort>
              </Th>
              <Th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>
                <RowCheck />
              </Td>
              <Td>#29RKASJ</Td>
              <Td>
                <ContactCell>
                  <Avatar />
                  <ContactInfo>
                    James Brown
                    <span>james@alignui.com</span>
                  </ContactInfo>
                </ContactCell>
              </Td>
              <Td>52</Td>
              <Td>Tech</Td>
              <Td>
                <Status tone="progress">In Progress</Status>
              </Td>
              <Td>12/02/2025</Td>
              <Td>
                <MenuWrap>
                  <MenuButton type="button">...</MenuButton>
                  <Menu>
                    <MenuItem type="button">Check Supplier Details</MenuItem>
                    <MenuItem type="button">Contact Supplier</MenuItem>
                    <MenuItem type="button">Cancel Supply</MenuItem>
                  </Menu>
                </MenuWrap>
              </Td>
            </tr>
            <tr>
              <Td>
                <RowCheck />
              </Td>
              <Td>#29RKASJ</Td>
              <Td>
                <ContactCell>
                  <Avatar />
                  <ContactInfo>
                    James Brown
                    <span>james@alignui.com</span>
                  </ContactInfo>
                </ContactCell>
              </Td>
              <Td>52</Td>
              <Td>Kids</Td>
              <Td>
                <Status tone="complete">Completed</Status>
              </Td>
              <Td>12/02/2025</Td>
              <Td>
                <MenuButton type="button">...</MenuButton>
              </Td>
            </tr>
            <tr>
              <Td>
                <RowCheck />
              </Td>
              <Td>#29RKASJ</Td>
              <Td>
                <ContactCell>
                  <Avatar />
                  <ContactInfo>
                    James Brown
                    <span>james@alignui.com</span>
                  </ContactInfo>
                </ContactCell>
              </Td>
              <Td>52</Td>
              <Td>Iphone</Td>
              <Td>
                <Status tone="failed">Failed</Status>
              </Td>
              <Td>12/02/2025</Td>
              <Td>
                <MenuButton type="button">...</MenuButton>
              </Td>
            </tr>
          </tbody>
        </Table>
      </TableCard>
      <SupplierDetailsModal />
      <AddSupplyModal />
      <FilterPopover>
        <FilterHeader>
          Filter
          <span>x</span>
        </FilterHeader>
        <FilterField>
          Supplier Name *<FilterInput>Enter Supplier Name</FilterInput>
        </FilterField>
        <FilterField>
          Status *
          <FilterInput>
            Status <ChevronSmallDown />
          </FilterInput>
        </FilterField>
        <FilterField>
          Contact Person *
          <FilterInput>
            Select one <ChevronSmallDown />
          </FilterInput>
        </FilterField>
        <FilterField>
          Products *
          <div>
            <Range>
              <RangeFill />
              <RangeThumb />
            </Range>
            <div style={{ fontSize: 10, color: "#8c8c9a", textAlign: "right" }}>
              63 Attributes
            </div>
            <RangeValues>
              <RangeInput>12</RangeInput>
              <RangeInput>63</RangeInput>
            </RangeValues>
          </div>
        </FilterField>
        <FilterFooter>
          <FilterButton type="button">Clear</FilterButton>
          <FilterButton type="button" primary>
            Apply
          </FilterButton>
        </FilterFooter>
      </FilterPopover>
    </Wrapper>
  );
}
