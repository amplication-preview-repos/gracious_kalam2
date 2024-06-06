import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ScheduleList } from "./schedule/ScheduleList";
import { ScheduleCreate } from "./schedule/ScheduleCreate";
import { ScheduleEdit } from "./schedule/ScheduleEdit";
import { ScheduleShow } from "./schedule/ScheduleShow";
import { SatelliteList } from "./satellite/SatelliteList";
import { SatelliteCreate } from "./satellite/SatelliteCreate";
import { SatelliteEdit } from "./satellite/SatelliteEdit";
import { SatelliteShow } from "./satellite/SatelliteShow";
import { CommunicationRequestList } from "./communicationRequest/CommunicationRequestList";
import { CommunicationRequestCreate } from "./communicationRequest/CommunicationRequestCreate";
import { CommunicationRequestEdit } from "./communicationRequest/CommunicationRequestEdit";
import { CommunicationRequestShow } from "./communicationRequest/CommunicationRequestShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SatelliteGroundStation"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Schedule"
          list={ScheduleList}
          edit={ScheduleEdit}
          create={ScheduleCreate}
          show={ScheduleShow}
        />
        <Resource
          name="Satellite"
          list={SatelliteList}
          edit={SatelliteEdit}
          create={SatelliteCreate}
          show={SatelliteShow}
        />
        <Resource
          name="CommunicationRequest"
          list={CommunicationRequestList}
          edit={CommunicationRequestEdit}
          create={CommunicationRequestCreate}
          show={CommunicationRequestShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
