import React, { useEffect } from "react";
import { useState } from "react";
import "./DataTable.css";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { getColumns } from "../Columns";
//import MockData from "../data.json";
import Pagination from "./Pagination";
import ActionDropdown from "./ActionDropdown";
import axios from "../api/axiosInstance";
import AddForm from "./AddForm";
import EditModal from "./EditModal";

const DataTable = () => {
  // const [data] = React.useState(() => [...MockData]);
  const [columnVisibility, setcolumnVisibility] = useState({
    NRMLNOS: false,
    NRMLTONS: false,
    INSPNOS: false,
    INSPTONS: false,
    TRFRNOS: false,
    TRFRTONS: false,
    DESPNOS: false,
    BRCHQ: false,
    LTRFRDT: false,
    LDESPDT: false,
    HOLLOW: false,
    STEEL: false,
    OD_H: false,
    THK_H: false,
    LGTH_H: false,
    CATG_S: false,
    WIDTH_S: false,
    THK_S: false,
    SFIN_S: false,
    ORDSTS: false,
    ITMSTS: false,
    SCHSTS: false,
    PRMSDATE: false,
    MESSAGE: false,
    PINO: false,
    PGRP: false,
    CCR: false,
    ORDLOAD: false,
    AMOUNT: false,
    BOILER_UNIT: false,
    REQUISITIONER: false,
    TRACKING_NO: false,
    KGNONUM: false,
    KGNODEN: false,
    SOBSL: false,
    FINPLO: false,
    INTPLO: false,
    VERID: false,
    CNFRMDT: false,
    CUSTOMER_F: false,
    STODONOS: false,
    STODOTONS: false,
    CDESPNOS: false,
    CDESPTONS: false,
    BFRSTS: false,
    INCLFLAG: false,
    LIVSTS: false,
    HITMISS: false,
    CPUDT: false,
    CPUTM: false,
    ERNAM: false,
    UPDDT: false,
    UPDTM: false,
    UPDBY: false,
    MATXT2: false,
    EFIN: false,
    DLVBLK: false,
    BLGBLK: false,
    PAYER: false,
    CRDLIMIT: false,
    ADVANCE: false,
    RCVBL: false,
    NXTRVWDT: false,
    CRDBLK: false,
    OVERDUE: false,
    CHANNEL: false,
    FRTIND: false,
    LRTONS: false,
    OMS_REMARKS: false,
    HLD_REL_TAG: false,
    HOLD_DT: false,
    HOLD_TM: false,
    RELEASE_DT: false,
    RELEASE_TM: false,
    HOLD_BY: false,
    RELAESED_BY: false,
    REASON_HOLD: false,
    WAYBILL_TAG: false,
    CREDIT_AVAIL: false,
    AGE: false,
    NRM_PO: false,
    GLV_PO: false,
    CLD_PO: false,
    NRM_MATL: false,
    GLV_MATL: false,
    CLD_MATL: false,
    NRM_PLANDT: false,
    GLV_PLANDT: false,
    CLD_PLANDT: false,
    NRM_ACTDT: false,
    GLV_ACTDT: false,
    CLD_ACTDT: false,
    GSTNO: false,
    RM_MTAMTO: false,
    ALLOCATION: false,
    CUSTOMER_PO: false,
    PLAN_STATUS: false,
    RM_AT_SITE: false,
    RM_AT_SLITTER: false,
    P_DDP: false,
    P_OTIF: false,
    PLAN_STS: false,
    RM_REQUIRED: false,
    RM_AVAILABLE: false,
    OFFER_TYPE: false,
    PLN_DESP_DT: false,
    PLN_VEH_PLC_DT: false,
    ACT_VEH_PLC_DT: false,
    PLN_STODO_CRT_DT: false,
    ACT_STODO_CRT_DT: false,
    PLN_FG_DT: false,
    ACT_FG_DT: false,
    PLN_MILL_DT: false,
    PLN_RM_DT: false,
    ACT_RM_DT: false,
    CTR_NO: false,
    CTR_LINK: false,
    CAMPAIGN_NO: false,
    REVISED_DESP_DATE: false,
    CAMPAIGN_STATUS: false,
    CAMPAIGN_RM_STATUS: false,
    GLV_STK: false,
    BLK_STK: false,
    PRIC_CONDN: false,
    PO_TYPE: false,
    ROLL_WEEK: false,
    PLAN_MILL: false,
    PROCESS_GRP: false,
    SHIPTO_COMMON: false,
    CTR_REMARKS: false,
  });
  const [showColumnMenu, setShowColumnMenu] = useState(false);
  const [columnFilters, setColumnFilters] = useState([]);
  const [data, setData] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/data");
        setData(res.data);
      } catch (err) {
        console.log("Error fetching data", err);
      }
    };
    fetchData();
  }, []);

  const handleAdd = async (newRow) => {
    try {
      const res = await axios.post("/data", newRow);
      setData((prev)=>[...prev,res.data])
    } catch (err) {
      console.error("Error adding data:", err);
    }
  };

  const handleEdit = (rowData) => {
    setEditingRow(rowData);
    setIsEditOpen(true);
  };

  const handleSaveEdit = async (updatedRow) => {
    try {
      const res = await axios.put(`/data/${updatedRow.ORDER_NO}/${updatedRow.ITEM_NO}`, updatedRow);
      setData((prev) =>
        prev.map((row) =>
          row.ORDER_NO === updatedRow.ORDER_NO &&
        row.ITEM_NO === updatedRow.ITEM_NO? res.data : row
        )
      );
    } catch (err) {
      console.log("Error updating data", err);
    }
  };

  const handleDelete = async (orderNo) => {
    try {
      const res = await axios.delete(`/data/${orderNo}/${itemNo}`);
      setData((prev) => prev.filter((row) => row.ORDER_NO !== orderNo && row.ITEM_NO === itemNo));
    } catch (err) {
      console.log("Error deleting data", err);
    }
  };
  const columns = getColumns(handleEdit, handleDelete);

  const table = useReactTable({
    data,
    columns: columns,
    state: {
      columnVisibility,
      columnFilters,
    },
    onColumnVisibilityChange: setcolumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getRowId: (row) => `${row.ORDER_NO}-${row.ITEM_NO}`,

    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <div className="table-wrapper">
      <div className="controls">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for ORDER_NO..."
            value={table.getColumn("ORDER_NO")?.getFilterValue() ?? ""}
            onChange={(e) => table.getColumn("ORDER_NO")?.setFilterValue(e.target.value)}
          />
        </div>
        <div className="column-dropdown-wrapper ">
          <button onClick={() => setShowColumnMenu(!showColumnMenu)}>
            Columns
          </button>
          {showColumnMenu && (
            <div className="column-menu">
              {table.getAllLeafColumns().map(
                (column) =>
                  column.getCanHide() && (
                    <label key={column.id}>
                      <input
                        type="checkbox"
                        checked={column.getIsVisible()}
                        onChange={column.getToggleVisibilityHandler()}
                      />
                      {column.columnDef.header}
                    </label>
                  )
              )}
            </div>
          )}
        </div>
        <button onClick={() => setShowAddForm(true)}>Add</button>
        {showAddForm && (
          <div className="form-container">
            <AddForm onClose={() => setShowAddForm(false)} onSave={handleAdd} />
          </div>
        )}
      </div>
      <div className="table-scroll">
        <table className="table-container">
          <thead className="custom-table">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <EditModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        rowData={editingRow}
        onSave={handleSaveEdit}
      />
      <Pagination table={table} />
    </div>
  );
};

export default DataTable;
