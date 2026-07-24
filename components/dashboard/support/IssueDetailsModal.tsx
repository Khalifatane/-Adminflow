import styled from "styled-components";
import { CloseIcon, SunIcon } from "../../Icons";

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
  max-height: 74vh;
  overflow: auto;
`;

const TicketFor = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 11px;
  color: #6f6f7e;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 8px;
  border-radius: 999px;
  background: #f2edff;
  color: #6f4df2;
  font-size: 10px;
`;

const TicketHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const TicketTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const Status = styled.span`
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 8px;
  background: #eaf1ff;
  color: #4f7cff;
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Field = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 11px;
  color: #7c7c8c;
  display: grid;
  gap: 4px;
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

const Assignees = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MiniAvatar = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #cfd4ea;
  border: 2px solid #ffffff;
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const ProgressRow = styled.div`
  margin: 8px 0 12px;
  font-size: 11px;
  color: #7c7c8c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const ProgressBar = styled.div`
  height: 4px;
  background: #eef0f6;
  border-radius: 999px;
  overflow: hidden;
  margin: 6px 0 0;
  flex: 1;
`;

const ProgressFill = styled.div`
  width: 80%;
  height: 100%;
  background: #ffb44d;
`;

const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid #ececf3;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 12px;
`;

const Tab = styled.button<{ active?: boolean }>`
  border: none;
  background: ${({ active }) => (active ? "#ffffff" : "#f7f8fc")};
  color: ${({ active }) => (active ? "#3a3a44" : "#9a9aac")};
  font-size: 11px;
  padding: 8px 0;
`;

const Section = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 10px 12px;
  margin-bottom: 12px;
`;

const SectionHeader = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #1f1f28;
  margin-bottom: 6px;
`;

const SectionHeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 6px;
`;

const Refine = styled.button`
  border: none;
  background: transparent;
  color: #8a67f4;
  font-size: 10px;
`;

const SectionSub = styled.div`
  font-size: 11px;
  color: #9a9aac;
  margin-bottom: 8px;
`;

const TwoCol = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const Input = styled.div`
  border: 1px solid #ececf3;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 11px;
  color: #4a4a58;
`;

const TextArea = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 11px;
  color: #7c7c8c;
  min-height: 70px;
`;

const Counter = styled.div`
  text-align: right;
  font-size: 10px;
  color: #9a9aac;
`;

const Notes = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 10px 12px;
  margin-bottom: 10px;
  background: #fafbff;
`;

const SubtasksHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #3a3a44;
  margin: 6px 0 8px;
`;

const SubtaskCount = styled.span`
  border: 1px solid #ececf3;
  background: #f7f8fc;
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 10px;
  color: #7c7c8c;
`;

const SubtaskList = styled.div`
  display: grid;
  gap: 12px;
`;

const SubtaskItem = styled.div`
  border-bottom: 1px solid #f0f1f5;
  padding-bottom: 10px;
  display: grid;
  gap: 6px;
`;

const SubtaskTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #2f2f3a;
`;

const Checkbox = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: 1px solid #d6d6e3;
  background: #ffffff;
`;

const DueTag = styled.span`
  margin-left: auto;
  border: 1px solid #ececf3;
  border-radius: 8px;
  padding: 3px 6px;
  font-size: 10px;
  color: #7c7c8c;
  background: #f7f8fc;
`;

const SubtaskDesc = styled.div`
  font-size: 11px;
  color: #8c8c9a;
`;

const AssignedRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: #8c8c9a;
`;

const AssignedAvatars = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const AssignedAvatar = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #cfd4ea;
  border: 2px solid #ffffff;
`;

const ActivityList = styled.div`
  display: grid;
  gap: 10px;
`;

const ActivitySection = styled.div`
  display: grid;
  gap: 8px;
`;

const ActivityTitle = styled.div`
  font-size: 12px;
  color: #3a3a44;
  font-weight: 600;
`;

const ActivityItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  font-size: 11px;
  color: #7c7c8c;
`;

const ActivityAvatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #d7d9e8;
`;

