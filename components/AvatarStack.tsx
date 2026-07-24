import styled from "styled-components";

const Stack = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div<{ index: number }>`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 2px solid #7a57f2;
  margin-left: ${({ index }) => (index === 0 ? "0" : "-8px")};
  background: linear-gradient(135deg, #ffffff 0%, #d7d1ff 100%);
`;

export function AvatarStack() {
  return (
    <Stack>
      {[0, 1, 2].map((idx) => (
        <Avatar key={idx} index={idx} />
      ))}
    </Stack>
  );
}

