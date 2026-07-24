import styled from "styled-components";

const Track = styled.div`
  display: flex;
  gap: 10px;
  flex: 1;
`;

const Segment = styled.div<{ active: boolean }>`
  height: 4px;
  border-radius: 999px;
  background: ${({ active }) => (active ? "#7a57f2" : "#e6e6ee")};
  opacity: ${({ active }) => (active ? 1 : 0.9)};
  flex: 1;
`;

export function ProgressSteps({ current, total }: { current: number; total: number }) {
  return (
    <Track aria-label={`Step ${current} of ${total}`} role="img">
      {Array.from({ length: total }).map((_, idx) => (
        <Segment key={idx} active={idx < current} />
      ))}
    </Track>
  );
}
