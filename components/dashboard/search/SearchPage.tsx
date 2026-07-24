import styled from "styled-components";
import {
  BoxIcon,
  ChevronSmallDown,
  CloseIcon,
  PlugIcon,
  SearchIcon,
  StoreIcon,
  TagIcon,
  TicketIcon,
  TruckIcon,
  UsersIcon
} from "../../Icons";

const Wrapper = styled.section`
  display: grid;
  gap: 16px;
`;

const SearchBar = styled.div`
  border: 1px solid #6ed38f;
  background: #ffffff;
  border-radius: 12px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 12px;
  color: #3a3a44;
`;

const SearchTag = styled.span`
  background: #efe8ff;
  color: #6f4df2;
  font-size: 11px;
  padding: 4px 8px;
  border-radius: 8px;
`;

const SearchHint = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  color: #8c8c9a;
`;

const Key = styled.span`
  border: 1px solid #e2e3ef;
  background: #f7f8fc;
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 10px;
  color: #7a7a88;
`;

const CloseHint = styled.div`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  color: #8c8c9a;
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  padding: 14px 16px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const SectionTitle = styled.div`
  font-size: 12px;
  color: #8c8c9a;
  margin-bottom: 10px;
`;

const ChipRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Chip = styled.button`
  border: 1px solid #e4e6f0;
  background: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 11px;
  color: #5a5a6b;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const List = styled.div`
  display: grid;
  gap: 8px;
`;

const ListItem = styled.div<{ active?: boolean }>`
  border-radius: 10px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${({ active }) => (active ? "#f3efff" : "transparent")};
`;

const Avatar = styled.div<{ tone?: "purple" | "gray" }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ tone }) => (tone === "purple" ? "#7c5cfa" : "#e9ecf5")};
  display: grid;
  place-items: center;
  color: #ffffff;
  font-size: 10px;
`;

const ItemText = styled.div`
  font-size: 11px;
  color: #3a3a44;
`;

const Highlight = styled.span`
  color: #6f4df2;
`;

const ItemRight = styled.div`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const SelectButton = styled.button`
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 10px;
`;

const KeyGroup = styled.div`
  display: inline-flex;
  gap: 4px;
`;

const TicketRow = styled.div`
  display: grid;
  gap: 10px;
`;

const Ticket = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  align-items: center;
  font-size: 11px;
`;

const TicketInfo = styled.div`
  display: grid;
  gap: 4px;
  color: #4a4a58;

  span {
    color: #8c8c9a;
  }
`;

const Status = styled.span<{ tone?: "todo" | "pending" | "done" }>`
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 8px;
  background: ${({ tone }) =>
    tone === "todo" ? "#eaf1ff" : tone === "pending" ? "#fff4e5" : "#e7f8ee"};
  color: ${({ tone }) =>
    tone === "todo" ? "#4f7cff" : tone === "pending" ? "#ff9f43" : "#1d9b5c"};
`;

const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
`;

const MiniAvatar = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #d7d9e8;
  border: 2px solid #ffffff;
`;

const ShowMore = styled.button`
  border: none;
  background: transparent;
  color: #43a46b;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const ClientRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
`;

const ClientAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd1d1, #ffc48a);
`;

const ClientInfo = styled.div`
  font-size: 12px;
  color: #3a3a44;

  span {
    display: block;
    font-size: 11px;
    color: #8c8c9a;
  }
`;

const ClientTag = styled.span<{ tone?: "premium" | "basic" }>`
  font-size: 10px;
  padding: 4px 8px;
  border-radius: 999px;
  background: ${({ tone }) => (tone === "premium" ? "#efe7ff" : "#e8f1ff")};
  color: ${({ tone }) => (tone === "premium" ? "#6f4df2" : "#4f7cff")};
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #3a3a44;
  margin: 12px 0 6px;
`;

const SectionHeaderMuted = styled(SectionHeader)`
  color: #8c8c9a;
  font-size: 11px;
`;

const Counter = styled.span`
  border: 1px solid #ececf3;
  background: #f7f8fc;
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 10px;
  color: #7c7c8c;
