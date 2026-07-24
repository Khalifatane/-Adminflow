import styled from "styled-components";
import { DotsIcon, EyeIcon, FlagIcon, TrashIcon } from "../Icons";

const Wrap = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  overflow-x: auto;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 820px;
`;

const Th = styled.th`
  text-align: left;
  font-size: 11px;
  color: #8c8c9a;
  font-weight: 500;
  padding: 12px 14px;
  background: #fafbfe;
  border-bottom: 1px solid #ececf3;
`;

const Td = styled.td`
  font-size: 12px;
  color: #3a3a44;
  padding: 12px 14px;
  border-bottom: 1px solid #f0f1f5;
`;

const Checkbox = styled.input`
  width: 14px;
  height: 14px;
`;

const ClientCell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffd1d1, #ffc48a);
`;

const ClientInfo = styled.div`
  font-size: 12px;
  font-weight: 600;

  span {
    display: block;
    font-size: 10px;
    color: #9a9aac;
    font-weight: 400;
  }
`;

const Tag = styled.span`
  background: #f1edff;
  color: #6f4df2;
  border-radius: 999px;
  padding: 4px 8px;
  font-size: 10px;
`;

const ActionCell = styled.div`
  color: #9a9aac;
  position: relative;
`;

const ActionMenu = styled.div`
  position: absolute;
  top: 26px;
  right: -6px;
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 10px;
  box-shadow: 0 10px 24px rgba(18, 18, 32, 0.12);
  padding: 6px;
  min-width: 150px;
  z-index: 5;
`;

const ActionItem = styled.div<{ danger?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: ${({ danger }) => (danger ? "#e05555" : "#4a4a56")};
  padding: 6px 8px;
  border-radius: 8px;
`;

export function ClientsTable() {
  return (
    <Wrap>
      <Table>
        <thead>
          <tr>
            <Th></Th>
            <Th>Client ID</Th>
            <Th>Client name</Th>
            <Th>Total Orders</Th>
            <Th>Total Spend</Th>
            <Th>Registered At</Th>
            <Th>Client type</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>
              <Checkbox type="checkbox" />
            </Td>
            <Td>#29RKASJ</Td>
            <Td>
              <ClientCell>
                <Avatar />
                <ClientInfo>
                  James Brown
                  <span>james@lingual.com</span>
                </ClientInfo>
              </ClientCell>
            </Td>
            <Td>120 Orders</Td>
            <Td>$120,203</Td>
            <Td>12-09-2024</Td>
            <Td>
              <Tag>Premium User</Tag>
            </Td>
            <Td>
              <ActionCell>
                <DotsIcon />
                <ActionMenu>
                  <ActionItem>
                    <EyeIcon /> View Client Profile
                  </ActionItem>
                  <ActionItem>
                    <FlagIcon /> Report Client
                  </ActionItem>
                  <ActionItem danger>
                    <TrashIcon /> Delete
                  </ActionItem>
                </ActionMenu>
              </ActionCell>
            </Td>
          </tr>
          <tr>
            <Td>
              <Checkbox type="checkbox" />
            </Td>
            <Td>#29RKASJ</Td>
            <Td>
              <ClientCell>
                <Avatar />
                <ClientInfo>
                  Sophia Williams
                  <span>sophia@iscoui.com</span>
                </ClientInfo>
              </ClientCell>
            </Td>
            <Td>450 Orders</Td>
            <Td>$120,203</Td>
            <Td>12-09-2024</Td>
            <Td>
              <Tag>Premium User</Tag>
            </Td>
            <Td>
              <ActionCell>
                <DotsIcon />
              </ActionCell>
            </Td>
          </tr>
        </tbody>
      </Table>
    </Wrap>
  );
}