const ActivityText = styled.div`
  color: #5a5a6b;
  span {
    color: #9a9aac;
  }
`;

const ActivityTime = styled.div`
  font-size: 10px;
  color: #9a9aac;
  margin-top: 2px;
`;

const FileCard = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 8px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #5a5a6b;
`;

const FileIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: #ffe7ec;
  color: #e05555;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 10px;
`;

const NotesTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #1f1f28;
  margin-bottom: 8px;
`;

const NotesCard = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  background: #ffffff;
  padding: 10px;
  font-size: 11px;
  color: #4a4a58;
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

export function IssueDetailsModal() {
  return (
    <Overlay>
      <Modal>
        <Header>
          <Title>Issue Details</Title>
          <CloseButton type="button">
            <CloseIcon />
          </CloseButton>
        </Header>
        <Content>
          <TicketFor>
            <Badge>!</Badge>
            This ticket is for:
            <SunIcon /> Market Name
          </TicketFor>

          <TicketHeader>
            <TicketTitle>#TC-21 Request Data - GDPR Compliance</TicketTitle>
            <Status>To do</Status>
          </TicketHeader>

          <Split>
            <Field>
              Ticket type
              <Select>
                Legal <ChevronSmallDown />
              </Select>
            </Field>
            <Field>
              Priority
              <Select>
                High <ChevronSmallDown />
              </Select>
            </Field>
            <Field>
              Assigned to
              <Assignees>
                <MiniAvatar />
                <MiniAvatar />
                <MiniAvatar />
                <MiniAvatar />
                <Badge>+9</Badge>
              </Assignees>
            </Field>
          </Split>

          <DateGrid>
            <Field>
              Creation date
              <div>Order Date: April 11, 2025</div>
            </Field>
            <Field>
              Due date
              <div>Mars 11, 2025</div>
            </Field>
          </DateGrid>

          <ProgressRow>
            <span>In Progress</span>
            <ProgressBar>
              <ProgressFill />
            </ProgressBar>
            <span>80%</span>
          </ProgressRow>

          <Tabs>
            <Tab>Details</Tab>
            <Tab>SubTasks</Tab>
            <Tab active>Activity</Tab>
            <Tab>Attachements</Tab>
          </Tabs>

          <ActivityList>
            <ActivitySection>
              <ActivityTitle>Today</ActivityTitle>
              <ActivityItem>
                <ActivityAvatar />
                <div>
                  <ActivityText>
                    Talan Korsgaard <span>Changes the status of "Request Data - GDPR Compliance" from to do to In progress.</span>
                  </ActivityText>
                  <ActivityTime>10:27 AM</ActivityTime>
                </div>
              </ActivityItem>
              <ActivityItem>
                <ActivityAvatar />
                <div>
                  <ActivityText>
                    Talan Korsgaard <span>Added a reaction in the comments</span>
                  </ActivityText>
                  <ActivityTime>10:27 AM</ActivityTime>
                </div>
              </ActivityItem>
              <ActivityItem>
                <ActivityAvatar />
                <div>
                  <ActivityText>
                    Talan Korsgaard <span>Uploaded new file</span>
                  </ActivityText>
                  <FileCard>
                    <FileIcon>PDF</FileIcon>
                    Data
                    <span>PDF 2.1mb</span>
                  </FileCard>
                  <ActivityTime>10:27 AM</ActivityTime>
                </div>
              </ActivityItem>
            </ActivitySection>
            <ActivitySection>
              <ActivityTitle>Yesterday</ActivityTitle>
              <ActivityItem>
                <ActivityAvatar />
                <div>
                  <ActivityText>
                    Talan Korsgaard <span>Changes the status of "Request Data - GDPR Compliance" from to do to In progress.</span>
                  </ActivityText>
                </div>
              </ActivityItem>
            </ActivitySection>
          </ActivityList>
        </Content>
        <Footer>
          <GhostButton type="button">Cancel</GhostButton>
          <PrimaryButton type="button">Add new ticket</PrimaryButton>
        </Footer>
      </Modal>
    </Overlay>
  );
}
