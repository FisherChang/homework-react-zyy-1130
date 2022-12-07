import { HistoryInfo } from "./historyInfo";
import React from "react";

export function HistoryList() {
  return (
    <ul className="history-list">
      <h3 className="history-title">History</h3>
      <HistoryInfo />
    </ul>
  );
}
