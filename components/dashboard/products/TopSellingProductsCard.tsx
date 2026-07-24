import styled from "styled-components";

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
  margin-bottom: 6px;
`;

const Subtitle = styled.div`
  font-size: 11px;
  color: #9a9aac;
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
  background: conic-gradient(
    #5b2dee 0 50%,
    #4f7cff 50% 68%,
    #f4b740 68% 84%,
    #e4e6ee 84% 100%
  );
  position: relative;
`;

const DonutHole = styled.div`
  position: absolute;
  inset: 18px;
  background: #ffffff;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  color: #8c8c9a;
`;

const Legend = styled.div`
  display: grid;
  gap: 10px;
  font-size: 12px;
  color: #1f1f28;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const LegendLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.span<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 3px;
  background: ${({ color }) => color};
`;

const RefreshButton = styled.button`
  margin-top: 12px;
  width: 100%;
  border: 1px solid #ececf3;
  background: #f7f7fc;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 11px;
  color: #6f6f7e;
`;

export function TopSellingProductsCard() {
  return (
    <Card>
      <Title>Top-Selling Products</Title>
      <Subtitle>Break down lengthy texts into concise summaries to grasp.</Subtitle>
      <DonutWrap>
        <Donut>
          <DonutHole>Products</DonutHole>
        </Donut>
        <Legend>
          <LegendItem>
            <LegendLeft>
              <Dot color="#5b2dee" /> Office Chair
            </LegendLeft>
            <span>50,02%</span>
          </LegendItem>
          <LegendItem>
            <LegendLeft>
              <Dot color="#4f7cff" /> Fitness Watch
            </LegendLeft>
            <span>37,53%</span>
          </LegendItem>
          <LegendItem>
            <LegendLeft>
              <Dot color="#f4b740" /> Adapter Hub
            </LegendLeft>
            <span>16,47%</span>
          </LegendItem>
          <LegendItem>
            <LegendLeft>
              <Dot color="#e4e6ee" /> Others
            </LegendLeft>
            <span>14,47%</span>
          </LegendItem>
        </Legend>
      </DonutWrap>
      <RefreshButton type="button">Refresh Data</RefreshButton>
    </Card>
  );
}
