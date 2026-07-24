import styled from "styled-components";
import { CloseIcon, CopyIcon, PlusIcon, SearchIcon, TrashIcon, UsersIcon } from "../../Icons";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 20, 30, 0.45);
  display: grid;
  place-items: center;
  z-index: 40;
`;

const Modal = styled.div`
  width: 440px;
  max-width: 92vw;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  color: #9a9aac;
  font-size: 16px;
`;

const SubTitle = styled.div`
  font-size: 11px;
  color: #8c8c9a;
  margin-bottom: 12px;
`;

const SearchRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: center;
  margin-bottom: 12px;
`;

const Search = styled.label`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #9a9aac;

  input {
    border: none;
    outline: none;
    font-size: 12px;
    flex: 1;
    background: transparent;
  }
`;

const SendButton = styled.button`
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const List = styled.div`
  display: grid;
  gap: 10px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 8px;
  align-items: center;
  font-size: 11px;
  color: #4a4a58;
`;

const Avatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #e2e6f2;
`;

const Person = styled.div`
  font-size: 12px;
  color: #3a3a44;

  span {
    display: block;
    font-size: 11px;
    color: #9a9aac;
  }
`;

const Status = styled.span<{ tone?: "sent" | "expired" | "accepted" }>`
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 8px;
  background: ${({ tone }) =>
    tone === "sent" ? "#f1f2f7" : tone === "expired" ? "#ffe7ec" : "#e7f8ee"};
  color: ${({ tone }) =>
    tone === "sent" ? "#8b8b98" : tone === "expired" ? "#e05555" : "#1d9b5c"};
`;

const Dots = styled.div`
  color: #b3b3c2;
`;

const MenuWrap = styled.div`
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  right: 0;
  top: 24px;
  width: 140px;
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 10px;
  box-shadow: 0 10px 18px rgba(18, 18, 32, 0.08);
  padding: 6px;
  display: grid;
  gap: 2px;
  z-index: 5;
`;

const MenuItem = styled.button<{ danger?: boolean }>`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: ${({ danger }) => (danger ? "#e05555" : "#4a4a58")};
  padding: 6px 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #f4f5fb;
  }
`;

const Footer = styled.div`
  margin-top: 12px;
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 10px;
  background: #f7f8fc;
  display: grid;
  gap: 6px;
  font-size: 11px;
  color: #7c7c8c;
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const ProgressBar = styled.div`
  height: 4px;
  background: #eef0f6;
  border-radius: 999px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  width: 50%;
  height: 100%;
  background: #4f7cff;
`;

const Manage = styled.span`
  margin-left: auto;
  color: #6f4df2;
  font-size: 11px;
`;

export function InviteModal() {
  return (
    <Overlay>
      <Modal>
        <Header>
          <Title>
            <UsersIcon /> Invite people to your market
          </Title>
          <CloseButton type="button">
            <CloseIcon />
          </CloseButton>
        </Header>
        <SubTitle>we'll email them instructions and a link to create an account.</SubTitle>

        <SearchRow>
          <Search>
            <SearchIcon />
            <input placeholder="Search..." />
          </Search>
          <SendButton type="button">
            <PlusIcon /> Send Invite
          </SendButton>
        </SearchRow>

        <List>
          <Row>
            <Avatar />
            <Person>
              James Brown
              <span>james@alignui.com</span>
            </Person>
            <Status tone="sent">Invite sent</Status>
            <MenuWrap>
              <Dots>...</Dots>
              <Menu>
                <MenuItem type="button">
                  <UsersIcon /> Resend Invitation
                </MenuItem>
                <MenuItem type="button">
                  <CopyIcon /> Copy Invite Link
                </MenuItem>
                <MenuItem type="button" danger>
                  <TrashIcon /> Delete
                </MenuItem>
              </Menu>
            </MenuWrap>
          </Row>
          <Row>
            <Avatar />
            <Person>
              James Brown
              <span>james@alignui.com</span>
            </Person>
            <Status tone="sent">Invite sent</Status>
            <Dots>...</Dots>
          </Row>
          <Row>
            <Avatar />
            <Person>
              James Brown
              <span>james@alignui.com</span>
            </Person>
            <Status tone="sent">Invite sent</Status>
            <Dots>...</Dots>
          </Row>
          <Row>
            <Avatar />
            <Person>
              James Brown
              <span>james@alignui.com</span>
            </Person>
            <Status tone="expired">Invite expired!</Status>
            <Dots>...</Dots>
          </Row>
          <Row>
            <Avatar />
            <Person>
              James Brown
              <span>james@alignui.com</span>
            </Person>
            <Status tone="accepted">Invite accepted!</Status>
            <Dots>...</Dots>
          </Row>
        </List>

        <Footer>
          <FooterTop>
            <UsersIcon /> 5/10 member allowed
            <Manage>Manage</Manage>
          </FooterTop>
          <div>You can upgrade your account to add more users to your team.</div>
          <ProgressBar>
            <ProgressFill />
          </ProgressBar>
        </Footer>
      </Modal>
    </Overlay>
  );
}
