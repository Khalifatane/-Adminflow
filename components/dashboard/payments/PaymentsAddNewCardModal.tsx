import styled from "styled-components";
import { CardIcon, ChevronSmallDown, CloseIcon } from "../../Icons";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 20, 30, 0.45);
  display: grid;
  place-items: center;
  z-index: 40;
`;

const Modal = styled.div`
  width: 380px;
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
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SubTitle = styled.div`
  font-size: 11px;
  color: #8c8c9a;
  margin-top: 4px;
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

const Section = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 10px;
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
  color: #9a9aac;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  background: #f7f8fc;
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

export function AddNewCardModal() {
  return (
    <Overlay>
      <Modal>
        <Header>
          <div>
            <Title>
              <CardIcon /> Add New Card
            </Title>
            <SubTitle>we'll email them instructions and a link to create an account.</SubTitle>
          </div>
          <CloseButton type="button">
            <CloseIcon />
          </CloseButton>
        </Header>

        <Content>
          <Section>
            <SectionHeader>
              <CardIcon /> Account Details
            </SectionHeader>
            <SectionSub>Enter your shipment details carefully</SectionSub>
            <Field>
              Account Holder Name<Required>*</Required>
              <Input>Search by status</Input>
            </Field>
            <Field>
              Bank Name<Required>*</Required>
              <Input>Search by status</Input>
            </Field>
            <Field>
              Account TypeAccount Type<Required>*</Required>
              <Input>
                Select option <ChevronSmallDown />
              </Input>
            </Field>
          </Section>

          <Section>
            <SectionHeader>
              <CardIcon /> Banking Info
            </SectionHeader>
            <SectionSub>Enter your shipment details carefully</SectionSub>
            <Field>
              Account Number / IBAN<Required>*</Required>
              <Input>Search by status</Input>
            </Field>
            <Field>
              Routing Number / SWIFT / BIC<Required>*</Required>
              <Input>Search by status</Input>
            </Field>
            <Field>
              Currency<Required>*</Required>
              <Input>
                Select option <ChevronSmallDown />
              </Input>
            </Field>
            <Field>
              Country<Required>*</Required>
              <Input>
                English (US) <ChevronSmallDown />
              </Input>
            </Field>
          </Section>
        </Content>

        <Footer>
          <GhostButton type="button">Cancel</GhostButton>
          <PrimaryButton type="button">Add new card</PrimaryButton>
        </Footer>
      </Modal>
    </Overlay>
  );
}
