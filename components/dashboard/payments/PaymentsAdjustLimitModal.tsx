import styled from "styled-components";
import { ChevronSmallDown, CloseIcon } from "../../Icons";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 20, 30, 0.45);
  display: grid;
  place-items: center;
  z-index: 45;
`;

const Modal = styled.div`
  width: 300px;
  max-width: 92vw;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #1f1f28;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  color: #9a9aac;
  font-size: 16px;
`;

const Field = styled.div`
  display: grid;
  gap: 6px;
  font-size: 11px;
  color: #7c7c8c;
  margin-bottom: 12px;
`;

const Select = styled.div`
  border: 1px solid #ececf3;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 11px;
  color: #4a4a58;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Range = styled.div`
  height: 4px;
  background: #e5e7f0;
  border-radius: 999px;
  position: relative;
`;

const RangeFill = styled.div`
  width: 70%;
  height: 100%;
  background: #6f4df2;
  border-radius: 999px;
`;

const Thumb = styled.div`
  position: absolute;
  right: 30%;
  top: -5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #6f4df2;
  border: 2px solid #ffffff;
`;

const ValueTag = styled.div`
  position: absolute;
  right: 20%;
  top: -28px;
  background: #1f1f28;
  color: #ffffff;
  font-size: 10px;
  padding: 4px 6px;
  border-radius: 6px;
`;

const Apply = styled.button`
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  height: 34px;
  font-size: 11px;
  width: 100%;
`;

const CardMini = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const CardLogo = styled.div`
  width: 20px;
  height: 14px;
  border-radius: 4px;
  background: linear-gradient(90deg, #f97316, #ef4444);
`;

export function CardLimitModal() {
  return (
    <Overlay>
      <Modal>
        <Header>
          <Title>Adjust Card Limit</Title>
          <CloseButton type="button">
            <CloseIcon />
          </CloseButton>
        </Header>
        <Field>
          Select Your card:
          <Select>
            <CardMini>
              <CardLogo /> **** 1234
            </CardMini>
            <ChevronSmallDown />
          </Select>
        </Field>
        <Field>
          Choose the limit amount:
          <Range>
            <RangeFill />
            <Thumb />
            <ValueTag>$ 2000</ValueTag>
          </Range>
        </Field>
        <Apply type="button">Apply</Apply>
      </Modal>
    </Overlay>
  );
}
