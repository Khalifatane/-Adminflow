import styled from "styled-components";
import { useMemo, useState } from "react";
import {
  ArchiveIcon,
  ChevronSmallDown,
  CopyIcon,
  DotsIcon,
  EyeIcon,
  FilterIcon,
  PencilIcon,
  PlusIcon,
  SearchIcon,
  TrashIcon
} from "../../Icons";

const SectionTitle = styled.h3`
  margin: 16px 0 8px;
  font-size: 14px;
  color: #1f1f28;
`;

const FilterBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
  flex-wrap: wrap;
`;

const LeftFilters = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const RightFilters = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

const Pill = styled.button`
  border: 1px solid #ececf3;
  background: #ffffff;
  border-radius: 10px;
  padding: 6px 10px;
  font-size: 11px;
  color: #6f6f7e;
  display: inline-flex;
  align-items: center;
  gap: 6px;
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

const PrimaryButton = styled.button`
  border: none;
  background: #6f4df2;
  color: #ffffff;
  border-radius: 10px;
  padding: 8px 12px;
  font-size: 11px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 6px 16px rgba(111, 77, 242, 0.25);
`;

const TableWrap = styled.div`
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 14px;
  overflow-x: auto;
  box-shadow: 0 8px 20px rgba(18, 18, 32, 0.05);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 980px;
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

const Check = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 4px;
  border: 1px solid #d6d6e3;
  background: #ffffff;
`;

const Tag = styled.span<{ variant?: "active" | "stock" | "archived" }>`
  font-size: 10px;
  border-radius: 999px;
  padding: 3px 8px;
  background: ${({ variant }) =>
    variant === "active" ? "#e8f7ee" : variant === "archived" ? "#f1f2f7" : "#fdeaea"};
  color: ${({ variant }) =>
    variant === "active" ? "#1d9b5c" : variant === "archived" ? "#7d7d8c" : "#e05555"};
`;

const Promo = styled(Tag)`
  background: #e8f7ee;
  color: #1d9b5c;
`;

const Actions = styled.button`
  border: none;
  background: transparent;
  color: #b3b3c2;
`;

const MenuWrap = styled.div`
  position: relative;
`;

const Menu = styled.div`
  position: absolute;
  right: 0;
  top: 26px;
  width: 160px;
  background: #ffffff;
  border: 1px solid #ececf3;
  border-radius: 10px;
  box-shadow: 0 10px 18px rgba(18, 18, 32, 0.08);
  padding: 6px;
  display: grid;
  gap: 2px;
  z-index: 5;
`;

const MenuItem = styled.button<{ tone?: "danger" }>`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: ${({ tone }) => (tone === "danger" ? "#e05555" : "#4a4a58")};
  padding: 8px 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background: #f4f5fb;
  }
`;

export function ProductsList() {
  const [search, setSearch] = useState("");
  const [range, setRange] = useState<"today" | "last7" | "custom">("last7");

  const products = [
    {
      id: "#29RKA-01",
      name: "Laptop",
      category: "pc gamer",
      subcategory: "pc",
      price: 120,
      store: "2 stores",
      status: "active",
      promo: "Visible",
      date: "2023-08-10"
    },
    {
      id: "#29RKA-02",
      name: "Tablets",
      category: "technologie",
      subcategory: "tablet",
      price: 120,
      store: "2 stores",
      status: "stock",
      promo: "Visible",
      date: "2023-08-06"
    },
    {
      id: "#29RKA-03",
      name: "Desktops",
      category: "pc gamer",
      subcategory: "desktop",
      price: 120,
      store: "2 stores",
      status: "archived",
      promo: "Visible",
      date: "2023-08-04"
    },
    {
      id: "#29RKA-04",
      name: "Monitors",
      category: "pc gamer",
      subcategory: "monitor",
      price: 120,
      store: "2 stores",
      status: "active",
      promo: "Visible",
      date: "2023-08-11"
    }
  ];

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const matchesQuery = (item: typeof products[number]) => {
      if (!query) return true;
      return (
        item.id.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.subcategory.toLowerCase().includes(query)
      );
    };

    const matchesRange = (item: typeof products[number]) => {
      const itemDate = new Date(item.date);
      if (range === "today") {
        const today = new Date("2023-08-11");
        return itemDate.toDateString() === today.toDateString();
      }
      if (range === "last7") {
        const end = new Date("2023-08-11");
        const start = new Date("2023-08-05");
        return itemDate >= start && itemDate <= end;
      }
      const customStart = new Date("2023-08-04");
      const customEnd = new Date("2023-08-11");
      return itemDate >= customStart && itemDate <= customEnd;
    };

    return products.filter((item) => matchesQuery(item) && matchesRange(item));
  }, [search, range]);

  return (
    <section>
      <SectionTitle>Products List</SectionTitle>
      <FilterBar>
        <LeftFilters>
          <Pill onClick={() => setRange("today")}>Today</Pill>
          <Pill onClick={() => setRange("last7")}>
            Last 7 days <ChevronSmallDown />
          </Pill>
          <Pill onClick={() => setRange("custom")}>Aug 04 - Aug 11 2023</Pill>
        </LeftFilters>
        <RightFilters>
          <Search>
            <SearchIcon />
            <input
              placeholder="Search..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </Search>
          <Pill>
            <FilterIcon /> Filter
          </Pill>
          <PrimaryButton>
            <PlusIcon /> Add new Product
          </PrimaryButton>
        </RightFilters>
      </FilterBar>

      <TableWrap>
        <Table>
          <thead>
            <tr>
              <Th />
              <Th>Product ID</Th>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th>Subcategory</Th>
              <Th>Price</Th>
              <Th>Store</Th>
              <Th>Status</Th>
              <Th>Promo state</Th>
              <Th />
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((item) => (
              <tr key={item.id}>
                <Td>
                  <Check />
                </Td>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.category}</Td>
                <Td>{item.subcategory}</Td>
                <Td>${item.price}</Td>
                <Td>{item.store}</Td>
                <Td>
                  <Tag variant={item.status as "active" | "stock" | "archived"}>
                    {item.status === "stock" ? "Out of Stock" : item.status[0].toUpperCase() + item.status.slice(1)}
                  </Tag>
                </Td>
                <Td>
                  <Promo>{item.promo}</Promo>
                </Td>
              <Td>
                <MenuWrap>
                  <Actions aria-label="Row actions">
                    <DotsIcon />
                  </Actions>
                  <Menu>
                    <MenuItem type="button">
                      <PencilIcon /> Edit
                    </MenuItem>
                    <MenuItem type="button">
                      <CopyIcon /> Duplicate
                    </MenuItem>
                    <MenuItem type="button">
                      <EyeIcon /> View Details
                    </MenuItem>
                    <MenuItem type="button">
                      <ArchiveIcon /> Archive Product
                    </MenuItem>
                    <MenuItem type="button" tone="danger">
                      <TrashIcon /> Delete
                    </MenuItem>
                  </Menu>
                </MenuWrap>
              </Td>
            </tr>
            ))}
          </tbody>
        </Table>
      </TableWrap>
    </section>
  );
}
