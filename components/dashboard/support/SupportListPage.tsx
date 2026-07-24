import styled from "styled-components";
import {
  ArrowLeft,
  ChevronSmallDown,
  FilterIcon,
  PlusIcon,
  SearchIcon,
  SunIcon
} from "../../Icons";
import { InviteModal } from "./InviteModal";

const Wrapper = styled.section`
  display: grid;
  gap: 14px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const TopLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const BackButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e2e3ef;
  background: #ffffff;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const TopTitle = styled.div`
  h1 {
    font-size: 18px;
    margin: 0;
    color: #1f1f28;
  }

  p {
    margin: 4px 0 0;
    font-size: 12px;
    color: #8c8c9a;
  }
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid #e2e3ef;
  background: #ffffff;
  display: grid;
  place-items: center;
  cursor: pointer;
  color: #70708a;
`;

const MarketSelect = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #e2e3ef;
  background: #ffffff;
  padding: 8px 12px;
  border-radius: 12px;
  cursor: pointer;
  min-width: 190px;
  justify-content: space-between;
`;

const MarketInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;

  div {
    font-size: 12px;
    font-weight: 600;
    color: #2a2a34;
  }

  span {
    display: block;
    font-size: 11px;
    color: #9a9aac;
    font-weight: 400;
  }
