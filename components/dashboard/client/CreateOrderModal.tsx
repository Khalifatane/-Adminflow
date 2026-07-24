import styled, { css } from "styled-components";
import {
  BadgeCheckIcon,
  CartIcon,
  CloseIcon,
  MapIcon,
  PaymentIcon,
  TruckMiniIcon
} from "../Icons";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 20, 30, 0.45);
  display: grid;
  place-items: center;
  z-index: 40;
`;

const Modal = styled.div`
  width: 560px;
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

const Banner = styled.div`
  background: #f2edff;
  color: #6f4df2;
  border-radius: 10px;
  padding: 10px 12px;
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const Avatar = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd1d1, #ffc48a);
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
  margin-bottom: 8px;
`;

const SectionSub = styled.div`
  font-size: 11px;
  color: #9a9aac;
  margin-top: 2px;
`;

const Field = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-size: 11px;
  color: #7c7c8c;
  margin-bottom: 6px;
`;

const Required = styled.span`
  color: #ff5a5f;
`;

const inputStyles = css`
  width: 100%;
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  height: 34px;
  padding: 0 10px;
  font-size: 12px;
  color: #3a3a44;
`;

const TextInput = styled.input`
  ${inputStyles}
`;

const SelectInput = styled.select`
  ${inputStyles}
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239797a7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 28px;
`;

const MapBox = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  background: #f7f8fc;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-size: 11px;
  color: #8c8c9a;
  cursor: pointer;
`;

const MapLink = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #8c8c9a;
  margin-top: 6px;
  justify-content: flex-end;
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const TextArea = styled.textarea`
  ${inputStyles}
  height: 80px;
  resize: none;
  padding: 8px 10px;
`;

const Counter = styled.div`
  text-align: right;
  font-size: 10px;
  color: #9a9aac;
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

export function CreateOrderModal() {
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
          <Banner>
            <BadgeCheckIcon /> You're creating an order for :
            <Avatar /> Helinda PhamMD
            <span style={{ marginLeft: "auto" }}>x</span>
          </Banner>
          <Row>Order Date: April 11, 2025</Row>

          <Section>
            <SectionHeader>
              <CartIcon /> Order Information
            </SectionHeader>
            <SectionSub>Enter your shipment details carefully</SectionSub>

            <div
              style={{
                border: "1px solid #ececf3",
                borderRadius: 10,
                padding: 8,
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
                background: "#f7f8fc",
                marginBottom: 10
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 36,
                  borderRadius: 8,
                  background: "#ffffff",
                  border: "1px solid #ececf3"
                }}
              />
              <div style={{ fontSize: 10, color: "#5f5f6c" }}>
                #ORD-20250411-001
                <br />
                The G-Lab - K-Pad Thorium - Manette Gaming PC & PS3 Filaire USB avec Vibrations
                Integrees, Gamepad Controleur de Jeu connecte par Fil
              </div>
              <div style={{ marginLeft: "auto", color: "#e05555" }}>x</div>
            </div>

            <Field>
              <Label>
                Add Ons<Required>*</Required>
              </Label>
              <SelectInput>
                <option>Red Color + $23</option>
              </SelectInput>
            </Field>

            <div
              style={{
                border: "1px solid #ececf3",
                borderRadius: 10,
                padding: 8,
                display: "flex",
                gap: 8,
                alignItems: "flex-start",
                background: "#f7f8fc",
                marginBottom: 10
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 36,
                  borderRadius: 8,
                  background: "#ffffff",
                  border: "1px solid #ececf3"
                }}
              />
              <div style={{ fontSize: 10, color: "#5f5f6c" }}>
                #ORD-20250411-001
                <br />
                Dell Inspiron 15 (3520) Ordinateur Portable 15,6\" Ecran FHD 120 Hz, Intel Core i5
                1235U, Intel Iris XE, 16Go RAM, 512 Go SSD, Windows 11 Home, Clavier AZERTY, Carbon
              </div>
              <div style={{ marginLeft: "auto", color: "#e05555" }}>x</div>
            </div>

            <Field>
              <Label>
                Add Ons<Required>*</Required>
              </Label>
              <SelectInput>
                <option>12 Ram + $23</option>
              </SelectInput>
            </Field>

            <MapBox style={{ marginBottom: 8 }}>
              <MapIcon /> Add another products
            </MapBox>
          </Section>

          <Section>
            <SectionHeader>
              <MapIcon /> Delivery Address
            </SectionHeader>
            <SectionSub>Enter your delivery address suck as street, city, state and postal code</SectionSub>
            <TwoCol>
              <Field>
                <Label>
                  Street<Required>*</Required>
                </Label>
                <TextInput defaultValue="1024 Tech Valley Blvd" />
              </Field>
              <Field>
                <Label>
                  City<Required>*</Required>
                </Label>
                <SelectInput>
                  <option>San Francisco</option>
                </SelectInput>
              </Field>
              <Field>
                <Label>
                  Postal Code<Required>*</Required>
                </Label>
                <TextInput defaultValue="94107" />
              </Field>
            </TwoCol>
            <MapLink>
              <MapIcon /> Open The Map
            </MapLink>
          </Section>

          <Section>
            <SectionHeader>
              <TruckMiniIcon /> Delivery Details
            </SectionHeader>
            <SectionSub>Give more details about the order</SectionSub>

            <TwoCol>
              <Field>
                <Label>
                  Shipping Method<Required>*</Required>
                </Label>
                <SelectInput>
                  <option>Express Delivery (2-3 Days)</option>
                </SelectInput>
              </Field>
              <Field>
                <Label>
                  Signature Required?<Required>*</Required>
                </Label>
                <SelectInput>
                  <option>Yes</option>
                </SelectInput>
              </Field>
            </TwoCol>

            <Field>
              <Label>
                Detailed Description (optional)<Required>*</Required>
              </Label>
              <TextArea defaultValue="1x ASUS ROG Zephyrus G14, 32GB RAM, 1TB SSD, RTX 4070, with accessories (charger, mouse, and external keyboard). Securely bubble-wrapped with insurance." />
              <Counter>120/200</Counter>
            </Field>
          </Section>

          <Section>
            <SectionHeader>
              <PaymentIcon /> Payment Details
            </SectionHeader>
            <SectionSub>Enter your delivery address suck as street, city, state and postal code</SectionSub>
            <TwoCol>
              <Field>
                <Label>
                  Payment type<Required>*</Required>
                </Label>
                <SelectInput>
                  <option>Select one</option>
                </SelectInput>
              </Field>
              <Field>
                <Label>
                  Ammount<Required>*</Required>
                </Label>
                <TextInput placeholder="enter ammout" />
              </Field>
              <Field>
                <Label>
                  Payment Status<Required>*</Required>
                </Label>
                <SelectInput>
                  <option>Select one</option>
                </SelectInput>
              </Field>
            </TwoCol>
          </Section>
        </Content>

        <Footer>
          <GhostButton type="button">Cancel</GhostButton>
          <PrimaryButton type="button">Add new category</PrimaryButton>
        </Footer>
      </Modal>
    </Overlay>
  );
}
