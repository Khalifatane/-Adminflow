import styled from "styled-components";
import {
  ArrowLeft,
  ChevronSmallDown,
  FilterIcon,
  SearchIcon,
  SunIcon
} from "../../Icons";

const Wrapper = styled.section`
  display: grid;
  gap: 16px;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
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

const TitleBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 18px;
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
  min-width: 180px;
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

const Card = styled.section`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
  overflow: hidden;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid #f0f1f5;
`;

const HeaderLeft = styled.div`
  display: grid;
  gap: 4px;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: #ff6363;
  color: #ffffff;
  font-size: 10px;
  font-weight: 600;
`;

const Sub = styled.div`
  font-size: 11px;
  color: #9a9aac;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 16px;
  color: #b4b4c2;
  cursor: pointer;
`;

const CardControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
`;

const FilterButton = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  color: #6f6f7e;
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const ReadButton = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  color: #6f6f7e;
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const List = styled.div`
  display: grid;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 12px;
  padding: 14px 16px;
  border-top: 1px solid #f0f1f5;
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd1d1, #ffc48a);
`;

const ItemContent = styled.div`
  display: grid;
  gap: 6px;
`;

const ItemTitle = styled.div`
  font-size: 12px;
  color: #2f2f3a;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ff6363;
  display: inline-block;
`;

const ItemText = styled.div`
  font-size: 11px;
  color: #8c8c9a;
`;

const Time = styled.div`
  font-size: 10px;
  color: #9a9aac;
`;

const Attachment = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 6px 8px;
  font-size: 11px;
  color: #6f6f7e;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
`;

const DividerRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 16px 12px;
  color: #9a9aac;
  font-size: 10px;
`;

const DividerLine = styled.div`
  height: 1px;
  background: #ececf3;
  flex: 1;
`;

const ReplyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f7f8fc;
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 8px;
`;

const ReplyInput = styled.input`
  border: none;
  outline: none;
  background: transparent;
  font-size: 11px;
  color: #6f6f7e;
  flex: 1;
`;

const ReplyButton = styled.button`
  border: 1px solid #e2e3ef;
  background: #ffffff;
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 11px;
  color: #6f6f7e;
`;

const FooterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px 16px;
  background: #f9fafc;
  border-top: 1px solid #ececf3;
  font-size: 11px;
  color: #8c8c9a;
`;

const FooterHint = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Key = styled.span`
  border: 1px solid #dfe1ec;
  background: #ffffff;
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 10px;
  color: #6f6f7e;
`;

const ManageLink = styled.button`
  border: none;
  background: transparent;
  color: #6f4df2;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

export function NotificationsPage() {
  return (
    <Wrapper>
      <TopBar>
        <TopLeft>
          <BackButton type="button">
            <ArrowLeft />
          </BackButton>
          <TitleBlock>
            <h1>Notifications</h1>
            <p>Monitor active promotions across your stores. Boost visibility, apply discounts, and increase conversions.</p>
          </TitleBlock>
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
                Store Name
                <span>Euclid Avenu,CA</span>
              </div>
            </MarketInfo>
            <ChevronSmallDown />
          </MarketSelect>
        </TopRight>
      </TopBar>

      <Card>
        <CardHeader>
          <HeaderLeft>
            <TitleRow>
              Notifications <Badge>3</Badge>
            </TitleRow>
            <Sub>See all your notifications</Sub>
          </HeaderLeft>
          <CloseButton type="button">x</CloseButton>
        </CardHeader>

        <CardControls>
          <FilterButton type="button">
            <FilterIcon /> Filter
          </FilterButton>
          <ReadButton type="button">? Mark all as read</ReadButton>
        </CardControls>

        <List>
          <Item>
            <Avatar />
            <ItemContent>
              <ItemTitle>
                Santi Cazorla
                <span style={{ fontWeight: 400, color: "#8c8c9a" }}>reply your comment in knowledgebase ad...</span>
                <Dot />
              </ItemTitle>
              <ItemText>Praesent ultricies lacus in ligula volutpat feugiat.</ItemText>
              <Time>1 June 2025, 12:20 AM</Time>
            </ItemContent>
          </Item>

          <Item>
            <Avatar />
            <ItemContent>
              <ItemTitle>
                Santi Cazorla
                <span style={{ fontWeight: 400, color: "#8c8c9a" }}>upload a document in ticket.</span>
                <Dot />
              </ItemTitle>
              <ItemText>Praesent ultricies lacus in ligula volutpat feugiat.</ItemText>
              <Time>1 June 2025, 12:20 AM</Time>
              <Attachment>Q3 campaign_strategic.csv 12MB</Attachment>
            </ItemContent>
          </Item>

          <Item>
            <Avatar />
            <ItemContent>
              <ItemTitle>
                Santi Cazorla
                <span style={{ fontWeight: 400, color: "#8c8c9a" }}>reply your comment in knowledgebase ad...</span>
                <Dot />
              </ItemTitle>
              <Time>1 June 2025, 12:20 AM</Time>
            </ItemContent>
          </Item>

          <DividerRow>
            <DividerLine />
            12 May 2025
            <DividerLine />
          </DividerRow>

          <Item>
            <Avatar />
            <ItemContent>
              <ItemTitle>
                Santi Cazorla
                <span style={{ fontWeight: 400, color: "#8c8c9a" }}>Added a comment on your ticket.</span>
              </ItemTitle>
              <ItemText>Praesent ultricies lacus in ligula volutpat feugiat.</ItemText>
              <Time>1 June 2025, 12:20 AM</Time>
              <ReplyRow>
                <ReplyInput placeholder="Praesent ultricies lacus in ligula velum Praesent ultricies lacus in ligula volu..." />
                <ReplyButton type="button">Reply</ReplyButton>
              </ReplyRow>
            </ItemContent>
          </Item>

          <Item>
            <Avatar />
            <ItemContent>
              <ItemTitle>
                Santi Cazorla
                <span style={{ fontWeight: 400, color: "#8c8c9a" }}>reply your comment in knowledgebase ad...</span>
                <Dot />
              </ItemTitle>
              <ItemText>Praesent ultricies lacus in ligula volutpat feugiat.</ItemText>
              <Time>1 June 2025, 12:20 AM</Time>
            </ItemContent>
          </Item>

          <Item>
            <Avatar />
            <ItemContent>
              <ItemTitle>
                Santi Cazorla
                <span style={{ fontWeight: 400, color: "#8c8c9a" }}>reply your comment in knowledgebase ad...</span>
                <Dot />
              </ItemTitle>
              <ItemText>Praesent ultricies lacus in ligula volutpat feugiat.</ItemText>
              <Time>1 June 2025, 12:20 AM</Time>
            </ItemContent>
          </Item>

          <Item>
            <Avatar />
            <ItemContent>
              <ItemTitle>
                Santi Cazorla
                <span style={{ fontWeight: 400, color: "#8c8c9a" }}>upload a document in ticket.</span>
              </ItemTitle>
              <ItemText>Praesent ultricies lacus in ligula volutpat feugiat.</ItemText>
              <Time>1 June 2025, 12:20 AM</Time>
              <Attachment>Q3 campaign_strategic.csv 12MB</Attachment>
            </ItemContent>
          </Item>
        </List>

        <FooterBar>
          <FooterHint>
            Use <Key>?</Key> <Key>?</Key> to navigate
          </FooterHint>
          <ManageLink type="button">Manage Notification</ManageLink>
        </FooterBar>
      </Card>
    </Wrapper>
  );
}
