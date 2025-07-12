import ActionDropdown from './components/ActionDropdown'

export const getColumns =(handleEdit, handleDelete)=> [
 {
    id: 'actions',
    header: 'Actions',
    enableHiding: false,
    cell: ({ row }) => (
      <ActionDropdown
        onEdit={() => handleEdit(row.original)}
        onDelete={() => handleDelete(row.original.ORDER_NO)}
      />
    ),
    enableHiding: false,
  },
  {
  accessorKey: "DIVN",
  header: "DIVN",
  enableHiding: true,
},
{
  accessorKey: "MSTAE",
  header: "MSTAE",
  enableHiding: true,
},
{
  accessorKey: "STS",
  header: "STS",
  enableHiding: true,
},
{
  accessorKey: "TYP",
  header: "TYP",
  enableHiding: true,
},
{
  accessorKey: "AUART",
  header: "AUART",
  enableHiding: true,
},
{
  accessorKey: "MRPI",
  header: "MRPI",
  enableHiding: true,
},
{
  accessorKey: "MFGPL",
  header: "MFGPL",
  enableHiding: true,
},
{
  accessorKey: "CREATOR",
  header: "CREATOR",
  enableHiding: true,
},
{
  accessorKey: "CUSTNO",
  header: "CUSTNO",
  enableHiding: true,
},
{
  accessorKey: "CUSTOMER",
  header: "CUSTOMER",
  enableHiding: true,
},
{
  accessorKey: "ORDER_NO",
  header: "ORDER_NO",
  enableHiding: true,
},
{
  accessorKey: "ITEM_NO",
  header: "ITEM_NO",
  enableHiding: true,
},
{
  accessorKey: "MATL_NO",
  header: "MATL_NO",
  enableHiding: true,
},
{
  accessorKey: "DESCRIPTION",
  header: "DESCRIPTION",
  enableHiding: true,
},
{
  accessorKey: "FINPO",
  header: "FINPO",
  enableHiding: true,
},
{
  accessorKey: "INTPO",
  header: "INTPO",
  enableHiding: true,
},
{
  accessorKey: "CDRW",
  header: "CDRW",
  enableHiding: true,
},
{
  accessorKey: "MILL",
  header: "MILL",
  enableHiding: true,
},
{
  accessorKey: "CTG",
  header: "CTG",
  enableHiding: true,
},
{
  accessorKey: "SPEC",
  header: "SPEC",
  enableHiding: true,
},
{
  accessorKey: "SFIN",
  header: "SFIN",
  enableHiding: true,
},
{
  accessorKey: "OD",
  header: "OD",
  enableHiding: true,
},
{
  accessorKey: "THK",
  header: "THK",
  enableHiding: true,
},
{
  accessorKey: "LENGTH",
  header: "LENGTH",
  enableHiding: true,
},
{
  accessorKey: "CLASS",
  header: "CLASS",
  enableHiding: true,
},
{
  accessorKey: "GEOMETRY",
  header: "GEOMETRY",
  enableHiding: true,
},
{
  accessorKey: "IN_DIA",
  header: "IN_DIA",
  enableHiding: true,
},
{
  accessorKey: "ORDQ",
  header: "ORDQ",
  enableHiding: true,
},
{
  accessorKey: "ORDUM",
  header: "ORDUM",
  enableHiding: true,
},
{
  accessorKey: "ORDNOS",
  header: "ORDNOS",
  enableHiding: true,
},
{
  accessorKey: "ORDTONS",
  header: "ORDTONS",
  enableHiding: true,
},
{
  accessorKey: "MILLNOS",
  header: "MILLNOS",
  enableHiding: true,
},
{
  accessorKey: "MILLTONS",
  header: "MILLTONS",
  enableHiding: true,
},
{
  accessorKey: "DESPTONS",
  header: "DESPTONS",
  enableHiding: true,
},
{
  accessorKey: "WRKSQ",
  header: "WRKSQ",
  enableHiding: true,
},
{
  accessorKey: "WRKSQ_SO",
  header: "WRKSQ_SO",
  enableHiding: true,
},
{
  accessorKey: "ORDDATE",
  header: "ORDDATE",
  enableHiding: true,
},
{
  accessorKey: "DUEDATE",
  header: "DUEDATE",
  enableHiding: true,
},
{
  accessorKey: "DESPDATE",
  header: "DESPDATE",
  enableHiding: true,
},
{
  accessorKey: "ROLLDATE",
  header: "ROLLDATE",
  enableHiding: true,
},
{
  accessorKey: "DESTINATION",
  header: "DESTINATION",
  enableHiding: true,
},
{
  accessorKey: "CITY",
  header: "CITY",
  enableHiding: true,
},
{
  accessorKey: "LRCAT",
  header: "LRCAT",
  enableHiding: true,
},
{
  accessorKey: "GRADE_S",
  header: "GRADE_S",
  enableHiding: true,
},
{
  accessorKey: "DESPWK",
  header: "DESPWK",
  enableHiding: true,
},
{
  accessorKey: "SHIPTO",
  header: "SHIPTO",
  enableHiding: true,
},
{
  accessorKey: "SOFCE",
  header: "SOFCE",
  enableHiding: true,
},
{
  accessorKey: "BALNOS",
  header: "BALNOS",
  enableHiding: true,
},
{
  accessorKey: "BALTONS",
  header: "BALTONS",
  enableHiding: true,
},
{
  accessorKey: "SEGMENT",
  header: "SEGMENT",
  enableHiding: true,
},
{
  accessorKey: "ZONE",
  header: "ZONE",
  enableHiding: true,
},
{
  accessorKey: "SIGN_OFF_TAG",
  header: "SIGN_OFF_TAG",
  enableHiding: true,
},
{
  accessorKey: "SIGN_OFF_DATE",
  header: "SIGN_OFF_DATE",
  enableHiding: true,
},
{
  accessorKey: "SIGN_OFF_DUEDATE",
  header: "SIGN_OFF_DUEDATE",
  enableHiding: true,
},
{
  accessorKey: "SIGN_OFF_REMARKS",
  header: "SIGN_OFF_REMARKS",
  enableHiding: true,
},
{
  accessorKey: "SIGN_OFF_QTY",
  header: "SIGN_OFF_QTY",
  enableHiding: true,
},
{
  accessorKey: "SALES_AREA",
  header: "SALES_AREA",
  enableHiding: true,
},
{
  accessorKey: "BTR",
  header: "BTR",
  enableHiding: true,
},

  {
    accessorKey: "NRMLNOS",
    header: "NRMLNOS",
    enableHiding: true,
  },
  {
    accessorKey: "NRMLTONS",
    header: "NRMLTONS",
    enableHiding: true,
  },
  {
    accessorKey: "INSPNOS",
    header: "INSPNOS",
    enableHiding: true,
  },
  {
    accessorKey: "INSPTONS",
    header: "INSPTONS",
    enableHiding: true,
  },
  {
    accessorKey: "TRFRNOS",
    header: "TRFRNOS",
    enableHiding: true,
  },
  {
    accessorKey: "TRFRTONS",
    header: "TRFRTONS",
    enableHiding: true,
  },
  {
    accessorKey: "DESPNOS",
    header: "DESPNOS",
    enableHiding: true,
  },
  {
    accessorKey: "BRCHQ",
    header: "BRCHQ",
    enableHiding: true,
  },
  {
    accessorKey: "LTRFRDT",
    header: "LTRFRDT",
    enableHiding: true,
  },
  {
    accessorKey: "LDESPDT",
    header: "LDESPDT",
    enableHiding: true,
  },
  {
    accessorKey: "HOLLOW",
    header: "HOLLOW",
    enableHiding: true,
  },
  {
    accessorKey: "STEEL",
    header: "STEEL",
    enableHiding: true,
  },
  {
    accessorKey: "OD_H",
    header: "OD_H",
    enableHiding: true,
  },
  {
    accessorKey: "THK_H",
    header: "THK_H",
    enableHiding: true,
  },
  {
    accessorKey: "LGTH_H",
    header: "LGTH_H",
    enableHiding: true,
  },
  {
    accessorKey: "CATG_S",
    header: "CATG_S",
    enableHiding: true,
  },
  {
    accessorKey: "WIDTH_S",
    header: "WIDTH_S",
    enableHiding: true,
  },
  {
    accessorKey: "THK_S",
    header: "THK_S",
    enableHiding: true,
  },
  {
    accessorKey: "SFIN_S",
    header: "SFIN_S",
    enableHiding: true,
  },
  {
    accessorKey: "ORDSTS",
    header: "ORDSTS",
    enableHiding: true,
  },
  {
    accessorKey: "ITMSTS",
    header: "ITMSTS",
    enableHiding: true,
  },
  {
    accessorKey: "SCHSTS",
    header: "SCHSTS",
    enableHiding: true,
  },
  {
    accessorKey: "PRMSDATE",
    header: "PRMSDATE",
    enableHiding: true,
  },
  {
    accessorKey: "MESSAGE",
    header: "MESSAGE",
    enableHiding: true,
  },
  {
    accessorKey: "PINO",
    header: "PINO",
    enableHiding: true,
  },
  {
    accessorKey: "PGRP",
    header: "PGRP",
    enableHiding: true,
  },
  {
    accessorKey: "CCR",
    header: "CCR",
    enableHiding: true,
  },
  {
    accessorKey: "ORDLOAD",
    header: "ORDLOAD",
    enableHiding: true,
  },
  {
    accessorKey: "AMOUNT",
    header: "AMOUNT",
    enableHiding: true,
  },
  {
    accessorKey: "BOILER_UNIT",
    header: "BOILER_UNIT",
    enableHiding: true,
  },
  {
    accessorKey: "REQUISITIONER",
    header: "REQUISITIONER",
    enableHiding: true,
  },
  {
    accessorKey: "TRACKING_NO",
    header: "TRACKING_NO",
    enableHiding: true,
  },
  {
    accessorKey: "KGNONUM",
    header: "KGNONUM",
    enableHiding: true,
  },
  {
    accessorKey: "KGNODEN",
    header: "KGNODEN",
    enableHiding: true,
  },
  {
    accessorKey: "SOBSL",
    header: "SOBSL",
    enableHiding: true,
  },
  {
    accessorKey: "FINPLO",
    header: "FINPLO",
    enableHiding: true,
  },
  {
    accessorKey: "INTPLO",
    header: "INTPLO",
    enableHiding: true,
  },
  {
    accessorKey: "VERID",
    header: "VERID",
    enableHiding: true,
  },
  {
    accessorKey: "CNFRMDT",
    header: "CNFRMDT",
    enableHiding: true,
  },
  {
    accessorKey: "CUSTOMER_F",
    header: "CUSTOMER_F",
    enableHiding: true,
  },
  {
    accessorKey: "STODONOS",
    header: "STODONOS",
    enableHiding: true,
  },
  {
    accessorKey: "STODOTONS",
    header: "STODOTONS",
    enableHiding: true,
  },
  {
    accessorKey: "CDESPNOS",
    header: "CDESPNOS",
    enableHiding: true,
  },
  {
    accessorKey: "CDESPTONS",
    header: "CDESPTONS",
    enableHiding: true,
  },
  {
    accessorKey: "BFRSTS",
    header: "BFRSTS",
    enableHiding: true,
  },
  {
    accessorKey: "INCLFLAG",
    header: "INCLFLAG",
    enableHiding: true,
  },
  {
    accessorKey: "LIVSTS",
    header: "LIVSTS",
    enableHiding: true,
  },
  {
    accessorKey: "HITMISS",
    header: "HITMISS",
    enableHiding: true,
  },
  {
    accessorKey: "CPUDT",
    header: "CPUDT",
    enableHiding: true,
  },
  {
    accessorKey: "CPUTM",
    header: "CPUTM",
    enableHiding: true,
  },
  {
    accessorKey: "ERNAM",
    header: "ERNAM",
    enableHiding: true,
  },
  {
    accessorKey: "UPDDT",
    header: "UPDDT",
    enableHiding: true,
  },
  {
    accessorKey: "UPDTM",
    header: "UPDTM",
    enableHiding: true,
  },
  {
    accessorKey: "UPDBY",
    header: "UPDBY",
    enableHiding: true,
  },
  {
    accessorKey: "MATXT2",
    header: "MATXT2",
    enableHiding: true,
  },
  {
    accessorKey: "EFIN",
    header: "EFIN",
    enableHiding: true,
  },
  {
    accessorKey: "DLVBLK",
    header: "DLVBLK",
    enableHiding: true,
  },
  {
    accessorKey: "BLGBLK",
    header: "BLGBLK",
    enableHiding: true,
  },
  {
    accessorKey: "PAYER",
    header: "PAYER",
    enableHiding: true,
  },
  {
    accessorKey: "CRDLIMIT",
    header: "CRDLIMIT",
    enableHiding: true,
  },
  {
    accessorKey: "ADVANCE",
    header: "ADVANCE",
    enableHiding: true,
  },
  {
    accessorKey: "RCVBL",
    header: "RCVBL",
    enableHiding: true,
  },
  {
    accessorKey: "NXTRVWDT",
    header: "NXTRVWDT",
    enableHiding: true,
  },
  {
    accessorKey: "CRDBLK",
    header: "CRDBLK",
    enableHiding: true,
  },
  {
    accessorKey: "OVERDUE",
    header: "OVERDUE",
    enableHiding: true,
  },
  {
    accessorKey: "CHANNEL",
    header: "CHANNEL",
    enableHiding: true,
  },
  {
    accessorKey: "FRTIND",
    header: "FRTIND",
    enableHiding: true,
  },
  {
    accessorKey: "LRTONS",
    header: "LRTONS",
    enableHiding: true,
  },
  {
    accessorKey: "OMS_REMARKS",
    header: "OMS_REMARKS",
    enableHiding: true,
  },
  {
    accessorKey: "HLD_REL_TAG",
    header: "HLD_REL_TAG",
    enableHiding: true,
  },
  {
    accessorKey: "HOLD_DT",
    header: "HOLD_DT",
    enableHiding: true,
  },
  {
    accessorKey: "HOLD_TM",
    header: "HOLD_TM",
    enableHiding: true,
  },
  {
    accessorKey: "RELEASE_DT",
    header: "RELEASE_DT",
    enableHiding: true,
  },
  {
    accessorKey: "RELEASE_TM",
    header: "RELEASE_TM",
    enableHiding: true,
  },
  {
    accessorKey: "HOLD_BY",
    header: "HOLD_BY",
    enableHiding: true,
  },
  {
    accessorKey: "RELAESED_BY",
    header: "RELAESED_BY",
    enableHiding: true,
  },
  {
    accessorKey: "REASON_HOLD",
    header: "REASON_HOLD",
    enableHiding: true,
  },
  {
    accessorKey: "WAYBILL_TAG",
    header: "WAYBILL_TAG",
    enableHiding: true,
  },
  {
    accessorKey: "CREDIT_AVAIL",
    header: "CREDIT_AVAIL",
    enableHiding: true,
  },
  {
    accessorKey: "AGE",
    header: "AGE",
    enableHiding: true,
  },
  {
    accessorKey: "NRM_PO",
    header: "NRM_PO",
    enableHiding: true,
  },
  {
    accessorKey: "GLV_PO",
    header: "GLV_PO",
    enableHiding: true,
  },
  {
    accessorKey: "CLD_PO",
    header: "CLD_PO",
    enableHiding: true,
  },
  {
    accessorKey: "NRM_MATL",
    header: "NRM_MATL",
    enableHiding: true,
  },
  {
    accessorKey: "GLV_MATL",
    header: "GLV_MATL",
    enableHiding: true,
  },
  {
    accessorKey: "CLD_MATL",
    header: "CLD_MATL",
    enableHiding: true,
  },
  {
    accessorKey: "NRM_PLANDT",
    header: "NRM_PLANDT",
    enableHiding: true,
  },
  {
    accessorKey: "GLV_PLANDT",
    header: "GLV_PLANDT",
    enableHiding: true,
  },
  {
    accessorKey: "CLD_PLANDT",
    header: "CLD_PLANDT",
    enableHiding: true,
  },
  {
    accessorKey: "NRM_ACTDT",
    header: "NRM_ACTDT",
    enableHiding: true,
  },
  {
    accessorKey: "GLV_ACTDT",
    header: "GLV_ACTDT",
    enableHiding: true,
  },
  {
    accessorKey: "CLD_ACTDT",
    header: "CLD_ACTDT",
    enableHiding: true,
  },
  {
    accessorKey: "GSTNO",
    header: "GSTNO",
    enableHiding: true,
  },
  {
    accessorKey: "RM_MTAMTO",
    header: "RM_MTAMTO",
    enableHiding: true,
  },
  {
    accessorKey: "ALLOCATION",
    header: "ALLOCATION",
    enableHiding: true,
  },
  {
    accessorKey: "CUSTOMER_PO",
    header: "CUSTOMER_PO",
    enableHiding: true,
  },
  {
    accessorKey: "PLAN_STATUS",
    header: "PLAN_STATUS",
    enableHiding: true,
  },
  {
    accessorKey: "RM_AT_SITE",
    header: "RM_AT_SITE",
    enableHiding: true,
  },
  {
    accessorKey: "RM_AT_SLITTER",
    header: "RM_AT_SLITTER",
    enableHiding: true,
  },
  {
    accessorKey: "P_DDP",
    header: "P_DDP",
    enableHiding: true,
  },
  {
    accessorKey: "P_OTIF",
    header: "P_OTIF",
    enableHiding: true,
  },
  {
    accessorKey: "PLAN_STS",
    header: "PLAN_STS",
    enableHiding: true,
  },
  {
    accessorKey: "RM_REQUIRED",
    header: "RM_REQUIRED",
    enableHiding: true,
  },
  {
    accessorKey: "RM_AVAILABLE",
    header: "RM_AVAILABLE",
    enableHiding: true,
  },
  {
    accessorKey: "OFFER_TYPE",
    header: "OFFER_TYPE",
    enableHiding: true,
  },
  {
    accessorKey: "PLN_DESP_DT",
    header: "PLN_DESP_DT",
    enableHiding: true,
  },
  {
    accessorKey: "PLN_VEH_PLC_DT",
    header: "PLN_VEH_PLC_DT",
    enableHiding: true,
  },
  {
    accessorKey: "ACT_VEH_PLC_DT",
    header: "ACT_VEH_PLC_DT",
    enableHiding: true,
  },
  {
    accessorKey: "PLN_STODO_CRT_DT",
    header: "PLN_STODO_CRT_DT",
    enableHiding: true,
  },
  {
    accessorKey: "ACT_STODO_CRT_DT",
    header: "ACT_STODO_CRT_DT",
    enableHiding: true,
  },
  {
    accessorKey: "PLN_FG_DT",
    header: "PLN_FG_DT",
    enableHiding: true,
  },
  {
    accessorKey: "ACT_FG_DT",
    header: "ACT_FG_DT",
    enableHiding: true,
  },
  {
    accessorKey: "PLN_MILL_DT",
    header: "PLN_MILL_DT",
    enableHiding: true,
  },
  {
    accessorKey: "PLN_RM_DT",
    header: "PLN_RM_DT",
    enableHiding: true,
  },
  {
    accessorKey: "ACT_RM_DT",
    header: "ACT_RM_DT",
    enableHiding: true,
  },
  {
    accessorKey: "CTR_NO",
    header: "CTR_NO",
    enableHiding: true,
  },
  {
    accessorKey: "CTR_LINK",
    header: "CTR_LINK",
    enableHiding: true,
  },
  {
    accessorKey: "CAMPAIGN_NO",
    header: "CAMPAIGN_NO",
    enableHiding: true,
  },
  {
    accessorKey: "REVISED_DESP_DATE",
    header: "REVISED_DESP_DATE",
    enableHiding: true,
  },
  {
    accessorKey: "CAMPAIGN_STATUS",
    header: "CAMPAIGN_STATUS",
    enableHiding: true,
  },
  {
    accessorKey: "CAMPAIGN_RM_STATUS",
    header: "CAMPAIGN_RM_STATUS",
    enableHiding: true,
  },
  {
    accessorKey: "GLV_STK",
    header: "GLV_STK",
    enableHiding: true,
  },
  {
    accessorKey: "BLK_STK",
    header: "BLK_STK",
    enableHiding: true,
  },
  {
    accessorKey: "PRIC_CONDN",
    header: "PRIC_CONDN",
    enableHiding: true,
  },
  {
    accessorKey: "PO_TYPE",
    header: "PO_TYPE",
    enableHiding: true,
  },
  {
    accessorKey: "ROLL_WEEK",
    header: "ROLL_WEEK",
    enableHiding: true,
  },
  {
    accessorKey: "PLAN_MILL",
    header: "PLAN_MILL",
    enableHiding: true,
  },
  {
    accessorKey: "PROCESS_GRP",
    header: "PROCESS_GRP",
    enableHiding: true,
  },
  {
    accessorKey: "SHIPTO_COMMON",
    header: "SHIPTO_COMMON",
    enableHiding: true,
  },
  {
    accessorKey: "CTR_REMARKS",
    header: "CTR_REMARKS",
    enableHiding: true,
  },
];
