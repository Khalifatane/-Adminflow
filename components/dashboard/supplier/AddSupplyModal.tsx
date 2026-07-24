import styled from "styled-components";
import { CloseIcon, MapIcon, PlusIcon, TruckMiniIcon } from "../../Icons";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 20, 30, 0.45);
  display: grid;
  place-items: center;
  z-index: 55;
`;

const Modal = styled.div`
  width: 420px;
  max-width: 92vw;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid #f0f1f5;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  color: #9a9aac;
  font-size: 16px;
`;

const Content = styled.div`
  padding: 12px 16px 14px;
  max-height: 74vh;
  overflow: auto;
`;

const Row = styled.div`
  font-size: 11px;
  color: #8c8c9a;
  margin-bottom: 10px;
`;

const Section = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 10px 12px;
  margin-bottom: 12px;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #1f1f28;
  margin-bottom: 6px;
`;

const SectionSub = styled.div`
  font-size: 11px;
  color: #9a9aac;
  margin-bottom: 8px;
`;

const Field = styled.div`
  display: grid;
  gap: 6px;
  font-size: 11px;
  color: #7c7c8c;
  margin-bottom: 10px;
`;

const Required = styled.span`
  color: #ff5a5f;
`;

const Input = styled.div`
  border: 1px solid #ececf3;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 11px;
  color: #4a4a58;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

const MapBox = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  background: #f7f8fc;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
  font-size: 11px;
  color: #8c8c9a;
`;

const SmallButton = styled.button`
  border: 1px dashed #e2e3ef;
  background: #ffffff;
  border-radius: 8px;
  height: 32px;
  font-size: 11px;
  color: #8c8c9a;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #ececf3;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 8px;
`;

const Tab = styled.button<{ active?: boolean }>`
  border: none;
  background: ${({ active }) => (active ? "#ffffff" : "#f7f8fc")};
  color: ${({ active }) => (active ? "#3a3a44" : "#9a9aac")};
  font-size: 11px;
  padding: 6px 0;
`;

const NoteBox = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 10px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: #8c8c9a;
`;

const UploadBox = styled.div`
  border: 1px dashed #dfe3f4;
  border-radius: 10px;
  background: #f7f8fc;
  padding: 16px;
  font-size: 11px;
  color: #8c8c9a;
  text-align: center;
  display: grid;
  gap: 6px;
`;

const UploadIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: #eef0f6;
  color: #6f4df2;
  display: grid;
  place-items: center;
  margin: 0 auto;
  font-size: 12px;
`;

const UploadList = styled.div`
  border: 1px dashed #dfe3f4;
  border-radius: 10px;
  background: #f7f8fc;
  padding: 10px;
  display: grid;
  gap: 8px;
`;

const UploadHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #6f4df2;
`;

const UploadBadge = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 6px;
  background: #ece9ff;
  display: grid;
  place-items: center;
  font-size: 10px;
  color: #6f4df2;
`;

const UploadItem = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 8px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 8px;
  align-items: center;
  font-size: 11px;
  color: #5a5a6b;
`;

const FileIcon = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 6px;
  background: #e7f8ee;
  color: #1d9b5c;
  display: grid;
  place-items: center;
  font-size: 10px;
`;

const FileMeta = styled.div`
  display: grid;
  gap: 2px;
  font-size: 10px;
  color: #9a9aac;
`;

const ProgressDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #6f4df2;
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 10px;
  padding: 12px 16px 14px;
  border-top: 1px solid #f0f1f5;
`;

const GhostButton = styled.button`
  border: 1px solid #ececf3;
  background: #f7f7fc;
  color: #6d6d7e;
  border-radius: 10px;
  height: 36px;
  font-size: 11px;
`;

const PrimaryButton = styled.button`
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  height: 36px;
  font-size: 11px;
