import styled from "styled-components";
import {
  ArrowLeft,
  ChevronSmallDown,
  FilterIcon,
  PlusIcon,
  SearchIcon,
  SunIcon,
  UsersIcon
} from "../../Icons";

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

const Board = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  padding: 12px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: grid;
  gap: 10px;
  background: #f7f8fc;
  border-radius: 12px;
  padding: 10px;
`;

const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #3a3a44;
`;

const ColumnLeft = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const CountBadge = styled.span<{ tone?: "pink" | "blue" | "orange" | "green" }>`
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 8px;
  background: ${({ tone }) =>
    tone === "pink" ? "#ffe7ec" : tone === "blue" ? "#eaf1ff" : tone === "orange" ? "#fff3e0" : "#e6f8ee"};
  color: ${({ tone }) =>
    tone === "pink" ? "#e05555" : tone === "blue" ? "#4f7cff" : tone === "orange" ? "#ff9f43" : "#1d9b5c"};
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 10px;
  display: grid;
  gap: 6px;
`;

const CardDate = styled.div`
  font-size: 10px;
  color: #8c8c9a;
`;

const CardTitle = styled.div`
  font-size: 12px;
  color: #2f2f3a;
  font-weight: 600;
`;

const CardSub = styled.div`
  font-size: 10px;
  color: #9a9aac;
`;

const ChecklistRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  color: #8c8c9a;
`;

const Bar = styled.div<{ tone?: "orange" | "green" }>`
  height: 4px;
  border-radius: 999px;
  background: #eef0f6;
  overflow: hidden;
  flex: 1;
`;

const BarFill = styled.span<{ width: string; tone?: "orange" | "green" }>`
  display: block;
  height: 100%;
  width: ${({ width }) => width};
  background: ${({ tone }) => (tone === "green" ? "#22c55e" : "#ffb44d")};
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 10px;
  color: #8c8c9a;
`;

const SmallIcons = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const Tiny = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  border-radius: 8px;
  background: #f4f5fb;
  color: #7a7a88;
`;

const CardAvatars = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CardAvatar = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #d7d9e8;
  border: 2px solid #ffffff;
`;

const items = {
  todo: [
    { id: 1, date: "May 26, 2025", title: "Design Home page W...", sub: "Discuss layout with the marketing...", check: true },
    { id: 2, date: "May 26, 2025", title: "Design Home page W...", sub: "Discuss layout with the marketing...", check: false },
    { id: 3, date: "May 26, 2025", title: "Design Home page W...", sub: "Discuss layout with the marketing...", check: false },
    { id: 4, date: "May 26, 2025", title: "Design Home page W...", sub: "Discuss layout with the marketing...", check: false }
  ],
  progress: [
    { id: 5, date: "May 26, 2025", title: "Design Home page W...", sub: "Discuss layout with the marketing...", check: false },
    { id: 6, date: "May 26, 2025", title: "Design Home page W...", sub: "Discuss layout with the marketing...", check: true }
  ],
  review: [
    { id: 7, date: "May 26, 2025", title: "Design Home page W...", sub: "Discuss layout with the marketing...", check: false },
    { id: 8, date: "May 26, 2025", title: "Design Home page W...", sub: "Discuss layout with the marketing...", check: false },
    { id: 9, date: "May 26, 2025", title: "Design Home page W...", sub: "Discuss layout with the marketing...", check: false }
  ],
  done: [{ id: 10, date: "May 26, 2025", title: "Design Home page W...", sub: "Discuss layout with the marketing...", check: true }]
};

export function SupportBoardPage() {
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
          <Tab active>
            <UsersIcon />
            Board
          </Tab>
          <Tab>List</Tab>
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

      <Board>
        <Columns>
          <Column>
            <ColumnHeader>
              <ColumnLeft>
                <PlusIcon /> To-do <CountBadge tone="pink">8</CountBadge>
              </ColumnLeft>
            </ColumnHeader>
            {items.todo.map((item) => (
              <Card key={item.id}>
                <CardDate>{item.date}</CardDate>
                <CardTitle>{item.title}</CardTitle>
                <CardSub>{item.sub}</CardSub>
                {item.check && (
                  <ChecklistRow>
                    <Tiny>Checklist</Tiny>
                  <Bar>
                    <BarFill width="60%" tone="orange" />
                  </Bar>
                    3/4
                  </ChecklistRow>
                )}
                <CardFooter>
                  <SmallIcons>
                    <Tiny>3</Tiny>
                    <Tiny>6</Tiny>
                  </SmallIcons>
                  <CardAvatars>
                    <CardAvatar />
                    <CardAvatar />
                    <CardAvatar />
                  </CardAvatars>
                </CardFooter>
              </Card>
            ))}
          </Column>

          <Column>
            <ColumnHeader>
              <ColumnLeft>
                <PlusIcon /> In Progress <CountBadge tone="blue">2</CountBadge>
              </ColumnLeft>
            </ColumnHeader>
            {items.progress.map((item) => (
              <Card key={item.id}>
                <CardDate>{item.date}</CardDate>
                <CardTitle>{item.title}</CardTitle>
                <CardSub>{item.sub}</CardSub>
                {item.check && (
                  <ChecklistRow>
                    <Tiny>Checklist</Tiny>
                  <Bar>
                    <BarFill width="75%" tone="orange" />
                  </Bar>
                    3/6
                  </ChecklistRow>
                )}
                <CardFooter>
                  <SmallIcons>
                    <Tiny>3</Tiny>
                    <Tiny>6</Tiny>
                  </SmallIcons>
                  <CardAvatars>
                    <CardAvatar />
                    <CardAvatar />
                    <CardAvatar />
                  </CardAvatars>
                </CardFooter>
              </Card>
            ))}
          </Column>

          <Column>
            <ColumnHeader>
              <ColumnLeft>
                <PlusIcon /> Needs Review <CountBadge tone="orange">3</CountBadge>
              </ColumnLeft>
            </ColumnHeader>
            {items.review.map((item) => (
              <Card key={item.id}>
                <CardDate>{item.date}</CardDate>
                <CardTitle>{item.title}</CardTitle>
                <CardSub>{item.sub}</CardSub>
                <CardFooter>
                  <SmallIcons>
                    <Tiny>3</Tiny>
                    <Tiny>6</Tiny>
                  </SmallIcons>
                  <CardAvatars>
                    <CardAvatar />
                    <CardAvatar />
                  </CardAvatars>
                </CardFooter>
              </Card>
            ))}
          </Column>

          <Column>
            <ColumnHeader>
              <ColumnLeft>
                <PlusIcon /> Done <CountBadge tone="green">1</CountBadge>
              </ColumnLeft>
            </ColumnHeader>
            {items.done.map((item) => (
              <Card key={item.id}>
                <CardDate>{item.date}</CardDate>
                <CardTitle>{item.title}</CardTitle>
                <CardSub>{item.sub}</CardSub>
                <ChecklistRow>
                  <Tiny>Checklist</Tiny>
                  <Bar>
                    <BarFill width="100%" tone="green" />
                  </Bar>
                  4/4
                </ChecklistRow>
                <CardFooter>
                  <SmallIcons>
                    <Tiny>3</Tiny>
                    <Tiny>6</Tiny>
                  </SmallIcons>
                  <CardAvatars>
                    <CardAvatar />
                  </CardAvatars>
                </CardFooter>
              </Card>
            ))}
          </Column>
        </Columns>
      </Board>
    </Wrapper>
  );
}
