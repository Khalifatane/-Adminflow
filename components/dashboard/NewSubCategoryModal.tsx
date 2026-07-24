import styled, { css } from "styled-components";
import { CloseIcon, PlusCircleIcon, TagIcon, TrashIcon } from "../Icons";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(20, 20, 30, 0.2);
  display: grid;
  place-items: center;
  z-index: 30;
`;

const Modal = styled.div`
  width: 380px;
  max-width: 92vw;
  background: #ffffff;
  border-radius: 14px;
  padding: 16px 16px 14px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #1f1f28;
`;

const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid #ececf3;
  background: #ffffff;
  color: #9a9aac;
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const inputStyles = css`
  width: 100%;
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  height: 34px;
  padding: 0 10px;
  font-size: 12px;
  color: #3a3a44;
`;

const Label = styled.div`
  font-size: 11px;
  color: #7c7c8c;
  margin-bottom: 6px;
`;

const Required = styled.span`
  color: #ff5a5f;
`;

const TextInput = styled.input`
  ${inputStyles}
`;

const SelectInput = styled.select`
  ${inputStyles}
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239797a7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M6 9l6 6 6-6'/></svg>");
  background-repeat: no-repeat;
  background-position: right 10px center;
  padding-right: 28px;
`;

const Field = styled.div`
  margin-bottom: 10px;
`;

const ChipRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  flex-wrap: wrap;
`;

const Chip = styled.span`
  font-size: 11px;
  color: #6f4df2;
  background: #f1edff;
  border-radius: 10px;
  padding: 4px 8px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

const FilterRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 30px;
  gap: 8px;
  align-items: center;
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background: #ffe5e6;
  color: #ff5a5f;
  display: grid;
  place-items: center;
`;

const AddFilter = styled.button`
  margin-top: 10px;
  width: 100%;
  border: 1px dashed #d9d9ea;
  background: #ffffff;
  color: #8a8a9a;
  border-radius: 10px;
  height: 32px;
  font-size: 11px;
`;

const PrimaryButton = styled.button`
  margin-top: 12px;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  background: #6f4df2;
  color: #ffffff;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  box-shadow: 0 6px 16px rgba(111, 77, 242, 0.25);
  cursor: pointer;
`;

export function NewSubCategoryModal() {
  return (
    <Overlay>
      <Modal>
        <Header>
          <Title>
            <TagIcon /> New Sub-Category
          </Title>
          <CloseButton type="button">
            <CloseIcon />
          </CloseButton>
        </Header>

        <Field>
          <Label>
            Sub-Category<Required>*</Required>
          </Label>
          <TextInput defaultValue="Iphone" />
          <ChipRow>
            <Chip>Aa Android</Chip>
            <Chip>Aa IOS</Chip>
          </ChipRow>
        </Field>

        <Field>
          <Label>
            Assign to product<Required>*</Required>
          </Label>
          <SelectInput defaultValue="">
            <option value="" disabled>
              Search product name
            </option>
            <option>Products</option>
          </SelectInput>
        </Field>

        <Field>
          <FilterRow>
            <FilterGroup>
              <Label>
                Filter name<Required>*</Required>
              </Label>
              <TextInput defaultValue="Ram" />
            </FilterGroup>
            <FilterGroup>
              <Label>
                Filter type<Required>*</Required>
              </Label>
              <SelectInput defaultValue="Text">
                <option>Text</option>
                <option>Single</option>
                <option>Multi</option>
              </SelectInput>
            </FilterGroup>
            <DeleteButton type="button">
              <TrashIcon />
            </DeleteButton>
          </FilterRow>
          <AddFilter type="button">Add new filter</AddFilter>
        </Field>

        <PrimaryButton type="button">
          <PlusCircleIcon /> Create sub-category
        </PrimaryButton>
      </Modal>
    </Overlay>
  );
}
