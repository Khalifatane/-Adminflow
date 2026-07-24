import styled from "styled-components";
import {
  ArrowLeft,
  ChevronSmallDown,
  FilterIcon,
  PlusIcon,
  SearchIcon,
  SunIcon,
  DownloadIcon
} from "../../Icons";
import { StatCard } from "../StatCard";
import { CardIcon, UsersIcon, TagIcon } from "../../Icons";

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

const BalanceCard = styled.div`
  background: linear-gradient(135deg, #6f4df2, #7e59ff);
  border-radius: 14px;
  padding: 18px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const BalanceInfo = styled.div`
  span {
    font-size: 12px;
    opacity: 0.85;
  }

  h2 {
    margin: 6px 0 4px;
    font-size: 22px;
  }

  p {
    margin: 0;
    font-size: 11px;
    opacity: 0.8;
  }
`;

const BalanceActions = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const BalanceButton = styled.button<{ ghost?: boolean }>`
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: ${({ ghost }) => (ghost ? "transparent" : "#ffffff")};
  color: ${({ ghost }) => (ghost ? "#ffffff" : "#6f4df2")};
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const BalanceMore = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 12px;
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

const RevenueValue = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #1f1f28;
  margin: 10px 0 6px;
`;

const Muted = styled.div`
  font-size: 11px;
  color: #9a9aac;
