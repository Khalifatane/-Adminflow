import styled from "styled-components";
import { BadgeIcon, BuildingIcon, PhoneIcon, PinIcon, DotsIcon } from "../Icons";

const Wrap = styled.aside`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Avatar = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd1d1, #ffc48a);
  margin: 0 auto;
`;

const Name = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;

const Email = styled.div`
  text-align: center;
  font-size: 11px;
  color: #8c8c9a;
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const ActionBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #ececf3;
  background: #f7f7fc;
`;

const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr auto;
  gap: 8px;
  font-size: 11px;
  color: #6d6d7e;
  align-items: center;
`;

const Tag = styled.span`
  background: #f1edff;
  color: #6f4df2;
  border-radius: 999px;
  padding: 3px 8px;
  font-size: 10px;
`;

const SectionTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #1f1f28;
  margin-top: 6px;
`;

const AddressCard = styled.div`
  border: 1px solid #ececf3;
  border-radius: 10px;
  padding: 10px;
  font-size: 11px;
  color: #3a3a44;
  position: relative;
`;

const AddressHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const AddressTitle = styled.div`
  font-weight: 600;
`;

const AddressNote = styled.div`
  font-size: 11px;
  color: #9a9aac;
`;

const AddAddress = styled.button`
  border: 1px solid #ececf3;
  background: #f7f7fc;
  border-radius: 10px;
  padding: 8px;
  font-size: 11px;
  color: #6d6d7e;
`;

export function ClientProfileSidebar() {
  return (
    <Wrap>
      <Avatar />
      <Name>Helinda PhamMD</Name>
      <Email>Helinda@alignui.com</Email>
      <ActionRow>
        <ActionBtn />
        <ActionBtn />
        <ActionBtn />
      </ActionRow>

      <InfoRow>
        <BuildingIcon /> Company <strong>Google Inc.</strong>
      </InfoRow>
      <InfoRow>
        <PhoneIcon /> Phone Number <strong>(+1) 202-292-978</strong>
      </InfoRow>
      <InfoRow>
        <BadgeIcon /> User Type <Tag>Premium User</Tag>
      </InfoRow>
      <InfoRow>
        <PinIcon /> Country <strong>United State</strong>
      </InfoRow>

      <SectionTitle>Addresses</SectionTitle>
      <AddressNote>See what Helinda addresses</AddressNote>
      <AddressCard>
        <AddressHeader>
          <AddressTitle>San Francisco</AddressTitle>
          <DotsIcon />
        </AddressHeader>
        1024 Tech Valley Blvd,94107
      </AddressCard>
      <AddressCard>
        <AddressHeader>
          <AddressTitle>Los Angeles</AddressTitle>
          <DotsIcon />
        </AddressHeader>
        1024 Tech Valley Blvd,94107
      </AddressCard>
      <AddressCard>
        <AddressTitle>|City here...</AddressTitle>
        <AddressNote>Street here...</AddressNote>
      </AddressCard>
      <AddAddress type="button">+ Add another address</AddAddress>
    </Wrap>
  );
}
