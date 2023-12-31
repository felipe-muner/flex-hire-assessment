import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { GraphQLTaggedNode, OperationType } from "relay-runtime";
import { AppQuery } from "src/__generated__/AppQuery.graphql";
import { NotFound } from "../not-found";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const tabPaths = [
  {
    label: "Profile",
    path: "/profile",
    Component: React.lazy(() => import("../../pages/profile")),
  },
  {
    label: "Jobs",
    path: "/jobs",
    Component: React.lazy(() => import("../../pages/jobs")),
  },
];

interface TabsPanelProps {
  queryReference:
    | PreloadedQuery<OperationType, Record<string, unknown>>
    | null
    | undefined;
  query: GraphQLTaggedNode;
}

export default function TabsPanel(props: TabsPanelProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = tabPaths.findIndex(
    (tab) => location.pathname === tab.path
  );

  const data = usePreloadedQuery<AppQuery>(
    props.query,
    props.queryReference as PreloadedQuery<AppQuery, Record<string, unknown>>
  );

  const isValidUser = !!data.currentUser?.name;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    navigate(tabPaths[newValue].path);
  };

  return isValidUser ? (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={currentTab}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabPaths.map((tab, index) => (
            <Tab label={tab.label} {...a11yProps(index)} key={tab.label} />
          ))}
        </Tabs>
      </Box>
      {tabPaths.map(({ path, Component }, index) => (
        <CustomTabPanel value={currentTab} index={index} key={path}>
          <div>{currentTab === index && <Component data={data} />}</div>
        </CustomTabPanel>
      ))}
    </Box>
  ) : (
    <NotFound />
  );
}
