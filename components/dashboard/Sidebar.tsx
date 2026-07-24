import styled from "styled-components";
import {
  BellIcon,
  BoxIcon,
  CardIcon,
  ChevronSmallDown,
  ChevronSmallRight,
  DashboardIcon,
  PlugIcon,
  PromoIcon,
  SettingsIcon,
  StoreIcon,
  TagIcon,
  TicketIcon,
  TruckIcon,
  UsersIcon,
  SwirlLogo
} from "../Icons";

const Wrapper = styled.aside`
  width: 250px;
  background: #f9f9fd;
  border-right: 1px solid #ececf3;
  padding: 22px 16px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: 980px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ececf3;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 2px 6px;
`;

const BrandText = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #1f1f28;

  span {
    display: block;
    font-size: 11px;
    font-weight: 400;
    color: #8a8a9a;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const GroupTitle = styled.div`
  font-size: 11px;
  color: #a0a0b0;
  text-transform: none;
  margin: 6px 6px 4px;
`;

const NavList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const NavItem = styled.button<{ active?: boolean }>`
  border: none;
  background: ${({ active }) => (active ? "#ede7ff" : "transparent")};
  color: ${({ active }) => (active ? "#6f4df2" : "#6c6c7b")};
  font-weight: ${({ active }) => (active ? 600 : 500)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12.5px;

  &:hover {
    background: ${({ active }) => (active ? "#e6ddff" : "#f1f2f8")};
  }
`;

const NavLeft = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

const SubNav = styled.div`
  display: grid;
  gap: 4px;
  padding-left: 34px;
  margin-top: 2px;
`;

const SubItem = styled.button<{ active?: boolean }>`
  border: none;
  background: ${({ active }) => (active ? "#ede7ff" : "transparent")};
  color: ${({ active }) => (active ? "#6f4df2" : "#8b8b9a")};
  font-size: 11px;
  padding: 6px 10px;
  border-radius: 10px;
  text-align: left;
  cursor: pointer;
`;

const IconWrap = styled.span<{ active?: boolean }>`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: ${({ active }) => (active ? "#6f4df2" : "#8b8b9a")};
`;

const Spacer = styled.div`
  flex: 1;
`;

const UserCard = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserAvatar = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd1d1, #ffc48a);
`;

const UserInfo = styled.div`
  font-size: 12px;
  color: #1e1e28;
  font-weight: 600;

  span {
    display: block;
    font-weight: 400;
    color: #8f8f9d;
    font-size: 11px;
  }
`;

const UserChevron = styled.div`
  margin-left: auto;
  color: #9c9cac;
`;

export function Sidebar() {
  return (
    <Wrapper>
      <Brand>
        <SwirlLogo size={26} />
        <BrandText>
          My Store
          <span>Your All In One Solution</span>
        </BrandText>
      </Brand>

      <Group>
        <GroupTitle>Sales & Insights</GroupTitle>
        <NavList>
          <NavItem>
            <NavLeft>
              <IconWrap>
                <DashboardIcon />
              </IconWrap>
              Dashboard
            </NavLeft>
          </NavItem>
          <NavItem>
            <NavLeft>
              <IconWrap>
                <DashboardIcon />
              </IconWrap>
              Sales
            </NavLeft>
          </NavItem>
        </NavList>
      </Group>

      <Group>
        <GroupTitle>Catalog</GroupTitle>
        <NavList>
          <NavItem>
            <NavLeft>
              <IconWrap>
                <BoxIcon />
              </IconWrap>
              Products
            </NavLeft>
          </NavItem>
          <NavItem>
            <NavLeft>
              <IconWrap>
                <TagIcon />
              </IconWrap>
              Categories
            </NavLeft>
            <ChevronSmallRight />
          </NavItem>
          <NavItem>
            <NavLeft>
              <IconWrap>
                <PromoIcon />
              </IconWrap>
              Promotions
            </NavLeft>
          </NavItem>
          <NavItem>
            <NavLeft>
              <IconWrap>
                <StoreIcon />
              </IconWrap>
              Markets
            </NavLeft>
          </NavItem>
        </NavList>
      </Group>

      <Group>
        <GroupTitle>Customers</GroupTitle>
        <NavList>
          <NavItem>
            <NavLeft>
              <IconWrap>
                <UsersIcon />
              </IconWrap>
              Clients
            </NavLeft>
          </NavItem>
          <NavItem>
            <NavLeft>
              <IconWrap>
                <CardIcon />
              </IconWrap>
              Payments
            </NavLeft>
            <ChevronSmallRight />
          </NavItem>
        </NavList>
      </Group>

      <Group>
        <GroupTitle>Operations</GroupTitle>
        <NavList>
          <NavItem>
            <NavLeft>
              <IconWrap>
                <TruckIcon />
              </IconWrap>
              Supplier
            </NavLeft>
          </NavItem>
          <NavItem>
            <NavLeft>
              <IconWrap>
                <TicketIcon />
              </IconWrap>
              Support tickets
            </NavLeft>
          </NavItem>
        </NavList>
      </Group>

            <Group>
        <GroupTitle>Preferences</GroupTitle>
        <NavList>
          <NavItem>
            <NavLeft>
              <IconWrap>
                <PlugIcon />
              </IconWrap>
              Integrations
            </NavLeft>
          </NavItem>
          <NavItem active>
            <NavLeft>
              <IconWrap active>
                <BellIcon />
              </IconWrap>
              Notifications
            </NavLeft>
          </NavItem>
          <NavItem>
            <NavLeft>
              <IconWrap>
                <SettingsIcon />
              </IconWrap>
              Settings
            </NavLeft>
          </NavItem>
        </NavList>
      </Group>

      <Spacer />

      <UserCard>
        <UserAvatar />
        <UserInfo>
          Sophia Williams
          <span>sophia@iscoui.com</span>
        </UserInfo>
        <UserChevron>
          <ChevronSmallDown />
        </UserChevron>
      </UserCard>
    </Wrapper>
  );
}


