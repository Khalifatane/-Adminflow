import styled from "styled-components";
import { CardIcon, DownloadIcon, PlusIcon } from "../Icons";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-bottom: 12px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div<{ accent?: boolean }>`
  background: ${({ accent }) => (accent ? "#6f4df2" : "#ffffff")};
  color: ${({ accent }) => (accent ? "#ffffff" : "#1f1f28")};
  border-radius: 12px;
  padding: 14px 16px;
  border: 1px solid ${({ accent }) => (accent ? "transparent" : "#ececf3")};
  box-shadow: 0 6px 18px rgba(18, 18, 32, 0.06);
  position: relative;
  overflow: hidden;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const IconWrap = styled.div<{ accent?: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: ${({ accent }) => (accent ? "rgba(255,255,255,0.2)" : "#f1f2f7")};
  display: grid;
  place-items: center;
  color: ${({ accent }) => (accent ? "#ffffff" : "#6f4df2")};
`;

const Value = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const Delta = styled.span<{ accent?: boolean }>`
  font-size: 11px;
  color: ${({ accent }) => (accent ? "#d3ffe4" : "#28a745")};
  margin-left: 6px;
`;

const Sub = styled.div<{ accent?: boolean }>`
  font-size: 11px;
  color: ${({ accent }) => (accent ? "rgba(255,255,255,0.75)" : "#9a9aac")};
  margin-top: 4px;
`;

const Panel = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  padding: 14px 16px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
  margin-bottom: 12px;
`;

const PanelHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const PanelTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
`;

const Pill = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 10px;
  color: #7d7d8c;
`;

const DatePill = styled(Pill)``;

const Reclamation = styled(Panel)``;

const ReclamationRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #1f1f28;
`;

const ReclamationBadge = styled.span`
  background: #e5f7ec;
  color: #1d9b5c;
  font-size: 10px;
  border-radius: 999px;
  padding: 2px 8px;
`;

const ReclamationText = styled.p`
  margin: 6px 0 0;
  font-size: 11px;
  color: #8c8c9a;
`;

const SupportDone = styled.div`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 11px;
  color: #9a9aac;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const OrdersPanel = styled(Panel)``;

const OrdersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const OrdersTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #1f1f28;
`;

const OrdersActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Search = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  min-width: 160px;
  color: #a0a0b0;

  input {
    border: none;
    outline: none;
    font-size: 12px;
    flex: 1;
  }
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const Th = styled.th`
  text-align: left;
  font-size: 11px;
  color: #8c8c9a;
  font-weight: 500;
  padding: 10px 8px;
  border-bottom: 1px solid #ececf3;
`;

const Td = styled.td`
  font-size: 12px;
  color: #3a3a44;
  padding: 10px 8px;
  border-bottom: 1px solid #f0f1f5;
`;

const Status = styled.span<{ variant: "progress" | "cancelled" | "delivered" }>`
  font-size: 10px;
  border-radius: 999px;
  padding: 3px 8px;
  background: ${({ variant }) =>
    variant === "progress"
      ? "#fff4e5"
      : variant === "cancelled"
      ? "#fdeaea"
      : "#e8f7ee"};
  color: ${({ variant }) =>
    variant === "progress" ? "#f4a23a" : variant === "cancelled" ? "#e05555" : "#1d9b5c"};
`;

const ActionCell = styled.div`
  position: relative;
`;

const ActionMenu = styled.div`
  position: absolute;
  top: 20px;
  right: -10px;
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 10px;
  box-shadow: 0 10px 24px rgba(18, 18, 32, 0.12);
  padding: 6px;
  min-width: 120px;
  z-index: 5;
`;

