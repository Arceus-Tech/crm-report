import React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from '@renderer/dashboard/index';
import MainLayout from '@renderer/layout/main';
import TaggingDetailedReport from '@renderer/tagging_detailed_report/index';
import HierarchyFlow from '@renderer/hierarchy-flow/HierachyFlow';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/historical-report"
          element={
            <MainLayout>
              <TaggingDetailedReport />
            </MainLayout>
          }
        />
        <Route
          path="/hierarchy-flow"
          element={
            <MainLayout>
              <HierarchyFlow />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
}
