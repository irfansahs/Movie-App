"use client";

import React, { useState } from "react";
import { Paginator, PaginatorPageChangeEvent } from "primereact/paginator";
import { useRouter } from "next/navigation";

export default function BasicDemo(props: any) {
  const [first, setFirst] = useState<number>(0);
  const [rows, setRows] = useState<number>(10);
  const Records = Math.ceil(props.pages);

  const router = useRouter();

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
    router.push(`?page=${event.page+1}`);
  };

  return (
    <div className="card">
      <Paginator
        first={first}
        rows={rows}
        totalRecords={Records}
        rowsPerPageOptions={[10, 20, 30]}
        onPageChange={onPageChange}
      ></Paginator>
    </div>
  );
}
