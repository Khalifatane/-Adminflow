import styled from "styled-components";
import type { ReactNode } from "react";
import { DotsIcon, TagIcon } from "../Icons";

const Card = styled.div<{ accent?: boolean }>`
  background: ${({ accent }) => (accent ? "#6f4df2" : "#ffffff")};
  color: ${({ accent }) => (accent ? "#ffffff" : "#1f1f28")};
  border-radius: 12px;
  padding: 14px 16px;
  border: 1px solid ${({ accent }) => (accent ? "transparent" : "#ececf3")};
  box-shadow: 0 6px 18px rgba(18, 18, 32, 0.06);
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ accent }) =>
      accent
        ? "radial-gradient(circle at 100% 0, rgba(255,255,255,0.15), transparent 60%)"
        : "none"};
    pointer-events: none;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const TitleRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
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

const MenuDots = styled.div<{ accent?: boolean }>`
  color: ${({ accent }) => (accent ? "rgba(255,255,255,0.75)" : "#c2c2d0")};
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

export function StatCard({
  title,
  value,
  delta,
  sub,
  accent,
  icon
}: {
  title: string;
  value: string;
  delta: string;
  sub: string;
  accent?: boolean;
  icon?: ReactNode;
}) {
  return (
    <Card accent={accent}>
      <TopRow>
        <TitleRow>
          <IconWrap accent={accent}>
            {icon ?? <TagIcon />}
          </IconWrap>
          <span>{title}</span>
        </TitleRow>
        <MenuDots accent={accent}>
          <DotsIcon />
        </MenuDots>
      </TopRow>
      <Value>
        {value}
        <Delta accent={accent}>{delta}</Delta>
      </Value>
      <Sub accent={accent}>{sub}</Sub>
    </Card>
  );
}