`;

export function SearchPage() {
  return (
    <Wrapper>
      <SearchBar>
        <SearchIcon />
        <SearchTag>Ale</SearchTag>
        <SearchInput placeholder="Search..." />
        <SearchHint>
          <Key>To Navigate</Key>
          <Key>To Select</Key>
        </SearchHint>
        <CloseHint>
          To Close
          <Key>esc</Key>
        </CloseHint>
        <CloseIcon />
      </SearchBar>

      <Card>
        <SectionTitle>Im looking for...</SectionTitle>
        <ChipRow>
          <Chip>
            <TagIcon /> Sales
          </Chip>
          <Chip>
            <BoxIcon /> Products
          </Chip>
          <Chip>
            <StoreIcon /> Markets
          </Chip>
          <Chip>
            <UsersIcon /> Clients
          </Chip>
          <Chip>
            <PlugIcon /> Integrations
          </Chip>
          <Chip>
            <TruckIcon /> Supplier
          </Chip>
          <Chip>
            <TicketIcon /> Support tickets
          </Chip>
        </ChipRow>

        <SectionHeader>
          Last Search <Counter>3</Counter>
        </SectionHeader>
        <List>
          <ListItem active>
            <Avatar tone="purple">Q</Avatar>
            <ItemText>Alex Wassabi</ItemText>
            <ItemRight>
              <SelectButton>Select</SelectButton>
            </ItemRight>
          </ListItem>
          <ListItem>
            <Avatar tone="gray" />
            <ItemText>#1204EHJ29201</ItemText>
            <ItemRight>
              <KeyGroup>
                <Key>1</Key>
                <Key>+</Key>
                <Key>8</Key>
              </KeyGroup>
            </ItemRight>
          </ListItem>
          <ListItem>
            <Avatar tone="gray" />
            <ItemText>Market</ItemText>
            <ItemRight>
              <KeyGroup>
                <Key>2</Key>
                <Key>+</Key>
                <Key>8</Key>
              </KeyGroup>
            </ItemRight>
          </ListItem>
        </List>

        <SectionHeader>
          Support Tickets <Counter>3</Counter>
        </SectionHeader>
        <TicketRow>
          <Ticket>
            <Avatar tone="gray" />
            <TicketInfo>
              <div>
                <Highlight>Ale</Highlight> not triggering for low stock <Status tone="todo">To do</Status>
              </div>
              <span>Lorem ipsum dolor sit amet consectetur. Sollicitudin varius et erat egestas.</span>
            </TicketInfo>
            <AvatarGroup>
              <MiniAvatar />
              <MiniAvatar />
              <MiniAvatar />
            </AvatarGroup>
          </Ticket>
          <Ticket>
            <Avatar tone="gray" />
            <TicketInfo>
              <div>
                <Highlight>Ale</Highlight> not triggering for low stock <Status tone="pending">Pending</Status>
              </div>
              <span>Lorem ipsum dolor sit amet consectetur. Sollicitudin varius et erat egestas.</span>
            </TicketInfo>
            <AvatarGroup>
              <MiniAvatar />
              <MiniAvatar />
            </AvatarGroup>
          </Ticket>
          <Ticket>
            <Avatar tone="gray" />
            <TicketInfo>
              <div>
                <Highlight>Ale</Highlight> not triggering for low stock <Status tone="done">Done</Status>
              </div>
              <span>Lorem ipsum dolor sit amet consectetur. Sollicitudin varius et erat egestas.</span>
            </TicketInfo>
            <AvatarGroup>
              <MiniAvatar />
              <MiniAvatar />
              <MiniAvatar />
            </AvatarGroup>
          </Ticket>
        </TicketRow>
        <ShowMore type="button">
          Show more <ChevronSmallDown />
        </ShowMore>

        <SectionHeader>
          <UsersIcon /> Clients <Counter>3</Counter>
        </SectionHeader>
        <SectionHeaderMuted>
          <UsersIcon /> Clients <Counter>2</Counter>
        </SectionHeaderMuted>
        <ClientRow>
          <ClientAvatar />
          <ClientInfo>
            <Highlight>Ale</Highlight>x Wassabi
            <span>alex@alignui.com</span>
          </ClientInfo>
          <ClientTag tone="premium">Premium User</ClientTag>
        </ClientRow>
        <ClientRow>
          <ClientAvatar />
          <ClientInfo>
            <Highlight>Ale</Highlight>m Stanford
            <span>alem@alignui.com</span>
          </ClientInfo>
          <ClientTag tone="basic">Basic User</ClientTag>
        </ClientRow>
        <ShowMore type="button">
          Show more <ChevronSmallDown />
        </ShowMore>
      </Card>
    </Wrapper>
  );
}