`;

const MarketIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background: #fff3e8;
  display: grid;
  place-items: center;
  color: #ff8a2a;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const TitleBlock = styled.div`
  h2 {
    margin: 0 0 4px;
    font-size: 16px;
    color: #1f1f28;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: #8c8c9a;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MiniAvatar = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #d7d9e8;
  border: 2px solid #ffffff;
`;

const PurpleButton = styled.button`
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 6px 16px rgba(111, 77, 242, 0.25);
`;

const GhostButton = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  color: #5a5a6b;
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const DotButton = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 8px;
  width: 32px;
  height: 30px;
  display: grid;
  place-items: center;
  color: #9a9aac;
`;

const Tab = styled.button<{ active?: boolean }>`
  border: 1px solid #ececf3;
  background: ${({ active }) => (active ? "#f2edff" : "#ffffff")};
  color: ${({ active }) => (active ? "#6f4df2" : "#7a7a88")};
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Search = styled.label`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 220px;
  color: #9a9aac;

  input {
    border: none;
    outline: none;
    font-size: 12px;
    flex: 1;
    background: transparent;
  }
`;

const ControlGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TableCard = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  padding: 12px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const SectionBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6f4df2;
  font-size: 11px;
  margin-bottom: 10px;
`;

const StatusChip = styled.span`
  border: 1px solid #e6e9f5;
  background: #f4f7ff;
  color: #4f7cff;
  border-radius: 8px;
  padding: 3px 6px;
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Count = styled.span`
  border: 1px solid #ececf3;
  background: #f7f8fc;
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 10px;
  color: #7c7c8c;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  font-size: 11px;
  color: #8c8c9a;
  font-weight: 500;
  padding: 10px 8px;
`;

const Td = styled.td`
  font-size: 11px;
  color: #3a3a44;
  padding: 10px 8px;
  border-top: 1px solid #f0f1f5;
`;

const RowCheck = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: 1px solid #d6d6e3;
  background: #ffffff;
`;

const Drag = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 3px;
  border: 1px solid #e2e3ef;
  background: #f7f8fc;
`;

const TaskTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Badges = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Badge = styled.span`
  border: 1px solid #e2e3ef;
  background: #f7f8fc;
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 10px;
  color: #7c7c8c;
`;

const AvatarStack = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const AssigneeAvatar = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #cfd4ea;
  border: 2px solid #ffffff;
`;

const Priority = styled.span<{ tone?: "high" | "normal" | "low" }>`
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 8px;
  background: ${({ tone }) =>
    tone === "high" ? "#ffe7ec" : tone === "normal" ? "#e7f7ec" : "#eaf1ff"};
  color: ${({ tone }) =>
    tone === "high" ? "#e05555" : tone === "normal" ? "#2aa96b" : "#4f7cff"};
`;

const Progress = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ProgressBar = styled.div`
  height: 4px;
  width: 90px;
  background: #eef0f6;
  border-radius: 999px;
  overflow: hidden;
`;

const ProgressFill = styled.span<{ width: string; tone?: "green" | "orange" }>`
  display: block;
  height: 100%;
  width: ${({ width }) => width};
  background: ${({ tone }) => (tone === "green" ? "#22c55e" : "#ffb44d")};
`;

const AddTask = styled.button`
  border: none;
  background: transparent;
  color: #8c8c9a;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 8px;
`;

const FilterPopover = styled.div`
  position: absolute;
  right: 16px;
  top: 210px;
  width: 240px;
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(18, 18, 32, 0.12);
  padding: 12px;
  display: grid;
  gap: 8px;
  z-index: 10;
`;

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #3a3a44;
  font-weight: 600;
`;

const FilterField = styled.div`
  display: grid;
  gap: 6px;
  font-size: 11px;
  color: #7c7c8c;
`;

const FilterInput = styled.div`
  border: 1px solid #ececf3;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 11px;
  color: #9a9aac;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FilterFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-top: 4px;
`;

const FilterButton = styled.button<{ primary?: boolean }>`
  border: 1px solid #ececf3;
  background: ${({ primary }) => (primary ? "#6f4df2" : "#f7f8fc")};
  color: ${({ primary }) => (primary ? "#ffffff" : "#6d6d7e")};
  border-radius: 8px;
  height: 30px;
  font-size: 11px;
`;

export function SupportListPage() {
  return (
    <Wrapper>
      <TopBar>
        <TopLeft>
          <BackButton type="button">
            <ArrowLeft />
          </BackButton>
          <TopTitle>
            <h1>Categories / Sub-Categories</h1>
            <p>Manage all product categories and their nested subcategories from one place.</p>
          </TopTitle>
        </TopLeft>
        <TopRight>
          <IconButton type="button">
            <SearchIcon />
          </IconButton>
          <MarketSelect type="button">
            <MarketInfo>
              <MarketIcon>
                <SunIcon />
              </MarketIcon>
              <div>
                Market Name
                <span>Euclid Avenu,CA</span>
              </div>
            </MarketInfo>
            <ChevronSmallDown />
          </MarketSelect>
        </TopRight>
      </TopBar>

      <Header>
        <TitleBlock>
          <h2>Support Tasks Hub</h2>
          <p>Short Description will be placed here</p>
        </TitleBlock>
        <HeaderActions>
          <AvatarGroup>
            <MiniAvatar />
            <MiniAvatar />
            <MiniAvatar />
          </AvatarGroup>
          <PurpleButton type="button">
            <PlusIcon /> Invite new Member
          </PurpleButton>
          <GhostButton type="button">Share</GhostButton>
        </HeaderActions>
      </Header>

      <Controls>
        <Tabs>
          <DotButton type="button">...</DotButton>
          <Tab>Board</Tab>
          <Tab active>List</Tab>
          <Tab>Timeline</Tab>
        </Tabs>
        <ControlGroup>
          <Search>
            <SearchIcon />
            <input placeholder="Search..." />
          </Search>
          <GhostButton type="button">
            <FilterIcon /> Filter
          </GhostButton>
          <GhostButton type="button">
            Sort <ChevronSmallDown />
          </GhostButton>
        </ControlGroup>
      </Controls>

      <TableCard>
        <SectionBar>
          <StatusChip>In Progress</StatusChip>
          <Count>2</Count>
        </SectionBar>
        <Table>
          <thead>
            <tr>
              <Th />
              <Th>Task</Th>
              <Th>Description</Th>
              <Th>Assignee</Th>
              <Th>Due Date</Th>
              <Th>Priority</Th>
              <Th>Progress</Th>
              <Th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>
                <RowCheck />
              </Td>
              <Td>
                <TaskTitle>
                  <Drag />
                  Wireframing
                  <Badges>
                    <Badge>3</Badge>
                  </Badges>
                </TaskTitle>
              </Td>
              <Td>-</Td>
              <Td>
                <AvatarStack>
                  <AssigneeAvatar />
                  <AssigneeAvatar />
                  <AssigneeAvatar />
                  <Badge>+9</Badge>
                </AvatarStack>
              </Td>
              <Td>February 12,2025</Td>
              <Td>
                <Priority tone="high">High</Priority>
              </Td>
              <Td>
                <Progress>
                  <ProgressBar>
                    <ProgressFill width="80%" tone="orange" />
                  </ProgressBar>
                  80%
                </Progress>
              </Td>
              <Td>...</Td>
            </tr>
            <tr>
              <Td>
                <RowCheck />
              </Td>
              <Td>
                <TaskTitle>
                  <Drag />
                  Wirefra...
                  <Badges>
                    <Badge>6</Badge>
                  </Badges>
                </TaskTitle>
              </Td>
              <Td>Discuss layout wit...</Td>
              <Td>
                <AvatarStack>
                  <AssigneeAvatar />
                  <AssigneeAvatar />
                  <AssigneeAvatar />
                  <Badge>+9</Badge>
                </AvatarStack>
              </Td>
              <Td>February 12,2025</Td>
              <Td>
                <Priority tone="normal">Normal</Priority>
              </Td>
              <Td>
                <Progress>
                  <ProgressBar>
                    <ProgressFill width="40%" tone="orange" />
                  </ProgressBar>
                  40%
                </Progress>
              </Td>
              <Td>...</Td>
            </tr>
            <tr>
              <Td>
                <RowCheck />
              </Td>
              <Td>
                <TaskTitle>
                  <Drag />
                  Wirefra...
                  <Badges>
                    <Badge>6</Badge>
                  </Badges>
                </TaskTitle>
              </Td>
              <Td>Discuss layout wit...</Td>
              <Td>
                <AvatarStack>
                  <AssigneeAvatar />
                  <AssigneeAvatar />
                  <AssigneeAvatar />
                  <Badge>+9</Badge>
                </AvatarStack>
              </Td>
              <Td>February 12,2025</Td>
              <Td>
                <Priority tone="low">Low</Priority>
              </Td>
              <Td>
                <Progress>
                  <ProgressBar>
                    <ProgressFill width="20%" tone="orange" />
                  </ProgressBar>
                  20
                </Progress>
              </Td>
              <Td>...</Td>
            </tr>
            <tr>
              <Td>
                <RowCheck />
              </Td>
              <Td>
                <TaskTitle>
                  <Drag />
                  Wirefra...
                  <Badges>
                    <Badge>6</Badge>
                  </Badges>
                </TaskTitle>
              </Td>
              <Td>Discuss layout wit...</Td>
              <Td>
                <AvatarStack>
                  <AssigneeAvatar />
                  <AssigneeAvatar />
                  <AssigneeAvatar />
                  <Badge>+9</Badge>
                </AvatarStack>
              </Td>
              <Td>February 12,2025</Td>
              <Td>
                <Priority tone="high">High</Priority>
              </Td>
              <Td>
                <Progress>
                  <ProgressBar>
                    <ProgressFill width="50%" tone="orange" />
                  </ProgressBar>
                  50%
                </Progress>
              </Td>
              <Td>...</Td>
            </tr>
          </tbody>
        </Table>
      </TableCard>
      <InviteModal />
    </Wrapper>
  );
}
