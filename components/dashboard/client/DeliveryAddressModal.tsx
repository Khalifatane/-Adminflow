import styled, { css } from "styled-components";
import { CloseIcon, MapIcon } from "../Icons";

const Modal = styled.div`
  width: 340px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  border-bottom: 1px solid #f0f1f5;
  font-size: 12px;
  font-weight: 600;
  color: #1f1f28;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  color: #9a9aac;
`;

const Content = styled.div`
  padding: 12px 14px 14px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  margin-bottom: 10px;
`;

const inputStyles = css`
  width: 100%;
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 8px;
  height: 30px;
  padding: 0 8px;
  font-size: 11px;
  color: #3a3a44;
`;

const Label = styled.div`
  font-size: 10px;
  color: #8c8c9a;
  margin-bottom: 4px;
`;

const TextInput = styled.input`
  ${inputStyles}
`;

const SelectInput = styled.select`
  ${inputStyles}
`;

const MapPreview = styled.div`
  height: 180px;
  border-radius: 10px;
  background: linear-gradient(135deg, #f0f1f7, #e9ebf4);
  margin-bottom: 12px;
  display: grid;
  place-items: center;
  color: #9a9aac;
  font-size: 11px;
`;

const Footer = styled.div`
  padding: 0 14px 14px;
`;

const PrimaryButton = styled.button`
  width: 100%;
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  height: 34px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export function DeliveryAddressModal() {
  return (
    <Modal>
      <Header>
        <Title>
          <MapIcon /> Delivery Address
        </Title>
        <CloseButton type="button">
          <CloseIcon />
        </CloseButton>
      </Header>
      <Content>
        <Row>
          <div>
            <Label>
              Street<sup>*</sup>
            </Label>
            <TextInput placeholder="Street" />
          </div>
          <div>
            <Label>
              City<sup>*</sup>
            </Label>
            <SelectInput>
              <option>Select one</option>
            </SelectInput>
          </div>
          <div>
            <Label>
              Postal Code<sup>*</sup>
            </Label>
            <TextInput placeholder="Ex: 12345" />
          </div>
        </Row>
        <MapPreview>Map</MapPreview>
      </Content>
      <Footer>
        <PrimaryButton type="button">+ Add address</PrimaryButton>
      </Footer>
    </Modal>
  );
}
