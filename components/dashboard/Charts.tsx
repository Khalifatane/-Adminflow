import styled from "styled-components";

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const CardTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
  margin-bottom: 12px;
`;

const DonutWrap = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 18px;
  align-items: center;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const Donut = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: conic-gradient(#6f4df2 0 68%, #5cb0ff 68% 85%, #e4e6ee 85% 100%);
  position: relative;
`;

const DonutHole = styled.div`
  position: absolute;
  inset: 16px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  span {
    font-size: 11px;
    color: #9a9aac;
  }

  strong {
    font-size: 16px;
    color: #1f1f28;
  }
`;

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 12px;
  color: #1f1f28;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const LegendLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background: ${({ color }) => color};
`;

const RefreshButton = styled.button`
  margin-top: 14px;
  width: 100%;
  background: #f5f6fb;
  border: 1px solid #ececf3;
  border-radius: 10px;
  height: 36px;
  font-size: 12px;
  color: #6d6d7e;
  cursor: pointer;
`;

const TrendHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CategorySelect = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 11px;
  color: #7d7d8c;
  cursor: pointer;
`;

const TrendValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #1f1f28;
`;

const TrendDelta = styled.span`
  font-size: 11px;
  color: #28a745;
  background: #e5f7ec;
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: 8px;
`;

const TrendSub = styled.span`
  font-size: 11px;
  color: #9a9aac;
  margin-left: 6px;
`;

const LineChartWrap = styled.div`
  position: relative;
  height: 150px;
  margin-top: 6px;
  background: linear-gradient(#f1f2f7 1px, transparent 1px) 0 0 / 100% 30px;
`;

const HighlightLine = styled.div`
  position: absolute;
  top: 12px;
  bottom: 16px;
  left: 68%;
  width: 1px;
  background: repeating-linear-gradient(
    to bottom,
    #6f4df2,
    #6f4df2 4px,
    transparent 4px,
    transparent 8px
  );
`;

const Tooltip = styled.div`
  position: absolute;
  top: 8px;
  left: calc(68% - 36px);
  background: #1f1f28;
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 10px;
`;

const HighlightDot = styled.div`
  position: absolute;
  top: 58px;
  left: calc(68% - 5px);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ffffff;
  border: 3px solid #6f4df2;
`;

const XLabels = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 10px;
  color: #a0a0b0;
  margin-top: 6px;
`;

export function TopCategoriesCard() {
  return (
    <Card>
      <CardTitle>Top Categories</CardTitle>
      <DonutWrap>
        <Donut>
          <DonutHole>
            <span>Total sales</span>
            <strong>$1,800.00</strong>
          </DonutHole>
        </Donut>
        <Legend>
          <LegendItem>
            <LegendLeft>
              <Dot color="#6f4df2" /> Fashion
            </LegendLeft>
            <span>80.02%</span>
          </LegendItem>
          <LegendItem>
            <LegendLeft>
              <Dot color="#5cb0ff" /> Electronic
            </LegendLeft>
            <span>24.53%</span>
          </LegendItem>
          <LegendItem>
            <LegendLeft>
              <Dot color="#e4e6ee" /> Food
            </LegendLeft>
            <span>16.47%</span>
          </LegendItem>
        </Legend>
      </DonutWrap>
      <RefreshButton type="button">Refresh Data</RefreshButton>
    </Card>
  );
}

export function SalesTrendsCard() {
  return (
    <Card>
      <TrendHeader>
        <CardTitle>Sales Trends</CardTitle>
        <CategorySelect type="button">Beauty category</CategorySelect>
      </TrendHeader>
      <div>
        <TrendValue>
          $194,127
          <TrendDelta>+12%</TrendDelta>
          <TrendSub>vs last Week</TrendSub>
        </TrendValue>
      </div>
      <LineChartWrap>
        <svg width="100%" height="150" viewBox="0 0 600 150" preserveAspectRatio="none">
          <path
            d="M10 95 L60 80 L100 88 L150 60 L200 75 L250 90 L300 85 L350 110 L400 70 L450 60 L500 95 L560 85"
            fill="none"
            stroke="#6f4df2"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
        <HighlightLine />
        <Tooltip>$12,021 of sales</Tooltip>
        <HighlightDot />
      </LineChartWrap>
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
  );
}
