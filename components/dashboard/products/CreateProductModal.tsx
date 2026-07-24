import styled from "styled-components";
import { BoxIcon, CloseIcon, PlusCircleIcon } from "../../Icons";

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

const SpacedField = styled(Field)`
  margin-top: 10px;
`;

const LabelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;
`;

const Label = styled.div`
  font-size: 11px;
  color: #7c7c8c;
`;

const Refine = styled.button`
  border: none;
  background: transparent;
  color: #8a67f4;
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const Required = styled.span`
  color: #ff5a5f;
`;

const inputStyles = `
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

const TextArea = styled.textarea`
  ${inputStyles}
  height: 70px;
  resize: none;
  padding: 8px 10px;
`;

const Counter = styled.div`
  text-align: right;
  font-size: 10px;
  color: #9a9aac;
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const MediaHero = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  background: linear-gradient(135deg, #f1f2f8, #dfe3f4);
  height: 120px;
  overflow: hidden;
  position: relative;
`;

const MediaOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2));
`;

const Thumbs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 10px;
`;

const Thumb = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  background: #ffffff;
  height: 70px;
  overflow: hidden;
  position: relative;
`;

const ThumbOverlay = styled.div<{ tone?: "dark" | "light" }>`
  position: absolute;
  inset: 0;
  background: ${({ tone }) =>
    tone === "dark"
      ? "linear-gradient(135deg, #1b1d29, #2e3250)"
      : "linear-gradient(135deg, #dfe2f2, #f4f5fb)"};
`;

const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
`;

const ColorDot = styled.span<{ color: string }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ color }) => color};
  border: 1px solid #e2e3ef;
`;

const StoreTags = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

const StoreTag = styled.span`
  border: 1px solid #e3dcff;
  background: #f2edff;
  color: #6f4df2;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 10px;
`;

const InlineRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 10px;
`;

const AddOption = styled.button`
  border: 1px dashed #e6e6f0;
  background: #ffffff;
  border-radius: 10px;
  height: 32px;
  font-size: 11px;
  color: #8a8a9a;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 10px;
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

export function CreateProductModal() {
  return (
    <Overlay>
      <Modal>
        <Header>
          <Title>Create New Product</Title>
          <CloseButton type="button">
            <CloseIcon />
          </CloseButton>
        </Header>

        <Content>
          <Row>Creation Date: April 11, 2025</Row>

          <Section>
            <SectionHeader>
              <BoxIcon /> Product Information
            </SectionHeader>
            <SectionSub>Enter your shipment details carefully</SectionSub>

            <Field>
              <Label>
                Product name<Required>*</Required>
              </Label>
              <TextInput defaultValue="Lenovo ThinkPad X1 Carbon Gen 11" />
            </Field>

            <Field>
              <LabelRow>
                <Label>
                  Product Description<Required>*</Required>
                </Label>
                <Refine type="button">Refine paragraph</Refine>
              </LabelRow>
              <TextArea defaultValue="A premium ultrabook built for business professionals. It features a lightweight carbon fiber chassis, a powerful Intel i7 processor, and an all-day battery life. Designed for durability, performance, and mobility." />
              <Counter>120/200</Counter>
            </Field>

            <TwoCol>
              <Field>
                <Label>
                  Category<Required>*</Required>
                </Label>
                <SelectInput>
                  <option>Laptops</option>
                </SelectInput>
              </Field>
              <Field>
                <Label>
                  Sub-Category<Required>*</Required>
                </Label>
                <SelectInput>
                  <option>Business Laptops</option>
                </SelectInput>
              </Field>
            </TwoCol>

            <Field>
              <Label>
                Assign To Store<Required>*</Required>
              </Label>
              <StoreTags>
                <StoreTag>USA Market</StoreTag>
                <StoreTag>Canada Market</StoreTag>
              </StoreTags>
            </Field>
          </Section>

          <Section>
            <SectionHeader>
              <BoxIcon /> Media & more
            </SectionHeader>
            <SectionSub>Enter your delivery address suck as street, city, state and postal code</SectionSub>

            <MediaHero>
              <MediaOverlay />
            </MediaHero>

            <Thumbs>
              <Thumb>
                <ThumbOverlay tone="light" />
              </Thumb>
              <Thumb>
                <ThumbOverlay tone="dark" />
              </Thumb>
              <Thumb>
                <ThumbOverlay tone="dark" />
              </Thumb>
            </Thumbs>

            <SpacedField>
              <Label>Product Color</Label>
              <ColorRow>
                <ColorDot color="#111318" />
                <ColorDot color="#5b5f73" />
                <ColorDot color="#b9bccb" />
              </ColorRow>
              <AddOption type="button">
                <PlusCircleIcon /> Add more options
              </AddOption>
            </SpacedField>
          </Section>

          <Section>
            <SectionHeader>
              <BoxIcon /> Pricing
            </SectionHeader>
            <SectionSub>Give more details about the order</SectionSub>
            <TwoCol>
              <Field>
                <Label>
                  Base Price<Required>*</Required>
                </Label>
                <TextInput defaultValue="$1,299.00" />
              </Field>
              <Field>
                <Label>
                  Promotion<Required>*</Required>
                </Label>
                <TextInput defaultValue="10% off" />
              </Field>
            </TwoCol>
            <InlineRow>
              <Field>
                <Label>
                  Name<Required>*</Required>
                </Label>
                <TextInput defaultValue="Upgrade to 32GB RAM" />
              </Field>
              <Field>
                <Label>
                  Price Value<Required>*</Required>
                </Label>
                <TextInput defaultValue="+$120" />
              </Field>
            </InlineRow>
            <AddOption type="button">
              <PlusCircleIcon /> Add extra options
            </AddOption>
          </Section>

          <Section>
            <SectionHeader>
              <BoxIcon /> Specifications
            </SectionHeader>
            <SectionSub>Enter your delivery address suck as street, city, state and postal code</SectionSub>
            <TwoCol>
              <Field>
                <Label>
                  Name<Required>*</Required>
                </Label>
                <SelectInput>
                  <option>Ram</option>
                </SelectInput>
              </Field>
              <Field>
                <Label>
                  Value<Required>*</Required>
                </Label>
                <SelectInput>
                  <option>12 go</option>
                </SelectInput>
              </Field>
            </TwoCol>
            <AddOption type="button">
              <PlusCircleIcon /> Add specifications
            </AddOption>
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
