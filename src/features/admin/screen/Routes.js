import { lazy } from "react";
// import Table from "../people/Table";
const Table = lazy(() => import("../people/Table"));
// import Total from "../total/Total";
const Total = lazy(() => import("../total/Total"));

export default [
  { title: "Total", path: "/", component: <Total /> },
  { title: "Table", path: "/table", component: <Table /> },
];
