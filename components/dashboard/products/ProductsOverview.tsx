import styled from "styled-components";
import { AlertIcon, BoxIcon, PromoIcon, TagIcon, UsersIcon } from "../../Icons";
import { StatCard } from "../StatCard";
import { TopSellingProductsCard } from "./TopSellingProductsCard";

const OverviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 10px 0 14px;

  h2 {
    margin: 0 0 4px;
    font-size: 16px;
    color: #1f1f28;
  }

  p {
    margin: 0;
    font-size: 12px;
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

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: 12px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`;

export function ProductsOverview() {
  return (
    <section>
      <OverviewHeader>
        <div>
          <h2>Products Overview</h2>
          <p>Break down lengthy texts into concise summaries to grasp.</p>
        </div>
        <UpdatedBadge>
          <AlertIcon /> Last Updated a minute ago
        </UpdatedBadge>
      </OverviewHeader>

      <TopGrid>
        <StatsGrid>
          <StatCard
            accent
            title="Total Product"
            value="12,200"
            delta="+12%"
            sub="Vs 400 last month"
            icon={<BoxIcon />}
          />
          <StatCard
            title="On Promotion"
            value="1312"
            delta="+12%"
            sub="Vs 40 last month"
            icon={<PromoIcon />}
          />
          <StatCard
            title="Out of Stock"
            value="60"
            delta="+12%"
            sub="Vs 40% last month"
            icon={<TagIcon />}
          />
          <StatCard
            title="Clients with No Orders"
            value="561"
            delta="+12%"
            sub="Vs 400 last month"
            icon={<UsersIcon />}
          />
        </StatsGrid>
        <TopSellingProductsCard />
      </TopGrid>
    </section>
  );
}
