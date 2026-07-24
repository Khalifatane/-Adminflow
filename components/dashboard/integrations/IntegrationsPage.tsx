import styled from "styled-components";
import { ArrowLeft, ChevronSmallDown, SearchIcon, SunIcon } from "../../Icons";

const Wrapper = styled.section`
  display: grid;
  gap: 16px;
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

const Section = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const SectionTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
  margin-bottom: 10px;
`;

const FilterRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  flex-wrap: wrap;
`;

const Tabs = styled.div`
  display: inline-flex;
  background: #f7f8fc;
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 4px;
  gap: 6px;
`;

const Tab = styled.button<{ active?: boolean }>`
  border: none;
  background: ${({ active }) => (active ? "#ffffff" : "transparent")};
  color: ${({ active }) => (active ? "#3a3a44" : "#8c8c9a")};
  font-size: 11px;
  padding: 4px 12px;
  border-radius: 8px;
  box-shadow: ${({ active }) => (active ? "0 3px 8px rgba(18,18,32,0.08)" : "none")};
`;

const Search = styled.label`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-width: 200px;
  color: #9a9aac;

  input {
    border: none;
    outline: none;
    font-size: 12px;
    flex: 1;
    background: transparent;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 12px;
  display: grid;
  gap: 8px;
`;

const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div<{ tone?: "green" | "blue" | "black" | "purple" | "orange" }>`
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: ${({ tone }) =>
    tone === "green"
      ? "#16a34a"
      : tone === "blue"
        ? "#3b82f6"
        : tone === "purple"
          ? "#7c5cfa"
          : tone === "orange"
            ? "#f97316"
            : "#111827"};
  color: #ffffff;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 12px;
`;

const MenuDots = styled.div`
  color: #b3b3c2;
`;

const CardTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #3a3a44;
`;

const CardSub = styled.div`
  font-size: 11px;
  color: #8c8c9a;
`;

const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const Configure = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  color: #5a5a6b;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;

const Price = styled.div`
  font-size: 11px;
  color: #3a3a44;

  span {
    color: #8c8c9a;
    font-size: 10px;
  }
`;

const Owned = styled.span`
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 999px;
  background: #efe7ff;
  color: #6f4df2;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #8c8c9a;
  margin-top: 12px;
`;

const PageButton = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 8px;
  padding: 4px 8px;
  font-size: 11px;
  color: #6f6f7e;
`;

const PageSpacer = styled.span`
  margin-left: auto;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 20, 30, 0.45);
  display: grid;
  place-items: center;
  z-index: 50;
`;

const Modal = styled.div`
  width: 380px;
  max-width: 92vw;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  border-bottom: 1px solid #f0f1f5;
`;

const ModalTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
`;

const ModalSub = styled.div`
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

const ModalBody = styled.div`
  padding: 12px 16px 14px;
  max-height: 74vh;
  overflow: auto;
`;

const ConnectHeader = styled.div`
  display: grid;
  place-items: center;
  gap: 8px;
  padding: 6px 0 10px;
  text-align: center;
`;

const ConnectTitle = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #1f1f28;
`;

const ConnectSub = styled.div`
  font-size: 11px;
  color: #8c8c9a;
`;

const ConnectPanel = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 12px;
  background: #f9fafc;
  display: grid;
  gap: 10px;
`;

const PanelTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #3a3a44;
  text-align: center;
`;

const PanelSub = styled.div`
  font-size: 11px;
  color: #8c8c9a;
  text-align: center;
`;

const CheckList = styled.div`
  display: grid;
  gap: 8px;
  font-size: 11px;
  color: #6f6f7e;
`;

const CheckItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckDot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #e9e4ff;
  color: #6f4df2;
  display: grid;
  place-items: center;
  font-size: 10px;
`;

const Video = styled.div`
  border-radius: 12px;
  background: #0f172a;
  height: 180px;
  position: relative;
  overflow: hidden;
`;

const PlayButton = styled.button`
  position: absolute;
  inset: 0;
  margin: auto;
  width: 140px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  font-size: 11px;
`;

const IntegrationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const IntegrationLogo = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #1d4ed8;
  color: #ffffff;
  display: grid;
  place-items: center;
  font-weight: 700;
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

const Notice = styled.div`
  border: 1px solid #e7defc;
  background: #f2edff;
  color: #6f4df2;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 11px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ConnectedCard = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 10px;
  background: #f7f8fc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: #6f6f7e;
  margin-bottom: 10px;
