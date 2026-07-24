import styled from "styled-components";

const Card = styled.div`\n  position: relative;\n  z-index: 1;
  margin-top: auto;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 18px;
  padding: 18px 20px 26px;
  backdrop-filter: blur(8px);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`;

const Avatar = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffffff 0%, #d5cbff 100%);
  border: 2px solid rgba(255, 255, 255, 0.8);
`;

const Name = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const Role = styled.div`
  font-size: 12px;
  opacity: 0.85;
`;

const Quote = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  opacity: 0.95;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 14px;
`;

const Dot = styled.div<{ active?: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#ffffff" : "rgba(255,255,255,0.5)")};
`;

export function TestimonialCard({
  name,
  role,
  quote
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <Card>
      <Header>
        <Avatar />
        <div>
          <Name>{name}</Name>
          <Role>{role}</Role>
        </div>
      </Header>
      <Quote>&ldquo;{quote}&rdquo;</Quote>
      <Dots>
        {[0, 1, 2, 3].map((idx) => (
          <Dot key={idx} active={idx === 1} />
        ))}
      </Dots>
    </Card>
  );
}