const ActionItem = styled.div<{ danger?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: ${({ danger }) => (danger ? "#e05555" : "#4a4a56")};
  padding: 6px 8px;
  border-radius: 8px;
`;
const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #9a9aac;
  margin-top: 10px;
`;

const PageButton = styled.button<{ active?: boolean }>`
  border: 1px solid #ececf3;
  background: ${({ active }) => (active ? "#6f4df2" : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#6d6d7e")};
  border-radius: 8px;
  width: 26px;
  height: 26px;
  font-size: 11px;
`;

export function ClientDetailsMain() {
  return (
    <div>
      <PanelHeader>
        <PanelTitle>Analytics</PanelTitle>
        <div>
          <Pill>Last 7 days</Pill> <DatePill>Aug 04 - Aug 11 2023</DatePill>
        </div>
      </PanelHeader>

      <Grid>
        <Card accent>
          <Top>
            <span>Total Orders</span>
            <IconWrap accent>
              <CardIcon />
            </IconWrap>
          </Top>
          <Value>
            291 <Delta accent>+12%</Delta>
          </Value>
          <Sub accent>Vs 400 last month</Sub>
        </Card>
        <Card>
          <Top>
            <span>Total Spend</span>
            <IconWrap>
              <CardIcon />
            </IconWrap>
          </Top>
          <Value>
            $120,230 <Delta>+12%</Delta>
          </Value>
          <Sub>Vs 40 last month</Sub>
        </Card>
        <Card>
          <Top>
            <span>Returns / Refunds</span>
            <IconWrap>
              <CardIcon />
            </IconWrap>
          </Top>
          <Value>
            3 <Delta>+12%</Delta>
          </Value>
          <Sub>Vs 40% last month</Sub>
        </Card>
      </Grid>

      <Reclamation>
        <PanelHeader>
          <PanelTitle>Client Reclamation</PanelTitle>
          <SupportDone>
            <span>&check;</span> Added to Support Ticket
          </SupportDone>
        </PanelHeader>
        <ReclamationRow>
          <CardIcon /> Problem with login <ReclamationBadge>New</ReclamationBadge>
          <span style={{ marginLeft: "auto", fontSize: 10, color: "#9a9aac" }}>09:00 - 09:30</span>
        </ReclamationRow>
        <ReclamationText>
          Lorem ipsum dolor sit amet consectetur. Sollicitudin varius et erat egestas. Nisl vulputate dolor dignissim elementum posuere aliquam. Praesent aliquam viverra tristique convallis eu. Diam turpis nunc mauris auctor dignissim a elementum massa.
        </ReclamationText>
      </Reclamation>

      <OrdersPanel>
        <OrdersHeader>
          <div>
            <OrdersTitle>Recent Orders</OrdersTitle>
            <div style={{ fontSize: 11, color: "#9a9aac" }}>View all your clients information.</div>
          </div>
          <OrdersActions>
            <Search>
              <input placeholder="Search..." />
            </Search>
            <GhostButton type="button">
              <DownloadIcon /> Export
            </GhostButton>
            <PrimaryButton type="button">
              <PlusIcon /> Add new order
            </PrimaryButton>
          </OrdersActions>
        </OrdersHeader>
        <Table>
          <thead>
            <tr>
              <Th>Order ID</Th>
              <Th>Product</Th>
              <Th>Date</Th>
              <Th>Amount</Th>
              <Th>Methods</Th>
              <Th>Status</Th>
              <Th></Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>#29RKASJ</Td>
              <Td>black Bag</Td>
              <Td>12-09-2024</Td>
              <Td>$129</Td>
              <Td>PayPal</Td>
              <Td>
                <Status variant="progress">In Progress</Status>
              </Td>
              <Td>
                <ActionCell>
                  ...
                  <ActionMenu>
                    <ActionItem>View Order</ActionItem>
                    <ActionItem danger>Delete</ActionItem>
                  </ActionMenu>
                </ActionCell>
              </Td>
            </tr>
            <tr>
              <Td>#29RKASJ</Td>
              <Td>Pc</Td>
              <Td>12-09-2024</Td>
              <Td>$1,292</Td>
              <Td>Stripe</Td>
              <Td>
                <Status variant="cancelled">Cancelled</Status>
              </Td>
              <Td>...</Td>
            </tr>
            <tr>
              <Td>#29RKASJ</Td>
              <Td>Fridge</Td>
              <Td>12-09-2024</Td>
              <Td>$200</Td>
              <Td>Visa</Td>
              <Td>
                <Status variant="delivered">Delivered</Status>
              </Td>
              <Td>...</Td>
            </tr>
          </tbody>
        </Table>
        <Pagination>
          Page 2 of 16
          <PageButton>{"<"}</PageButton>
          <PageButton>{"<"}</PageButton>
          <PageButton active>1</PageButton>
          <PageButton>2</PageButton>
          <PageButton>3</PageButton>
          <PageButton>4</PageButton>
          <PageButton>5</PageButton>
          <PageButton>...</PageButton>
          <PageButton>16</PageButton>
          <PageButton>{">"}</PageButton>
          <PageButton>{">"}</PageButton>
          <span style={{ marginLeft: "auto" }}></span>
          <GhostButton type="button">7 / page</GhostButton>
        </Pagination>
      </OrdersPanel>
    </div>
  );
}
