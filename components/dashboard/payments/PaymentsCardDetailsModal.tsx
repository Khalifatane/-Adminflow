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
  width: 380px;
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
  gap: 10px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Badge = styled.div`
  width: 34px;
  height: 24px;
  border-radius: 6px;
  background: #b1f26d;
  color: #1a1a1a;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 12px;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
`;

const SubTitle = styled.div`
  font-size: 11px;
  color: #8c8c9a;
  margin-top: 2px;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  color: #9a9aac;
  font-size: 16px;
`;

const CardPreview = styled.div`
  margin: 12px 0;
  border-radius: 14px;
  background: linear-gradient(135deg, #b7f06a, #7fd35b);
  height: 150px;
  position: relative;
  overflow: hidden;
  color: #1a1a1a;
  padding: 16px;
`;

const CardCurve = styled.div`
  position: absolute;
  right: -30px;
  top: 40px;
  width: 60px;
  height: 80px;
  border-radius: 50%;
  background: #ffffff;
  opacity: 0.8;
`;

const Chip = styled.div`
  width: 34px;
  height: 24px;
  border-radius: 6px;
  background: #dfe5d1;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

const CardBrand = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
  font-weight: 800;
  font-size: 22px;
`;

const AmountRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #7c7c8c;
  margin-bottom: 10px;
`;

const AmountValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #1f1f28;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  font-size: 11px;
  color: #8c8c9a;
  margin-bottom: 12px;
`;

const InfoItem = styled.div`
  display: grid;
  gap: 4px;
  color: #8c8c9a;

  strong {
    color: #3a3a44;
  }
`;

const LimitCard = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 10px;
  background: #f7f8fc;
  font-size: 11px;
  color: #8c8c9a;
  margin-bottom: 12px;
`;

const LimitHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-size: 11px;
  color: #3a3a44;
  margin-bottom: 6px;
`;

const LimitTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 8px;
`;

const LimitTab = styled.button<{ active?: boolean }>`
  border: none;
  background: ${({ active }) => (active ? "#ffffff" : "#f7f8fc")};
  color: ${({ active }) => (active ? "#3a3a44" : "#9a9aac")};
  font-size: 10px;
  padding: 6px 0;
`;

const LimitRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 10px;
  color: #8c8c9a;
`;

const LimitBar = styled.div`
  height: 4px;
  background: #e5e7f0;
  border-radius: 999px;
  overflow: hidden;
`;

const LimitFill = styled.div`
  width: 80%;
  height: 100%;
  background: #7b5cf6;
`;

const Transactions = styled.div`
  display: grid;
  gap: 10px;
`;

const Transaction = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 8px;
  font-size: 11px;
  color: #6f6f7e;
  align-items: center;
`;

const TransactionIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #f1f2f7;
  display: grid;
  place-items: center;
`;

const TransactionText = styled.div`
  color: #3a3a44;

  span {
    display: block;
    font-size: 10px;
    color: #9a9aac;
  }
`;

const TransactionAmount = styled.div`
  text-align: right;
  color: #3a3a44;

  span {
    display: block;
    font-size: 10px;
    color: #9a9aac;
  }
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-top: 12px;
`;

const GhostButton = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  color: #6f6f7e;
  border-radius: 10px;
  height: 32px;
  font-size: 11px;
`;

export function CardDetailsModal() {
  return (
    <Overlay>
      <Modal>
        <Header>
          <HeaderLeft>
            <Badge>wise</Badge>
            <div>
              <Title>Card Details</Title>
              <SubTitle>we'll email them instructions and a link to create an account.</SubTitle>
            </div>
          </HeaderLeft>
          <CloseButton type="button">
            <CloseIcon />
          </CloseButton>
        </Header>

        <CardPreview>
          <Chip />
          <CardBrand>wise</CardBrand>
          <CardCurve />
        </CardPreview>

        <AmountRow>
          Amount:
          <AmountValue>$16,058.94</AmountValue>
        </AmountRow>

        <InfoGrid>
          <InfoItem>
            Card Number
            <strong>.... 1234</strong>
          </InfoItem>
          <InfoItem>
            Expiry Date
            <strong>06/27</strong>
          </InfoItem>
          <InfoItem>
            CVC
            <strong>...</strong>
          </InfoItem>
          <InfoItem>
            Exp Date
            <strong>12/2027</strong>
          </InfoItem>
        </InfoGrid>

        <LimitCard>
          <LimitHeader>
            <span>$12,120.65 Left to hit limit</span>
            <span style={{ color: "#6f4df2" }}>Edit</span>
          </LimitHeader>
          <div>Adjust your limite so you dont block any transaction</div>
          <div style={{ marginTop: 6, fontSize: 10 }}>Limit</div>
          <LimitTabs>
            <LimitTab>Incoming</LimitTab>
            <LimitTab active>Outgoing</LimitTab>
            <LimitTab>Pending</LimitTab>
          </LimitTabs>
          <LimitRow>
            <span />
            <span>80%</span>
          </LimitRow>
          <LimitBar>
            <LimitFill />
          </LimitBar>
        </LimitCard>

        <Transactions>
          <Transaction>
            <TransactionIcon>
              <SunIcon />
            </TransactionIcon>
            <TransactionText>
              Github integration
              <span>Monthly Credit Card Payment</span>
            </TransactionText>
            <TransactionAmount>
              -$963.62
              <span>Sep 15</span>
            </TransactionAmount>
          </Transaction>
          <Transaction>
            <TransactionIcon>
              <SunIcon />
            </TransactionIcon>
            <TransactionText>
              wrlkt integration
              <span>Order No #2341212</span>
            </TransactionText>
            <TransactionAmount>
              -$124.00
              <span>Sep 18</span>
            </TransactionAmount>
          </Transaction>
          <Transaction>
            <TransactionIcon>
              <SunIcon />
            </TransactionIcon>
            <TransactionText>
              Ads paid
              <span>RepairMyCar Co.</span>
            </TransactionText>
            <TransactionAmount>
              -$640.00
              <span>Sep 08</span>
            </TransactionAmount>
          </Transaction>
          <Transaction>
            <TransactionIcon>
              <SunIcon />
            </TransactionIcon>
            <TransactionText>
              Ads paid
              <span>Adjust Limit</span>
            </TransactionText>
            <TransactionAmount>
              -$146.31
              <span>Sep 10</span>
            </TransactionAmount>
          </Transaction>
        </Transactions>

        <Footer>
          <GhostButton type="button">Adjust Limit</GhostButton>
          <GhostButton type="button">Delete</GhostButton>
          <GhostButton type="button">Block</GhostButton>
        </Footer>
      </Modal>
    </Overlay>
  );
}