`;

const Delta = styled.span`
  font-size: 10px;
  background: #e7f8ee;
  color: #1d9b5c;
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: 8px;
`;

const LineChartWrap = styled.div`
  position: relative;
  height: 150px;
  margin-top: 6px;
  background: linear-gradient(#f1f2f7 1px, transparent 1px) 0 0 / 100% 30px;
`;

const LineLegend = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 10px;
  color: #8c8c9a;
`;

const LegendDot = styled.span<{ color: string }>`
  width: 10px;
  height: 2px;
  background: ${({ color }) => color};
  border-radius: 999px;
`;

const CashRow = styled.div`
  display: grid;
  gap: 12px;
`;

const CashValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #1f1f28;
`;

const CashItem = styled.div`
  display: grid;
  gap: 6px;
  font-size: 11px;
  color: #8c8c9a;
`;

const MiniBar = styled.div<{ tone?: "green" | "red" }>`
  height: 6px;
  border-radius: 999px;
  background: #eef0f6;
  overflow: hidden;

  span {
    display: block;
    width: 65%;
    height: 100%;
    background: ${({ tone }) => (tone === "red" ? "#f87171" : "#22c55e")};
  }
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

const Status = styled.span<{ tone?: "progress" }>`
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 8px;
  background: #fff3e0;
  color: #ff9f43;
`;

const PaymentType = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const PaymentLogo = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #1d4ed8;
  color: #ffffff;
  font-size: 10px;
  display: grid;
  place-items: center;
  font-weight: 700;
`;

const StoreCell = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export function PaymentsTransactionsPage() {
  return (
    <Wrapper>
      <TopBar>
        <TopLeft>
          <BackButton type="button">
            <ArrowLeft />
          </BackButton>
          <TopTitle>
            <h1>Payments</h1>
            <p>Manage all product categories and their nested subcategories from one place.</p>
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
                Select All Markets
                <span>2 markets total</span>
              </div>
            </MarketInfo>
            <ChevronSmallDown />
          </MarketSelect>
        </TopRight>
      </TopBar>

      <BalanceCard>
        <BalanceInfo>
          <span>Total Balance</span>
          <h2>$1,254,399.00</h2>
          <p>Your balance has grown by $12,120 this month</p>
        </BalanceInfo>
        <BalanceActions>
          <BalanceButton>
            <DownloadIcon /> Send
          </BalanceButton>
          <BalanceButton ghost>Convert</BalanceButton>
          <BalanceMore type="button">...</BalanceMore>
        </BalanceActions>
      </BalanceCard>

      <OverviewHeader>
        <div>
          <h3>Payments Overview</h3>
          <p>Break down lengthy texts into concise summaries to grasp.</p>
        </div>
        <UpdatedBadge>Last Updated a minute ago</UpdatedBadge>
      </OverviewHeader>

      <StatsGrid>
        <StatCard
          title="Total Clients"
          value="$532,200"
          delta="+12%"
          sub="Vs 400 last month"
          icon={<UsersIcon />}
        />
        <StatCard
          title="Pending Payments"
          value="$2,200"
          delta="+12%"
          sub="Vs 40 last month"
          icon={<TagIcon />}
        />
        <StatCard
          title="Refund Payments"
          value="$561"
          delta="+12%"
          sub="Vs 400 last month"
          icon={<CardIcon />}
        />
      </StatsGrid>

      <ChartGrid>
        <Card>
          <RevenueHeader>
            <CardTitle>Total Revenue</CardTitle>
            <LineLegend>
              <span>Last 7 days</span>
              <span>Oct 16 - Oct 22 2025</span>
            </LineLegend>
          </RevenueHeader>
          <RevenueValue>
            $194,127 <Delta>+12%</Delta>
          </RevenueValue>
          <LineLegend>
            <span>
              <LegendDot color="#6f4df2" /> This week
            </span>
            <span>
              <LegendDot color="#d9dbe7" /> Last week
            </span>
          </LineLegend>
          <LineChartWrap>
            <svg width="100%" height="150" viewBox="0 0 600 150" preserveAspectRatio="none">
              <path
                d="M10 95 L60 80 L100 88 L150 60 L200 75 L250 90 L300 85 L350 110 L400 70 L450 60 L500 95 L560 85"
                fill="none"
                stroke="#6f4df2"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path
                d="M10 110 L60 100 L100 105 L150 90 L200 95 L250 110 L300 105 L350 120 L400 100 L450 95 L500 110 L560 100"
                fill="none"
                stroke="#d9dbe7"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </LineChartWrap>
        </Card>

        <Card>
          <RevenueHeader>
            <CardTitle>Cash Flow</CardTitle>
            <LineLegend>
              <span>Last Month</span>
            </LineLegend>
          </RevenueHeader>
          <CashValue>$154,399.00</CashValue>
          <Muted>Vs 2,034.00 last month</Muted>
          <CashRow>
            <CashItem>
              <div>$154,399.00</div>
              <div>68% Money in</div>
              <MiniBar tone="green">
                <span />
              </MiniBar>
            </CashItem>
            <CashItem>
              <div>$4,399.00</div>
              <div>32% Money out</div>
              <MiniBar tone="red">
                <span style={{ width: "32%" }} />
              </MiniBar>
            </CashItem>
          </CashRow>
        </Card>
      </ChartGrid>

      <TableCard>
        <TableHeader>
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <TableHeaderMeta>View all your clients information.</TableHeaderMeta>
          </div>
          <TableHeaderActions>
            <Search>
              <SearchIcon />
              <input placeholder="Search..." />
            </Search>
            <ExportButton>
              <DownloadIcon /> Export
            </ExportButton>
            <PrimaryButton>
              <PlusIcon /> Add new order
            </PrimaryButton>
          </TableHeaderActions>
        </TableHeader>
        <Table>
          <thead>
            <tr>
              <Th>Payment ID <ThSort>^</ThSort></Th>
              <Th>Client Name <ThSort>^</ThSort></Th>
              <Th>Order ID <ThSort>^</ThSort></Th>
              <Th>Amount <ThSort>^</ThSort></Th>
              <Th>Payment Type <ThSort>^</ThSort></Th>
              <Th>Payment Status <ThSort>^</ThSort></Th>
              <Th>Date <ThSort>^</ThSort></Th>
              <Th>Store <ThSort>^</ThSort></Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>#29RKASJ</Td>
              <Td>black Bag</Td>
              <Td>12-09-2024</Td>
              <Td>$129</Td>
              <Td>
                <PaymentType>
                  <PaymentLogo>V</PaymentLogo> Visa
                </PaymentType>
              </Td>
              <Td>
                <Status tone="progress">In Progress</Status>
              </Td>
              <Td>12-09-2024</Td>
              <Td>
                <StoreCell>
                  <SunIcon /> Mark...
                </StoreCell>
              </Td>
            </tr>
          </tbody>
        </Table>
      </TableCard>
    </Wrapper>
  );
}