`;

const MenuWrap = styled.div`
  position: relative;
`;

const MenuButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #ececf3;
  background: #ffffff;
  color: #9a9aac;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  right: 0;
  top: 34px;
  width: 120px;
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
  gap: 6px;
  font-size: 11px;
  color: ${({ danger }) => (danger ? "#e05555" : "#4a4a58")};
  padding: 6px 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #f4f5fb;
  }
`;

const ConnectButton = styled.button`
  border: 1px solid #ececf3;
  background: #f7f8fc;
  border-radius: 10px;
  height: 34px;
  font-size: 11px;
  color: #6f6f7e;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 12px;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 6px;
  font-size: 11px;
  color: #7c7c8c;
  margin-bottom: 10px;
`;

const TextField = styled.div`
  border: 1px solid #ececf3;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 11px;
  color: #9a9aac;
`;

const SectionLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #3a3a44;
  margin: 8px 0 6px;
`;
export function IntegrationsPage() {
  return (
    <Wrapper>
      <TopBar>
        <TopLeft>
          <BackButton type="button">
            <ArrowLeft />
          </BackButton>
          <TopTitle>
            <h1>Integrations</h1>
            <p>
              Connect external services to extend your store's capabilities — payments, analytics, shipping, and more.
            </p>
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
                Store Name
                <span>Euclid Avenu,CA</span>
              </div>
            </MarketInfo>
            <ChevronSmallDown />
          </MarketSelect>
        </TopRight>
      </TopBar>

      <Section>
        <SectionTitle>Integration list</SectionTitle>
        <FilterRow>
          <Tabs>
            <Tab active>All</Tab>
            <Tab>Payments & Invoicing</Tab>
            <Tab>Marketing & Analytics</Tab>
            <Tab>Sales & Marketplace</Tab>
          </Tabs>
          <Search>
            <SearchIcon />
            <input placeholder="Search..." />
          </Search>
        </FilterRow>

        <Grid>
          <Card>
            <CardTop>
              <Logo tone="green">W</Logo>
              <MenuDots>...</MenuDots>
            </CardTop>
            <CardTitle>Wrike</CardTitle>
            <CardSub>Connect external services to extend your store's capabilities</CardSub>
            <CardFooter>
              <Configure>Configure</Configure>
              <Owned>Owned</Owned>
            </CardFooter>
          </Card>
          <Card>
            <CardTop>
              <Logo tone="purple">C</Logo>
              <MenuDots>...</MenuDots>
            </CardTop>
            <CardTitle>ClickUp</CardTitle>
            <CardSub>Connect external services to extend your store's capabilities</CardSub>
            <CardFooter>
              <Configure>Configure</Configure>
              <Price>
                $48 <span>/Month</span>
              </Price>
            </CardFooter>
          </Card>
          <Card>
            <CardTop>
              <Logo tone="black">GH</Logo>
              <MenuDots>...</MenuDots>
            </CardTop>
            <CardTitle>Github</CardTitle>
            <CardSub>Connect external services to extend your store's capabilities</CardSub>
            <CardFooter>
              <Configure>Configure</Configure>
              <Price>
                $48 <span>/Month</span>
              </Price>
            </CardFooter>
          </Card>
          <Card>
            <CardTop>
              <Logo tone="orange">S</Logo>
              <MenuDots>...</MenuDots>
            </CardTop>
            <CardTitle>Slack</CardTitle>
            <CardSub>Connect external services to extend your store's capabilities</CardSub>
            <CardFooter>
              <Configure>Configure</Configure>
              <Price>
                $48 <span>/Month</span>
              </Price>
            </CardFooter>
          </Card>
          <Card>
            <CardTop>
              <Logo tone="blue">J</Logo>
              <MenuDots>...</MenuDots>
            </CardTop>
            <CardTitle>Jira Atlassian</CardTitle>
            <CardSub>Connect external services to extend your store's capabilities</CardSub>
            <CardFooter>
              <Configure>Configure</Configure>
              <Price>
                $48 <span>/Month</span>
              </Price>
            </CardFooter>
          </Card>
          <Card>
            <CardTop>
              <Logo tone="blue">T</Logo>
              <MenuDots>...</MenuDots>
            </CardTop>
            <CardTitle>Telegram</CardTitle>
            <CardSub>Connect external services to extend your store's capabilities</CardSub>
            <CardFooter>
              <Configure>Configure</Configure>
              <Price>
                $48 <span>/Month</span>
              </Price>
            </CardFooter>
          </Card>
          <Card>
            <CardTop>
              <Logo tone="purple">D</Logo>
              <MenuDots>...</MenuDots>
            </CardTop>
            <CardTitle>Discord</CardTitle>
            <CardSub>Connect external services to extend your store's capabilities</CardSub>
            <CardFooter>
              <Configure>Configure</Configure>
              <Price>
                $48 <span>/Month</span>
              </Price>
            </CardFooter>
          </Card>
          <Card>
            <CardTop>
              <Logo tone="purple">S</Logo>
              <MenuDots>...</MenuDots>
            </CardTop>
            <CardTitle>Stripe</CardTitle>
            <CardSub>Connect external services to extend your store's capabilities</CardSub>
            <CardFooter>
              <Configure>Configure</Configure>
              <Price>
                $48 <span>/Month</span>
              </Price>
            </CardFooter>
          </Card>
          <Card>
            <CardTop>
              <Logo tone="orange">GA</Logo>
              <MenuDots>...</MenuDots>
            </CardTop>
            <CardTitle>Google Analytics</CardTitle>
            <CardSub>Connect external services to extend your store's capabilities</CardSub>
            <CardFooter>
              <Configure>Configure</Configure>
              <Price>
                $48 <span>/Month</span>
              </Price>
            </CardFooter>
          </Card>
        </Grid>

        <Pagination>
          Page 2 of 16
          <PageButton>&lt;</PageButton>
          <PageButton>1</PageButton>
          <PageButton>2</PageButton>
          <PageButton>3</PageButton>
          <PageButton>4</PageButton>
          <PageButton>...</PageButton>
          <PageButton>16</PageButton>
          <PageButton>&gt;</PageButton>
          <PageSpacer />
          <PageButton>7 / page</PageButton>
        </Pagination>
      </Section>
      <ModalOverlay>
        <Modal>
          <ModalHeader>
            <div>
              <ModalTitle>Jira Atlassian Integration</ModalTitle>
              <ModalSub>
                Connect your GitHub account to sync repositories, automate workflows, or track issues from your admin dashboard.
              </ModalSub>
            </div>
            <CloseButton type="button">x</CloseButton>
          </ModalHeader>
          <ModalBody>
            <ConnectHeader>
              <IntegrationHeader>
                <IntegrationLogo>J</IntegrationLogo>
                <span>↔</span>
                <IntegrationLogo>J</IntegrationLogo>
              </IntegrationHeader>
              <ConnectTitle>Connect Your market with Jira Atlassian</ConnectTitle>
              <ConnectSub>
                Connect your GitHub account to sync repositories, automate workflows, or track issues from your admin dashboard.
              </ConnectSub>
            </ConnectHeader>
            <ConnectPanel>
              <PanelTitle>Jira Atlassian would like to:</PanelTitle>
              <PanelSub>You can upgrade your account to do more users to your team.</PanelSub>
              <CheckList>
                <CheckItem>
                  <CheckDot>✓</CheckDot>
                  You can upgrade your account to do more users to your team.
                </CheckItem>
                <CheckItem>
                  <CheckDot>✓</CheckDot>
                  You can upgrade your account to do more users to your team.
                </CheckItem>
                <CheckItem>
                  <CheckDot>✓</CheckDot>
                  You can upgrade your account to do more users to your team.
                </CheckItem>
                <CheckItem>
                  <CheckDot>✓</CheckDot>
                  You can upgrade your account to do more users to your team.
                </CheckItem>
              </CheckList>
              <Video>
                <PlayButton type="button">▶ Watch how it works...</PlayButton>
              </Video>
            </ConnectPanel>
          </ModalBody>
          <Footer>
            <GhostButton type="button">Cancel</GhostButton>
            <PrimaryButton type="button">Continue</PrimaryButton>
          </Footer>
        </Modal>
      </ModalOverlay>
    </Wrapper>
  );
}

