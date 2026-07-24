import styled, { css } from "styled-components";
import { CloseIcon, TicketIcon } from "../Icons";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 20, 30, 0.45);
  display: grid;
  place-items: center;
  z-index: 40;
`;

const Modal = styled.div`
  width: 520px;
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
  max-height: 76vh;
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

const TicketRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 12px;
  color: #6d6d7e;
  margin-bottom: 10px;
`;

const TicketId = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #1f1f28;
`;

const Chip = styled.span`
  background: #f1f2f7;
  border-radius: 999px;
  padding: 4px 8px;
  font-size: 10px;
  color: #7d7d8c;
`;

const StatusChip = styled.span`
  background: #e9f0ff;
  color: #4f7cff;
  border-radius: 999px;
  padding: 4px 10px;
  font-size: 10px;
`;

const FieldsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Field = styled.div`
  font-size: 11px;
  color: #7c7c8c;
`;

const inputStyles = css`
  width: 100%;
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  height: 32px;
  padding: 0 10px;
  font-size: 12px;
  color: #3a3a44;
`;

const Select = styled.select`
  ${inputStyles}
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  ${inputStyles}
  height: 80px;
  resize: none;
  padding: 8px 10px;
`;

const Helper = styled.div`
  font-size: 10px;
  color: #9a9aac;
  margin-top: 4px;
`;

const Section = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 10px 12px;
  margin-bottom: 12px;
`;

const SectionTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #1f1f28;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
`;

const NoteRow = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 11px;
  color: #9a9aac;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NoteCard = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 11px;
  color: #3a3a44;
  margin-bottom: 8px;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 10px;
`;

const Tab = styled.div<{ active?: boolean }>`
  border: 1px solid #ececf3;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 11px;
  text-align: center;
  background: ${({ active }) => (active ? "#ffffff" : "#f7f7fc")};
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

export function CreateTechnicalIssueModal() {
  return (
    <Overlay>
      <Modal>
        <Header>
          <Title>Create new legal Issue</Title>
          <CloseButton type="button">
            <CloseIcon />
          </CloseButton>
        </Header>
        <Content>
          <Banner>
            <TicketIcon /> You're creating a ticket for :
            <Avatar /> Helinda PhamMD
            <span style={{ marginLeft: "auto" }}>x</span>
          </Banner>

          <TicketRow>
            <TicketId>#TC-21</TicketId>
            <span>Intellectual Property / Copyright</span>
            <StatusChip>To do</StatusChip>
          </TicketRow>

          <FieldsGrid>
            <Field>
              Ticket type
              <Select>
                <option>Legal</option>
              </Select>
            </Field>
            <Field>
              Priority
              <Select>
                <option>Hight</option>
              </Select>
            </Field>
            <Field>
              Assigned to
              <Select>
                <option>Elina James</option>
              </Select>
            </Field>
          </FieldsGrid>

          <TwoCol>
            <Field>
              Creation date
              <Select>
                <option>Order Date: April 11, 2025</option>
              </Select>
            </Field>
            <Field>
              Due date
              <Select>
                <option>April 13, 2025</option>
              </Select>
            </Field>
          </TwoCol>

          <Field>
            Ticket Description
            <TextArea defaultValue="Lorem ipsum dolor sit amet consectetur. Sollicitudin varius et erat egestas. Nisl vulputate dolor dignissim elementum posuere aliquam. Praesent aliquam viverra tristique convallis eu. Diam turpis nunc mauris auctor dignissim a elementum massa." />
            <Helper>120/200</Helper>
          </Field>

          <Section>
            <SectionTitle>Detailed Informations</SectionTitle>
            <Field>
              What legal basis or rights are claimed (if applicable)
              <TextArea defaultValue="We are submitting a formal notice regarding a potential copyright infringement involving one of the products listed on your platform. The product titled \"UltraPro Designer Pack\" appears to use proprietary assets owned by our company without authorization." />
              <Helper>120/200</Helper>
            </Field>
            <TwoCol>
              <Field>
                Who/what it involves
                <TextArea defaultValue="Store owner \"PixelBoost Studio\" (Store ID: 3099)" />
                <Helper>120/200</Helper>
              </Field>
              <Field>
                What action they are requesting
                <TextArea defaultValue="Immediate removal of the product and a written confirmation within 48 hours" />
                <Helper>120/200</Helper>
              </Field>
            </TwoCol>
          </Section>

          <Section>
            <SectionTitle>Notes</SectionTitle>
            <NoteRow>
              <span>Add a note</span>
              <span>+</span>
            </NoteRow>
          </Section>

          <Tabs>
            <Tab active>Comments</Tab>
            <Tab>Attachements</Tab>
          </Tabs>

          <div style={{ fontSize: 12, color: "#3a3a44", marginBottom: 8 }}>
            Comments <span style={{ color: "#9a9aac" }}>(0)</span>
          </div>
          <NoteRow>
            <span>Add a comment</span>
            <span>+</span>
          </NoteRow>
        </Content>
        <Footer>
          <GhostButton type="button">Cancel</GhostButton>
          <PrimaryButton type="button">Add new ticket</PrimaryButton>
        </Footer>
      </Modal>
    </Overlay>
  );
}
