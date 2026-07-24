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

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const HeaderControls = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const HeaderPill = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 10px;
  color: #7d7d8c;
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
  background: conic-gradient(#6f4df2 0 70%, #5cb0ff 70% 88%, #e4e6ee 88% 100%);
  position: relative;
`;

const DonutHole = styled.div`
  position: absolute;
  inset: 16px;
  background: #ffffff;
  border-radius: 50%;
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

const GrowthWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 16px;
  align-items: center;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const GrowthValue = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #1f1f28;
`;

const GrowthDelta = styled.span`
  font-size: 11px;
  color: #28a745;
  background: #e5f7ec;
  padding: 2px 6px;
  border-radius: 8px;
  margin-left: 8px;
`;

const GrowthText = styled.p`
  margin: 8px 0 0;
  font-size: 11px;
  color: #9a9aac;
`;

const Bars = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  align-items: end;
  height: 150px;
`;

const Bar = styled.div<{ height: number; color: string }>`
  height: ${({ height }) => height}px;
  border-radius: 6px;
  background: ${({ color }) => color};
`;

const BarPair = styled.div`
  display: grid;
  gap: 4px;
`;

const BarLabels = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 10px;
  color: #a0a0b0;
  margin-top: 6px;
`;

export function ClientsDonutCard() {
  return (
    <Card>
      <CardTitle>Clients</CardTitle>
      <DonutWrap>
        <Donut>
          <DonutHole />
        </Donut>
        <Legend>
          <LegendItem>
            <LegendLeft>
              <Dot color="#6f4df2" /> Male
            </LegendLeft>
            <span>80.02%</span>
          </LegendItem>
          <LegendItem>
            <LegendLeft>
              <Dot color="#5cb0ff" /> Female
            </LegendLeft>
            <span>24.53%</span>
          </LegendItem>
          <LegendItem>
            <LegendLeft>
              <Dot color="#e4e6ee" /> Unspecified
            </LegendLeft>
            <span>16.47%</span>
          </LegendItem>
        </Legend>
      </DonutWrap>
      <RefreshButton type="button">Refresh Data</RefreshButton>
    </Card>
  );
}

export function GrowthOverviewCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Growth Overview</CardTitle>
        <HeaderControls>
          <HeaderPill>Last 7 days</HeaderPill>
          <HeaderPill>Oct 16 - Oct 22 2025</HeaderPill>
        </HeaderControls>
      </CardHeader>
      <GrowthWrap>
        <div>
          <GrowthValue>
            40.92% <GrowthDelta>+12%</GrowthDelta>
          </GrowthValue>
          <GrowthText>
            We're seeing a steady increase in candidate applications every week.
          </GrowthText>
        </div>
        <div>
          <Bars>
            {[80, 60, 70, 50, 75, 95, 65].map((val, idx) => (
              <BarPair key={idx}>
                <Bar height={val} color="#6f4df2" />
                <Bar height={val * 0.6} color="#5cb0ff" />
              </BarPair>
            ))}
          </Bars>
          <BarLabels>
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </BarLabels>
        </div>
      </GrowthWrap>
    </Card>
  );
}
