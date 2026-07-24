import styled from "styled-components";
import { CloseIcon, TruckMiniIcon } from "../../Icons";

const Overlay = styled.div`
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
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
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
  margin-bottom: 10px;
`;

const Warning = styled.div`
  background: #ffe7ec;
  color: #a4455a;
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 10px;
  margin-bottom: 12px;
`;

const SectionTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #3a3a44;
  margin-bottom: 8px;
`;

const PackageCard = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  padding: 10px;
  display: grid;
  gap: 8px;
  margin-bottom: 10px;
`;

const PackageRow = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 8px;
  align-items: center;
`;

const PackageThumb = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 10px;
  background: #f7f2e7;
  display: grid;
  place-items: center;
  color: #b7894c;
  font-size: 20px;
`;

const PackageInfo = styled.div`
  font-size: 11px;
  color: #8c8c9a;

  strong {
    display: block;
    font-size: 12px;
    color: #3a3a44;
  }
`;

const Status = styled.span`
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 8px;
  background: #fff3e0;
  color: #ff9f43;
`;

const SupplierRow = styled.div`
  border: 1px solid #e6e0ff;
  background: #f4f1ff;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SupplierInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: #3a3a44;

  span {
    display: block;
    font-size: 10px;
    color: #8c8c9a;
  }
`;

const SupplierAvatar = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd1d1, #ffc48a);
`;

const SupplierActions = styled.div`
  display: inline-flex;
  gap: 6px;
`;

const ActionButton = styled.button`
  height: 28px;
  padding: 0 8px;
  border-radius: 8px;
  border: 1px solid #ded7ff;
  background: #ffffff;
  color: #6f4df2;
  font-size: 10px;
`;

const Map = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  height: 130px;
  background: radial-gradient(circle at 20% 20%, #e8ecf7, #f7f8fb);
  margin-bottom: 10px;
`;

const MetaRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  font-size: 11px;
  color: #8c8c9a;
  margin-bottom: 8px;

  strong {
    display: block;
    color: #3a3a44;
    font-weight: 600;
  }
`;

const Timeline = styled.div`
  display: grid;
  gap: 8px;
  font-size: 10px;
  color: #8c8c9a;
`;

const TimelineItem = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Dot = styled.div<{ active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ active }) => (active ? "#6f4df2" : "#dfe3f4")};
`;

export function SupplierDetailsModal() {
  return (
    <Overlay>
      <Modal>
        <Header>
          <Title>
            <TruckMiniIcon /> Supplier details
          </Title>
          <CloseButton type="button">
            <CloseIcon />
          </CloseButton>
        </Header>
        <SubTitle>we'll email them instructions and a link to create an account.</SubTitle>
        <Warning>
          High Volume, During peak season like holidays, there can be a significant increase in the number of packages
          being shipped, leading to delays.
        </Warning>
        <SectionTitle>Package Details</SectionTitle>
        <PackageCard>
          <PackageRow>
            <PackageThumb>Box</PackageThumb>
            <PackageInfo>
              Shipment ID
              <strong>HDKJ3819NS17</strong>
              <strong>Tech Gadget Bundle</strong>
              <span>52 Products</span>
            </PackageInfo>
            <Status>In Progress</Status>
          </PackageRow>
          <MetaRow>
            <span>Tax: 20%</span>
            <span>Garantie: 2 Years</span>
          </MetaRow>
        </PackageCard>
        <SupplierRow>
          <SupplierInfo>
            <SupplierAvatar />
            <div>
              James Brown
              <span>james@alignui.com</span>
            </div>
          </SupplierInfo>
          <SupplierActions>
            <ActionButton>Call</ActionButton>
            <ActionButton>Mail</ActionButton>
          </SupplierActions>
        </SupplierRow>
        <SectionTitle>Tracking & Shipping Info</SectionTitle>
        <SubTitle>Enter your shipment details carefully</SubTitle>
        <Map />
        <MetaRow>
          <div>
            Your Package arrive on:
            <strong>12 May</strong>
          </div>
          <div>
            You will receive it on:
            <strong>13:00</strong>
          </div>
          <div>Total Items: 2x</div>
        </MetaRow>
        <MetaRow>
          <div>
            From
            <strong>Delima Indah,No..</strong>
          </div>
          <div>
            To
            <strong>Rjawel,Gg,3</strong>
          </div>
        </MetaRow>
        <Timeline>
          <TimelineItem>
            <Dot />
            Package being checked
          </TimelineItem>
          <TimelineItem>
            <Dot active />
            Package in transit
          </TimelineItem>
          <TimelineItem>
            <Dot />
            Package arrive at final destination
          </TimelineItem>
        </Timeline>
      </Modal>
    </Overlay>
  );
}
