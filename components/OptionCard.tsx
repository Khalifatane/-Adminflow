import styled from "styled-components";
import { ReactNode } from "react";

const Card = styled.button`
  width: 100%;
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 14px 16px;
  background: #ffffff;
  color: #1f1f26;
  border-radius: 12px;
  border: 1px solid #e6e6ef;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.18);
  }
`;

const IconWrap = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #f2f3f7;
  display: grid;
  place-items: center;
  flex-shrink: 0;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 2px;
`;

const Desc = styled.div`
  font-size: 12px;
  color: #6b6b75;
`;

export function OptionCard({
  icon,
  title,
  description
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card type="button">
      <IconWrap>{icon}</IconWrap>
      <div>
        <Title>{title}</Title>
        <Desc>{description}</Desc>
      </div>
    </Card>
  );
}
