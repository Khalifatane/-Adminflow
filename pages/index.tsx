import styled from "styled-components";
import { Sidebar } from "../components/dashboard/Sidebar";
import { NotificationsPage } from "../components/dashboard/notifications/NotificationsPage";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main`
  padding: 20px 26px 32px;
`;

export default function Home() {
  return (
    <Layout>
      <Sidebar />
      <Main>
        <NotificationsPage />
      </Main>
    </Layout>
  );
}


