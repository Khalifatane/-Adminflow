import styled, { css } from "styled-components";
import { CloseIcon, DotsIcon, InfoIcon, PlusCircleIcon } from "../Icons";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 20, 30, 0.45);
  display: flex;
  justify-content: flex-end;
  z-index: 20;
`;

const Modal = styled.div`
  width: 420px;
  max-width: 92vw;
  background: #ffffff;
  height: 100vh;
  padding: 18px 18px 16px;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  box-shadow: -10px 0 24px rgba(0, 0, 0, 0.12);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 15px;
  color: #1f1f28;
`;

const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #ececf3;
  background: #ffffff;
  color: #9a9aac;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const LabelRow = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: #7c7c8c;
`;

const Required = styled.span`
  color: #ff5a5f;
`;

const inputStyles = css`
  width: 100%;
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  height: 36px;
  padding: 0 12px;
  font-size: 12px;
  color: #3a3a44;
`;

const TextInput = styled.input`
  ${inputStyles}
`;

const SelectInput = styled.select`
  ${inputStyles}
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239797a7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 30px;
`;

const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
`;

const SubTitle = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #3a3a44;
`;

const AddButton = styled.button`
  border: none;
  background: none;
  color: #6f4df2;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const SubTable = styled.div`
  border: 1px solid #ececf3;
  border-radius: 12px;
  margin-top: 8px;
  overflow: hidden;
`;

const SubTableHead = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 8px;
  font-size: 11px;
  color: #9a9aac;
  padding: 10px 12px;
  background: #fafbfe;
  border-bottom: 1px solid #ececf3;
`;

const SubTableBody = styled.div`
  padding: 10px 12px;
  color: #4a4a56;
  font-size: 11px;
`;

const SubRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 24px;
  gap: 8px;
  align-items: center;
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 8px;
  padding: 8px 10px;
`;

const Kebab = styled.div`
  text-align: center;
  color: #b6b6c4;
`;

const Footer = styled.div`
  margin-top: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

const GhostButton = styled.button`
  border: 1px solid #ececf3;
  background: #f7f7fc;
  color: #6d6d7e;
  border-radius: 10px;
  height: 40px;
  font-size: 12px;
  cursor: pointer;
`;

const PrimaryButton = styled.button`
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  height: 40px;
  font-size: 12px;
  box-shadow: 0 6px 16px rgba(111, 77, 242, 0.25);
`;

export function AddCategoryModal() {
  return (
    <Overlay>
      <Modal>
        <Header>
          <Title>Add New Category</Title>
          <CloseButton type="button">
            <CloseIcon />
          </CloseButton>
        </Header>

        <Form>
          <div>
            <LabelRow>
              Category name<Required>*</Required> <InfoIcon />
            </LabelRow>
            <TextInput defaultValue="Phone" />
          </div>
          <div>
            <LabelRow>
              Visibility<Required>*</Required>
            </LabelRow>
            <SelectInput defaultValue="">
              <option value="" disabled>
                Select option
              </option>
              <option>Visible</option>
              <option>Hidden</option>
            </SelectInput>
          </div>
          <div>
            <LabelRow>
              Assign to product<Required>*</Required>
            </LabelRow>
            <SelectInput defaultValue="">
              <option value="" disabled>
                Search product name
              </option>
              <option>Products</option>
            </SelectInput>
          </div>

          <div>
            <SubHeader>
              <SubTitle>Sub-category</SubTitle>
              <AddButton type="button">
                <PlusCircleIcon /> Add
              </AddButton>
            </SubHeader>
            <SubTable>
              <SubTableHead>
                <span>Category</span>
                <span>Attribute</span>
                <span>Products</span>
              </SubTableHead>
              <SubTableBody>
                <SubRow>
                  <span>Iphone</span>
                  <span>1 Attribute</span>
                  <span>2 Products</span>
                  <Kebab>
                    <DotsIcon />
                  </Kebab>
                </SubRow>
              </SubTableBody>
            </SubTable>
          </div>
        </Form>

        <Footer>
          <GhostButton type="button">Cancel</GhostButton>
          <PrimaryButton type="button">Add new category</PrimaryButton>
        </Footer>
      </Modal>
    </Overlay>
  );
}