`;

export function AddSupplyModal() {
  return (
    <Overlay>
      <Modal>
        <Header>
          <Title>Create new order</Title>
          <CloseButton type="button">
            <CloseIcon />
          </CloseButton>
        </Header>
        <Content>
          <Row>Order Date: April 11, 2025</Row>

          <Section>
            <SectionHeader>
              <TruckMiniIcon /> Supplier Information
            </SectionHeader>
            <SectionSub>Enter your shipment details carefully</SectionSub>
            <Field>
              Supplier Name<Required>*</Required>
              <Input>TechParts Inc.</Input>
            </Field>
            <TwoCol>
              <Field>
                Email<Required>*</Required>
                <Input>TechPart@contact.com</Input>
              </Field>
              <Field>
                Phone number<Required>*</Required>
                <Input>
                  <span>+1</span>
                  123 1349 9202
                </Input>
              </Field>
            </TwoCol>
          </Section>

          <Section>
            <SectionHeader>
              <TruckMiniIcon /> Supply Order Details
            </SectionHeader>
            <SectionSub>Give more details about the order</SectionSub>
            <TwoCol>
              <Field>
                Supply Order Date<Required>*</Required>
                <Input>12/02/2025</Input>
              </Field>
              <Field>
                Expected Delivery Date<Required>*</Required>
                <Input>15/02/2025</Input>
              </Field>
            </TwoCol>
            <Field>
              Delivery Address<Required>*</Required>
              <TwoCol>
                <Field>
                  Street<Required>*</Required>
                  <Input>1024 Tech Valley Blvd</Input>
                </Field>
                <Field>
                  City<Required>*</Required>
                  <Input>San Francisco</Input>
                </Field>
                <Field>
                  Postal Code<Required>*</Required>
                  <Input>94107</Input>
                </Field>
              </TwoCol>
              <MapBox>
                <MapIcon /> Open The Map
              </MapBox>
            </Field>
          </Section>

          <Section>
            <SectionHeader>
              <TruckMiniIcon /> Add Products to the Supply
            </SectionHeader>
            <SectionSub>Enter your delivery address suck as street, city, state and postal code</SectionSub>
            <TwoCol>
              <Field>
                Product Name<Required>*</Required>
                <Input>The G-Lab - K-Pad Thorium - Manette...</Input>
              </Field>
              <Field>
                Quantity to order per product<Required>*</Required>
                <Input>12</Input>
              </Field>
            </TwoCol>
            <Field>
              Product Link<Required>*</Required>
              <Input>www.markets/newProduct.com</Input>
            </Field>
            <SmallButton type="button">
              <PlusIcon /> Add product
            </SmallButton>
          </Section>

          <Section>
            <SectionHeader>
              <TruckMiniIcon /> Payment Details
            </SectionHeader>
            <SectionSub>Enter your delivery address suck as street, city, state and postal code</SectionSub>
            <Field>
              Payment Terms<Required>*</Required>
              <Input>Pay after delivery</Input>
            </Field>
            <TwoCol>
              <Field>
                Total Amount<Required>*</Required>
                <Input>$12,001</Input>
              </Field>
              <Field>
                Payment Status<Required>*</Required>
                <Input>Pending</Input>
              </Field>
            </TwoCol>
            <Tabs>
              <Tab>Notes / Instructions</Tab>
              <Tab active>Attachments</Tab>
            </Tabs>
          </Section>

          <Section>
            <SectionHeader>Attachments</SectionHeader>
            <UploadList>
              <UploadHeader>
                <UploadBadge>1</UploadBadge>
                Attachments <span style={{ color: "#9a9aac" }}>3</span>
              </UploadHeader>
              <UploadItem>
                <FileIcon>JPG</FileIcon>
                Documents 1.png
                <ProgressDot />
              </UploadItem>
              <UploadItem>
                <FileIcon style={{ background: "#ffe7ec", color: "#e05555" }}>PDF</FileIcon>
                Documents 1.pdf
                <ProgressDot />
              </UploadItem>
              <UploadItem>
                <FileIcon style={{ background: "#e8f1ff", color: "#4f7cff" }}>JPG</FileIcon>
                Documents 1.jpg
                <ProgressDot />
              </UploadItem>
            </UploadList>
          </Section>
        </Content>
        <Footer>
          <GhostButton type="button">Cancel</GhostButton>
          <PrimaryButton type="button">Confirm Order & Notify Supplier</PrimaryButton>
        </Footer>
      </Modal>
    </Overlay>
  );
}
