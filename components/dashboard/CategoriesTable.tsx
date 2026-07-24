import styled from "styled-components";
import { ChevronSmallDown, DotsIcon } from "../Icons";

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

const Tag = styled.span<{ variant: "visible" | "hidden" }>`
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 10px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: ${({ variant }) => (variant === "visible" ? "#e8f7ee" : "#fdeaea")};
  color: ${({ variant }) => (variant === "visible" ? "#1d9b5c" : "#e05555")};
`;

const Dot = styled.span<{ variant: "visible" | "hidden" }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ variant }) => (variant === "visible" ? "#1d9b5c" : "#e05555")};
`;

const ActionCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #9a9aac;
  position: relative;
`;


const Row = styled.tr`
  &:hover td {
    background: #fbfbff;
  }
`;

export function CategoriesTable() {
  return (
    <Wrap>
      <Table>
        <thead>
          <tr>
            <Th></Th>
            <Th>Category ID</Th>
            <Th>Category name</Th>
            <Th>Subcategories</Th>
            <Th>Attributes</Th>
            <Th>Product</Th>
            <Th>Visibility</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          <Row>
            <Td>
              <Checkbox type="checkbox" />
            </Td>
            <Td>#29RKASJ</Td>
            <Td>Laptop</Td>
            <Td>12 Sub-categories</Td>
            <Td>14 Attributes</Td>
            <Td>120 Products</Td>
            <Td>
              <Tag variant="visible">
                <Dot variant="visible" /> Visible
              </Tag>
            </Td>
            <Td>
              <ActionCell>
                <DotsIcon />
                <ChevronSmallDown />
              </ActionCell>
            </Td>
          </Row>
          <Row>
            <Td>
              <Checkbox type="checkbox" />
            </Td>
            <Td>#29RKASJ</Td>
            <Td>Phones</Td>
            <Td>2 Sub-categories</Td>
            <Td>2 Attributes</Td>
            <Td>20 Products</Td>
            <Td>
              <Tag variant="hidden">
                <Dot variant="hidden" /> Hidden
              </Tag>
            </Td>
            <Td>
              <ActionCell>
                <DotsIcon />
                <ChevronSmallDown />
              </ActionCell>
            </Td>
          </Row>
          <Row>
            <Td>
              <Checkbox type="checkbox" />
            </Td>
            <Td>#29RKASJ</Td>
            <Td>Iphones</Td>
            <Td>-</Td>
            <Td>1 Attributes</Td>
            <Td>12 Products</Td>
            <Td>
              <Tag variant="hidden">
                <Dot variant="hidden" /> Hidden
              </Tag>
            </Td>
            <Td>
              <ActionCell>
                <DotsIcon />
                <ChevronSmallDown />
              </ActionCell>
            </Td>
          </Row>
        </tbody>
      </Table>
    </Wrap>
  );
}
